from typing import Any, Dict, Generic, Optional, TypeVar, List
from fastapi import status
from pydantic import BaseModel, ConfigDict
#이거 활용해서 response 만들어주쇼~
DataT = TypeVar('DataT')


class ResponseBase(BaseModel):
    """Base response class for consistent response handling."""
    success: bool
    message: str
    status_code: int
    
    model_config = ConfigDict(from_attributes=True)

    def __init__(
        self,
        success: bool,
        message: str,
        status_code: int,
        **kwargs
    ):
        super().__init__(
            success=success,
            message=message,
            status_code=status_code,
            **kwargs
        )


class ErrorResponseBase(ResponseBase):
    """Base response class for error responses."""
    error_code: str

    def __init__(
        self,
        success: bool,
        message: str,
        status_code: int,
        error_code: str,
        **kwargs
    ):
        super().__init__(
            success=success,
            message=message,
            status_code=status_code,
            error_code=error_code,
            **kwargs
        )


class SuccessResponse(ResponseBase, Generic[DataT]):
    """Response for successful single item operations."""
    data: Optional[DataT] = None

    def __init__(
        self,
        message: str = "Success",
        data: Optional[DataT] = None
    ):
        super().__init__(
            success=True,
            message=message,
            status_code=status.HTTP_200_OK,
            data=data
        )


class CreatedResponse(ResponseBase, Generic[DataT]):
    """Response for successful creation operations."""
    data: Optional[DataT] = None

    def __init__(
        self,
        message: str = "Resource created successfully",
        data: Optional[DataT] = None
    ):
        super().__init__(
            success=True,
            message=message,
            status_code=status.HTTP_201_CREATED,
            data=data
        )


class NoContentResponse(ResponseBase):
    """Response for successful operations with no content return."""

    def __init__(
        self,
        message: str = "Operation completed successfully"
    ):
        super().__init__(
            success=True,
            message=message,
            status_code=status.HTTP_204_NO_CONTENT
        )


class PaginatedResponse(ResponseBase, Generic[DataT]):
    """Response for paginated list operations."""
    data: List[DataT]
    total: int
    page: int
    page_size: int

    def __init__(
        self,
        data: List[DataT],
        total: int,
        page: int,
        page_size: int,
        message: str = "Success"
    ):
        super().__init__(
            success=True,
            message=message,
            status_code=status.HTTP_200_OK,
            data=data,
            total=total,
            page=page,
            page_size=page_size
        )


class BadRequestResponse(ErrorResponseBase):
    """Response for bad request errors."""

    def __init__(
        self,
        message: str = "Bad request",
        error_code: str = "bad_request"
    ):
        super().__init__(
            success=False,
            message=message,
            status_code=status.HTTP_400_BAD_REQUEST,
            error_code=error_code
        )


class UnauthorizedResponse(ErrorResponseBase):
    """Response for unauthorized access."""

    def __init__(
        self,
        message: str = "Unauthorized access",
        error_code: str = "unauthorized"
    ):
        super().__init__(
            success=False,
            message=message,
            status_code=status.HTTP_401_UNAUTHORIZED,
            error_code=error_code
        )


class ForbiddenResponse(ErrorResponseBase):
    """Response for forbidden access."""

    def __init__(
        self,
        message: str = "Access forbidden",
        error_code: str = "forbidden"
    ):
        super().__init__(
            success=False,
            message=message,
            status_code=status.HTTP_403_FORBIDDEN,
            error_code=error_code
        )


class NotFoundResponse(ErrorResponseBase):
    """Response for resource not found."""

    def __init__(
        self,
        message: str = "Resource not found",
        error_code: str = "not_found"
    ):
        super().__init__(
            success=False,
            message=message,
            status_code=status.HTTP_404_NOT_FOUND,
            error_code=error_code
        )


class ConflictResponse(ErrorResponseBase):
    """Response for conflict errors."""

    def __init__(
        self,
        message: str = "Resource conflict",
        error_code: str = "conflict"
    ):
        super().__init__(
            success=False,
            message=message,
            status_code=status.HTTP_409_CONFLICT,
            error_code=error_code
        )


class ValidationErrorResponse(ErrorResponseBase):
    """Response for validation errors."""

    def __init__(
        self,
        message: str = "Validation error",
        error_code: str = "validation_error"
    ):
        super().__init__(
            success=False,
            message=message,
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            error_code=error_code
        )


class ServerErrorResponse(ErrorResponseBase):
    """Response for server errors."""

    def __init__(
        self,
        message: str = "Internal server error",
        error_code: str = "server_error"
    ):
        super().__init__(
            success=False,
            message=message,
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            error_code=error_code
        )
