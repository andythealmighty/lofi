from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.models.comment import Comment
from app.schemas.post import CommentCreate, CommentResponse
from app.api.auth import get_current_user
from app.models.user import User

router = APIRouter()

@router.post("/", response_model=CommentResponse)
def create_comment(
    comment: CommentCreate, 
    current_user: User = Depends(get_current_user), 
    db: Session = Depends(get_db)
):
    """Create a new comment"""
    db_comment = Comment(
        content=comment.content,
        user_id=current_user.id,
        post_id=comment.post_id,
        parent_id=comment.parent_id
    )
    
    try:
        db.add(db_comment)
        db.commit()
        db.refresh(db_comment)
        return db_comment
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create comment: {str(e)}"
        )

@router.get("/post/{post_id}", response_model=List[CommentResponse])
def get_comments_for_post(post_id: int, db: Session = Depends(get_db)):
    """Get all comments for a post"""
    comments = db.query(Comment).filter(
        Comment.post_id == post_id,
        Comment.parent_id.is_(None)  # Only get top-level comments
    ).all()
    return comments

@router.put("/{comment_id}", response_model=CommentResponse)
def update_comment(
    comment_id: str,
    content: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Update a comment"""
    db_comment = db.query(Comment).filter(Comment.id == comment_id).first()
    if not db_comment:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Comment not found"
        )
    
    if db_comment.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to update this comment"
        )
    
    db_comment.content = content
    db_comment.is_edited = True
    
    try:
        db.commit()
        db.refresh(db_comment)
        return db_comment
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to update comment: {str(e)}"
        )

@router.delete("/{comment_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_comment(
    comment_id: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Delete a comment (soft delete)"""
    db_comment = db.query(Comment).filter(Comment.id == comment_id).first()
    if not db_comment:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Comment not found"
        )
    
    if db_comment.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to delete this comment"
        )
    
    # Soft delete
    db_comment.is_deleted = True
    db_comment.content = "[deleted]"
    
    try:
        db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to delete comment: {str(e)}"
        )
