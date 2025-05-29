"""change_user_model_for_Oauth

Revision ID: 72b7b831864f
Revises: add_nationality_to_users
Create Date: 2024-03-19 10:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '72b7b831864f'
down_revision: Union[str, None] = 'add_nationality_to_users'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # First drop the foreign key constraint
    op.drop_constraint('posts_ibfk_3', 'posts', type_='foreignkey')
    
    # Then drop the tables in the correct order
    op.drop_table('posts')
    op.drop_table('categories')
    
    # Add new columns to users table
    op.add_column('users', sa.Column('google_id', sa.String(255), nullable=True))
    op.add_column('users', sa.Column('is_google_user', sa.Boolean(), nullable=False, server_default='0'))
    
    # Make hashed_password nullable
    op.alter_column('users', 'hashed_password',
               existing_type=sa.String(255),
               nullable=True)
    
    # Add unique constraint for google_id
    op.create_unique_constraint(None, 'users', ['google_id'])


def downgrade() -> None:
    # Remove the unique constraint
    op.drop_constraint(None, 'users', type_='unique')
    
    # Remove the new columns
    op.drop_column('users', 'is_google_user')
    op.drop_column('users', 'google_id')
    
    # Make hashed_password non-nullable again
    op.alter_column('users', 'hashed_password',
               existing_type=sa.String(255),
               nullable=False)
    
    # Recreate the tables (you'll need to add the appropriate columns and constraints)
    op.create_table('categories',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(255), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    
    op.create_table('posts',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('category_id', sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(['category_id'], ['categories.id'], name='posts_ibfk_3'),
        sa.PrimaryKeyConstraint('id')
    ) 