from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import and include routers
# from app.api.v1 import users, businesses, reviews

@app.get("/")
async def root():
    return {"message": "Welcome to Platform for Foreigners API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": settings.VERSION} 