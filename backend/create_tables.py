#!/usr/bin/env python3
"""
Database initialization script
Creates all tables defined in the models
"""

from app.db.session import engine
from app.db.base import Base
from app.models import user, post, category  # Import all models

def create_tables():
    """Create all database tables"""
    print("Creating database tables...")
    Base.metadata.create_all(bind=engine)
    print("Database tables created successfully!")

if __name__ == "__main__":
    create_tables() 