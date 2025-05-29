"""
관계 설정 파일
모든 모델이 정의된 후에 관계를 설정합니다.
"""
from sqlalchemy.orm import relationship, backref
from app.models.user import User
from app.models.post import Post
from app.models.comment import Comment
from app.models.category import Category
from app.models.tag import Tag

# User-Post 관계
User.posts = relationship("Post", foreign_keys="Post.user_id", back_populates="user")
User.authored_posts = relationship("Post", foreign_keys="Post.author_id", back_populates="author")
User.comments = relationship("Comment", back_populates="user")

# Post 관계
Post.user = relationship("User", foreign_keys=[Post.user_id], back_populates="posts")
Post.author = relationship("User", foreign_keys=[Post.author_id], back_populates="authored_posts")
Post.category = relationship("Category", back_populates="posts")
Post.comments = relationship("Comment", back_populates="post", cascade="all, delete-orphan")
Post.tags = relationship("Tag", secondary="post_tags", back_populates="posts")

# Comment 관계
Comment.user = relationship("User", back_populates="comments")
Comment.post = relationship("Post", back_populates="comments")
Comment.replies = relationship("Comment", backref=backref("parent", remote_side=[Comment.id]))

# Category 관계
Category.posts = relationship("Post", back_populates="category")
Category.children = relationship("Category", backref=backref("parent", remote_side=[Category.id]))

# Tag 관계
Tag.posts = relationship("Post", secondary="post_tags", back_populates="tags")
