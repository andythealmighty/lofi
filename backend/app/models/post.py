from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text, Boolean, CHAR
from datetime import datetime, timezone
from app.db.base_class import Base

class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    user_id = Column(String(36), ForeignKey("users.id"))
    author_id = Column(String(36), ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
    
    # Post metadata
    category_id = Column(Integer, ForeignKey("categories.id"))
    is_pinned = Column(Boolean, default=False)
    is_closed = Column(Boolean, default=False)
    view_count = Column(Integer, default=0)
    
    # Post settings
    allow_comments = Column(Boolean, default=True)
    is_anonymous = Column(Boolean, default=False) 

    # 관계 정의는 relationships.py에서 설정 