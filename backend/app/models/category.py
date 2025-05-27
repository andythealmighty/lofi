from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
from app.db.base import Base

class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
    description = Column(String(500))
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    
    # Category settings
    parent_id = Column(Integer, ForeignKey("categories.id"), nullable=True)
    order = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)
    
    # Relationships
    posts = relationship("Post", back_populates="category")
    subcategories = relationship("Category", backref=relationship("parent", remote_side=[id]))
    
    # Category metadata
    post_count = Column(Integer, default=0)
    last_post_at = Column(DateTime, nullable=True) 