# 기존 코드 제거
# from sqlalchemy.ext.declarative import declarative_base
# Base = declarative_base()

# 새로운 임포트 순서
from app.db.base_class import Base  # noqa

# Import models first
from app.models.user import User  # noqa
from app.models.category import Category  # noqa
from app.models.post import Post  # noqa
from app.models.comment import Comment  # noqa
from app.models.tag import Tag  # noqa

# Import relationships after all models are defined
from sqlalchemy.orm import relationship, backref
from app.models.relationships import *  # noqa

# Initialize relationships
# This ensures that all models are defined before relationships are established

# Import all the models, so that Base has them before being
# imported by Alembic 