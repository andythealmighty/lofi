from fastapi import APIRouter, Depends, HTTPException, status, Response
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.core.security import verify_password, get_password_hash, create_access_token, verify_token
from app.db.session import get_db
from app.models.user import User
from app.schemas.auth import UserCreate, UserResponse, Token, GoogleUserCreate
from app.schemas.response import (
    SuccessResponse, CreatedResponse, BadRequestResponse, 
    UnauthorizedResponse, ServerErrorResponse
)
from datetime import timedelta
from app.core.config import settings
from pydantic import BaseModel

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")

class EmailCheck(BaseModel):
    email: str

class UsernameCheck(BaseModel):
    username: str

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    """Get current user from JWT token"""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    # 토큰 로그 추가
    print(f"Received token: {token}")
    
    email = verify_token(token)
    if email is None:
        raise credentials_exception
    
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception
    
    return user

@router.post("/check-email", response_model=SuccessResponse)
def check_email(email_data: EmailCheck, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == email_data.email).first()
    return SuccessResponse(
        message="Email availability checked",
        data={"exists": db_user is not None}
    )

@router.post("/check-username", response_model=SuccessResponse)
def check_username(username_data: UsernameCheck, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.username == username_data.username).first()
    return SuccessResponse(
        message="Username availability checked",
        data={"exists": db_user is not None}
    )

@router.get("/me", response_model=SuccessResponse)
def get_current_user_info(current_user: User = Depends(get_current_user)):
    """Get current user information from JWT token"""
    user_data = {
        "id": current_user.id,
        "email": current_user.email,
        "username": current_user.username,
        "nationality": current_user.nationality,
        "is_active": current_user.is_active,
        "is_google_user": current_user.is_google_user,
        "created_at": current_user.created_at.isoformat() if current_user.created_at else None
    }
    
    return SuccessResponse(
        message="User information retrieved successfully",
        data=user_data
    )

@router.post("/signup", response_model=CreatedResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    # Create new user
    hashed_password = get_password_hash(user.password)
    db_user = User(
        email=user.email,
        username=user.username,
        hashed_password=hashed_password,
        nationality=user.nationality
    )
    
    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        
        # SQLAlchemy 모델을 딕셔너리로 변환하여 전달
        user_data = {
            "id": db_user.id,
            "email": db_user.email,
            "username": db_user.username,
            "nationality": db_user.nationality,
            "is_active": db_user.is_active,
            "is_google_user": db_user.is_google_user,
            "created_at": db_user.created_at.isoformat() if db_user.created_at else None
        }
        
        return CreatedResponse(
            message="User created successfully", 
            data=user_data  # 딕셔너리로 변환된 데이터 사용
        )
    except Exception as e:
        db.rollback()
        # If we get a unique constraint violation, it means the email or username was taken
        # despite our frontend checks (race condition)
        if "Duplicate entry" in str(e):
            return BadRequestResponse(
                message="Email or username already taken",
                error_code="duplicate_user"
            )
        return ServerErrorResponse(
            message="Failed to create user",
            error_code="user_creation_failed"
        )

@router.post("/login", response_model=SuccessResponse)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        # HTTPException을 발생시켜 401 상태 코드로 응답
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return SuccessResponse(
        message="Login successful",
        data={"access_token": access_token, "token_type": "bearer"}
    )

@router.post("/google-signup", response_model=SuccessResponse)
def create_google_user(user: GoogleUserCreate, db: Session = Depends(get_db)):
    # Check if user with this email or google_id already exists
    existing_user = db.query(User).filter(
        (User.email == user.email) | (User.google_id == user.google_id)
    ).first()
    
    if existing_user:
        return BadRequestResponse(
            message="Email or Google account already registered",
            error_code="duplicate_user"
        )
    
    # Create new user with Google ID
    db_user = User(
        email=user.email,
        username=user.username,
        nationality=user.nationality,
        google_id=user.google_id,
        is_google_user=True
    )
    
    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        
        # Create access token for the new user
        access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": db_user.email}, expires_delta=access_token_expires
        )
        
        return SuccessResponse(
            message="Google user created successfully",
            data={"access_token": access_token, "token_type": "bearer"}
        )
    except Exception as e:
        db.rollback()
        if "Duplicate entry" in str(e):
            return BadRequestResponse(
                message="Email or username already taken",
                error_code="duplicate_user"
            )
        return ServerErrorResponse(
            message="Failed to create user",
            error_code="user_creation_failed"
        ) 