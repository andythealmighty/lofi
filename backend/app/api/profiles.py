from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.user import User
from app.schemas.user import UserProfile, UserProfileUpdate, UserActivitySummary
from app.api.auth import get_current_user
from sqlalchemy.sql import func
from app.models.post import Post
from app.models.comment import Comment

router = APIRouter()

@router.get("/me", response_model=UserProfile)
def get_my_profile(current_user: User = Depends(get_current_user)):
    """Get current user's profile"""
    return current_user

@router.put("/me", response_model=UserProfile)
def update_my_profile(
    profile_update: UserProfileUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Update current user's profile"""
    # Update fields if provided
    if profile_update.display_name is not None:
        current_user.display_name = profile_update.display_name
    if profile_update.bio is not None:
        current_user.bio = profile_update.bio
    if profile_update.avatar_url is not None:
        current_user.avatar_url = profile_update.avatar_url
    if profile_update.preferred_language is not None:
        current_user.preferred_language = profile_update.preferred_language
    
    try:
        db.commit()
        db.refresh(current_user)
        return current_user
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to update profile: {str(e)}"
        )

@router.get("/user/{username}", response_model=UserProfile)
def get_user_profile(username: str, db: Session = Depends(get_db)):
    """Get user profile by username"""
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    return user

@router.get("/activity", response_model=UserActivitySummary)
def get_my_activity(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get current user's activity summary"""
    post_count = db.query(func.count(Post.id)).filter(Post.user_id == current_user.id).scalar()
    comment_count = db.query(func.count(Comment.id)).filter(Comment.user_id == current_user.id).scalar()
    
    # Get last active timestamp (from most recent post or comment)
    last_post = db.query(Post).filter(Post.user_id == current_user.id).order_by(Post.created_at.desc()).first()
    last_comment = db.query(Comment).filter(Comment.user_id == current_user.id).order_by(Comment.created_at.desc()).first()
    
    last_active = None
    if last_post and last_comment:
        last_active = max(last_post.created_at, last_comment.created_at)
    elif last_post:
        last_active = last_post.created_at
    elif last_comment:
        last_active = last_comment.created_at
    
    return {
        "post_count": post_count,
        "comment_count": comment_count,
        "last_active": last_active
    }
