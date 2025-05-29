from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.db.session import get_db
from app.models.post import Post
from app.schemas.post import PostCreate, PostResponse, PostUpdate
from app.api.auth import get_current_user
from app.models.user import User

router = APIRouter()

@router.post("/", response_model=PostResponse)
def create_post(post: PostCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Create a new post"""
    db_post = Post(
        title=post.title,
        content=post.content,
        user_id=current_user.id,
        author_id=current_user.id if not post.is_anonymous else None,
        category_id=post.category_id,
        is_anonymous=post.is_anonymous
    )
    
    try:
        db.add(db_post)
        db.commit()
        db.refresh(db_post)
        return db_post
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create post: {str(e)}"
        )

@router.get("/")
def get_posts(
    skip: int = Query(0, ge=0), 
    limit: int = Query(10, ge=1, le=100),
    category_id: Optional[int] = None,
    search: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """Get posts with optional filtering"""
    try:
        print(f"GET /posts request with params: skip={skip}, limit={limit}, category_id={category_id}, search={search}")
        
        query = db.query(Post)
        
        if category_id:
            query = query.filter(Post.category_id == category_id)
        
        if search:
            search_pattern = f"%{search}%"
            query = query.filter(Post.title.like(search_pattern) | Post.content.like(search_pattern))
        
        posts = query.order_by(Post.created_at.desc()).offset(skip).limit(limit).all()
        
        # 데이터 형식 확인 로그 추가
        for post in posts:
            if not hasattr(post, 'user_id') or post.user_id is None:
                print(f"Warning: Post {post.id} has no user_id")
            if not hasattr(post, 'comments'):
                print(f"Warning: Post {post.id} has no comments attribute")
                
        print(f"Found {len(posts)} posts")
        
        # 포스트 데이터를 직접 dict로 변환하여 반환
        result = []
        for post in posts:
            post_dict = {
                "id": post.id,
                "title": post.title,
                "content": post.content,
                "category_id": post.category_id,
                "is_anonymous": post.is_anonymous if hasattr(post, 'is_anonymous') else False,
                "user_id": post.user_id if hasattr(post, 'user_id') and post.user_id is not None else "anonymous",
                "author_id": post.author_id if hasattr(post, 'author_id') else None,
                "created_at": post.created_at,
                "updated_at": post.updated_at,
                "view_count": post.view_count if hasattr(post, 'view_count') else 0,
                "is_pinned": post.is_pinned if hasattr(post, 'is_pinned') else False,
                "is_closed": post.is_closed if hasattr(post, 'is_closed') else False,
                "comments": []  # 빈 댓글 리스트로 기본값 설정
            }
            result.append(post_dict)
        
        return result
    except Exception as e:
        print(f"Error in get_posts: {str(e)}")
        import traceback
        traceback.print_exc()
        raise

@router.get("/{post_id}", response_model=PostResponse)
def get_post(post_id: int, db: Session = Depends(get_db)):
    """Get a post by ID"""
    post = db.query(Post).filter(Post.id == post_id).first()
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    # Increment view count
    post.view_count += 1
    db.commit()
    
    return post

@router.put("/{post_id}", response_model=PostResponse)
def update_post(
    post_id: int, 
    post_update: PostUpdate, 
    current_user: User = Depends(get_current_user), 
    db: Session = Depends(get_db)
):
    """Update a post"""
    db_post = db.query(Post).filter(Post.id == post_id).first()
    if not db_post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    if db_post.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to update this post"
        )
    
    # Update fields if provided
    if post_update.title is not None:
        db_post.title = post_update.title
    if post_update.content is not None:
        db_post.content = post_update.content
    if post_update.category_id is not None:
        db_post.category_id = post_update.category_id
    if post_update.is_anonymous is not None:
        db_post.is_anonymous = post_update.is_anonymous
    
    try:
        db.commit()
        db.refresh(db_post)
        return db_post
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to update post: {str(e)}"
        )

@router.delete("/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(
    post_id: int, 
    current_user: User = Depends(get_current_user), 
    db: Session = Depends(get_db)
):
    """Delete a post"""
    db_post = db.query(Post).filter(Post.id == post_id).first()
    if not db_post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    if db_post.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to delete this post"
        )
    
    try:
        db.delete(db_post)
        db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to delete post: {str(e)}"
        )
