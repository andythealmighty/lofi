from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class CommentBase(BaseModel):
    content: str
    
class CommentCreate(CommentBase):
    post_id: int
    parent_id: Optional[str] = None

class CommentResponse(CommentBase):
    id: str
    user_id: str
    post_id: int
    parent_id: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    is_edited: bool
    
    class Config:
        from_attributes = True

class PostBase(BaseModel):
    title: str
    content: str
    category_id: int
    is_anonymous: bool = False

class PostCreate(PostBase):
    pass

class PostUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    category_id: Optional[int] = None
    is_anonymous: Optional[bool] = None

class PostResponse(BaseModel):
    id: int
    title: str
    content: str
    category_id: int
    is_anonymous: bool
    user_id: str
    author_id: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    view_count: int
    is_pinned: bool
    is_closed: bool
    comments: Optional[List[CommentResponse]] = []
    
    class Config:
        from_attributes = True
        
        # 추가: 날짜 직렬화 포맷 지정
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }
