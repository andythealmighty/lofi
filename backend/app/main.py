import logging
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import traceback
from app.db.base import Base  # 이 부분을 추가하세요 - 모든 모델 로드
from app.api import auth, posts, comments, profiles
from app.db.session import engine

# 로깅 설정
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create all tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="LoFair API",
    version="0.1.0",
    openapi_url="/api/openapi.json"
)

# 오류 로깅 미들웨어 추가
@app.middleware("http")
async def log_exceptions(request: Request, call_next):
    try:
        response = await call_next(request)
        if response.status_code >= 400:
            logger.error(f"Error response {response.status_code} for request {request.url}")
        return response
    except Exception as e:
        logger.error(f"Unhandled exception: {str(e)}")
        logger.error(traceback.format_exc())
        raise

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(posts.router, prefix="/api/posts", tags=["posts"])
app.include_router(comments.router, prefix="/api/comments", tags=["comments"])
app.include_router(profiles.router, prefix="/api/profiles", tags=["profiles"])

# 디버그 엔드포인트 추가
@app.get("/debug/routes")
async def debug_routes():
    """모든 등록된 라우트 확인"""
    routes = []
    for route in app.routes:
        routes.append({
            "path": route.path,
            "name": route.name,
            "methods": route.methods
        })
    return {"routes": routes}

@app.get("/")
async def root():
    return {"message": "Welcome to LoFair API!"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "0.1.0"} 