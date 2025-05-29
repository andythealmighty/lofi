from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    email: EmailStr
    username: str
    nationality: str

class UserCreate(UserBase):
    password: str

class GoogleUserCreate(UserBase):
    google_id: str

class UserResponse(UserBase):
    id: str
    is_active: bool
    is_google_user: bool

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str | None = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str 