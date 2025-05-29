import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Boolean, CHAR, Integer
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
from app.db.base_class import Base

class Comment(Base):
    __tablename__ = "comments"

    id = Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()), unique=True, nullable=False)
    content = Column(Text, nullable=False)
    user_id = Column(CHAR(36), ForeignKey("users.id"), nullable=False)
    post_id = Column(Integer, ForeignKey("posts.id"), nullable=False)
    parent_id = Column(CHAR(36), ForeignKey("comments.id"), nullable=True)  # For nested comments
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
    
    # 관계 정의는 relationships.py에서 설정 

    # Metadata
    is_edited = Column(Boolean, default=False)
    is_deleted = Column(Boolean, default=False)  # Soft delete
