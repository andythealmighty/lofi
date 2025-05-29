from app.db.session import get_db
from app.models.user import User
from app.models.category import Category
from app.models.post import Post
from app.core.security import get_password_hash
import uuid
from datetime import datetime, timezone

def create_initial_data():
    db = next(get_db())
    
    # 카테고리 생성
    categories = [
        {"name": "질문", "description": "한국 여행에 관한 질문"},
        {"name": "팁", "description": "한국 여행 팁"},
        {"name": "경험", "description": "한국 여행 경험"}
    ]
    
    db_categories = []
    for cat_data in categories:
        category = Category(
            name=cat_data["name"],
            description=cat_data["description"]
        )
        db.add(category)
        db_categories.append(category)
    
    db.commit()
    
    # 테스트 사용자 생성
    test_user = User(
        id=str(uuid.uuid4()),
        email="test@example.com",
        username="testuser",
        hashed_password=get_password_hash("password123"),
        nationality="International",
        display_name="Test User"
    )
    
    db.add(test_user)
    db.commit()
    
    # 테스트 게시물 생성
    posts_data = [
        {
            "title": "서울에서 꼭 가봐야 할 곳은?",
            "content": "서울을 처음 방문합니다. 꼭 가봐야 할 명소는 어디인가요?",
            "category_id": db_categories[0].id  # 질문 카테고리
        },
        {
            "title": "한국의 지하철 이용 팁",
            "content": "서울의 지하철은 매우 편리합니다. 여기 몇 가지 유용한 팁이 있습니다...",
            "category_id": db_categories[1].id  # 팁 카테고리
        },
        {
            "title": "제주도 여행 경험",
            "content": "제주도에서의 5일간 여행 경험을 공유합니다...",
            "category_id": db_categories[2].id  # 경험 카테고리
        }
    ]
    
    for post_data in posts_data:
        post = Post(
            title=post_data["title"],
            content=post_data["content"],
            user_id=test_user.id,
            author_id=test_user.id,
            category_id=post_data["category_id"]
        )
        db.add(post)
    
    db.commit()
    
    print("초기 데이터가 성공적으로 생성되었습니다.")

if __name__ == "__main__":
    create_initial_data()
