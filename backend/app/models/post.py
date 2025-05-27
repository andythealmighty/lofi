from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text, Boolean, CHAR
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
from app.db.base import Base

class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    user_id = Column(CHAR(36), ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
    
    # Post metadata
    author_id = Column(CHAR(36), ForeignKey("users.id"))
    category_id = Column(Integer, ForeignKey("categories.id"))
    is_pinned = Column(Boolean, default=False)
    is_closed = Column(Boolean, default=False)
    view_count = Column(Integer, default=0)
    
    # Relationships
    author = relationship("User", back_populates="posts")
    category = relationship("Category", back_populates="posts")
    comments = relationship("Comment", back_populates="post", cascade="all, delete-orphan")
    tags = relationship("Tag", secondary="post_tags", back_populates="posts")
    
    # Post settings
    allow_comments = Column(Boolean, default=True)
    is_anonymous = Column(Boolean, default=False) 