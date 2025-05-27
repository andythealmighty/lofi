import uuid
from sqlalchemy import Boolean, Column, String, DateTime, Text
from sqlalchemy.dialects.mysql import CHAR
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
from app.db.base import Base

class User(Base):
    __tablename__ = "users"

    id = Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()), unique=True, nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    username = Column(String(50), unique=True, index=True)
    hashed_password = Column(String(255), nullable=False)
    nationality = Column(String(100), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
    
    # Profile information
    display_name = Column(String(100), nullable=True) #this may be replaced by username
    bio = Column(Text, nullable=True)
    avatar_url = Column(String(255), nullable=True)
    
    # User preferences
    preferred_language = Column(String(10), default="en")
    notification_settings = Column(String(1000), default="{}")  # JSON string for notification preferences 