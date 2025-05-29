import axios from 'axios';

// 환경 변수에서 API URL 가져오기, 없으면 기본값 사용
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// API 클라이언트 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 - 토큰 추가
api.interceptors.request.use((config) => {
  // 브라우저 환경에서만 localStorage 접근
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// 응답 인터셉터 - 오류 처리
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401 오류 (인증 실패)시 로그아웃 처리
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        // 로그인 페이지로 리다이렉트
        window.location.href = '/auth/signin';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
