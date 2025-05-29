from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserProfile(BaseModel):
    username: str
    display_name: Optional[str] = None
    bio: Optional[str] = None
    avatar_url: Optional[str] = None
    nationality: str
    preferred_language: str = "en"
    
    class Config:
        from_attributes = True

class UserProfileUpdate(BaseModel):
    display_name: Optional[str] = None
    bio: Optional[str] = None
    avatar_url: Optional[str] = None
    preferred_language: Optional[str] = None

class UserActivitySummary(BaseModel):
    post_count: int
    comment_count: int
    last_active: Optional[datetime] = None
