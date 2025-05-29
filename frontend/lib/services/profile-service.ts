import api from '../api';

// 사용자 프로필 타입 정의
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  nationality: string;
  bio?: string;
  avatar_url?: string;
  created_at: string;
}

// 프로필 수정 입력 타입
export interface ProfileUpdateInput {
  username?: string;
  bio?: string;
  nationality?: string;
}

// 사용자 활동 요약 타입
export interface UserActivitySummary {
  post_count: number;
  comment_count: number;
  last_active?: string;
}

// 프로필 API 서비스
export const ProfileService = {
  // 내 프로필 조회
  getMyProfile: async () => {
    const response = await api.get('/profiles/me');
    return response.data;
  },

  // 프로필 수정
  updateProfile: async (profileData: ProfileUpdateInput) => {
    const response = await api.put('/profiles/me', profileData);
    return response.data;
  },

  // 사용자 활동 요약 조회
  getMyActivity: async () => {
    const response = await api.get('/profiles/activity');
    return response.data;
  }
};
