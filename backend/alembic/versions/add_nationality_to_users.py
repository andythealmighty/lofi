"""add nationality to users

Revision ID: add_nationality_to_users
Revises: 
Create Date: 2024-03-19

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'add_nationality_to_users'
down_revision = None
branch_labels = None
depends_on = None

def upgrade() -> None:
    # Add nationality column to users table
    op.add_column('users', sa.Column('nationality', sa.String(100), nullable=False))

def downgrade() -> None:
    # Remove nationality column from users table
    op.drop_column('users', 'nationality') 