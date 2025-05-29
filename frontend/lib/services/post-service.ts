import api from '../api';

// 게시물 타입 정의
export interface Post {
  id: number;
  title: string;
  content: string;
  author_id: string;
  category_id: number;
  created_at: string;
  updated_at: string;
  view_count: number;
  is_anonymous: boolean;
  is_pinned: boolean;
  is_closed: boolean;
  comments?: Array<{ id: string; }>;  // 댓글 필드 추가 (선택적)
}

// 댓글 타입 정의
export interface Comment {
  id: string;
  content: string;
  user_id: string;
  post_id: number;
  parent_id?: string;
  created_at: string;
  updated_at: string;
  is_edited: boolean;
}

// 게시물 생성 입력 타입
export interface PostCreateInput {
  title: string;
  content: string;
  category_id: number;
  is_anonymous?: boolean;
}

// 게시물 API 서비스
export const PostService = {
  // 게시물 목록 조회
  getPosts: async (params?: { skip?: number; limit?: number; category_id?: number; search?: string }) => {
    try {
      // 기본값 설정
      const defaultParams = {
        skip: 0,
        limit: 20
      };
      const queryParams = { ...defaultParams, ...params };
      
      console.log("API 요청 URL:", '/api/posts/', "파라미터:", queryParams);
      
      // API 호출
      const response = await api.get('/api/posts/', { params: queryParams });
      console.log("API 응답:", response.data);
      
      return response.data;
    } catch (error: unknown) {
      console.error("Error fetching posts:", error);
      
      // axios 오류인지 확인
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as { 
          response?: { 
            status: number;
            headers: Record<string, string>;
            data: unknown;
          };
          request?: unknown;
          message?: string;
        };
        
        if (axiosError.response) {
          // 서버 응답이 있는 경우
          console.error("Status:", axiosError.response.status);
          console.error("Headers:", axiosError.response.headers);
          console.error("Data:", axiosError.response.data);
        } else if (axiosError.request) {
          // 요청은 보냈지만 응답을 받지 못한 경우
          console.error("No response received:", axiosError.request);
        } else if (axiosError.message) {
          // 요청 설정 중에 문제가 발생한 경우
          console.error("Error setting up request:", axiosError.message);
        }
      }
      
      // 에러 발생 시 빈 배열 반환
      return [];
    }
  },

  // 특정 게시물 조회
  getPost: async (postId: number) => {
    try {
      const response = await api.get(`/api/posts/${postId}`);
      return response.data;
    } catch (error: unknown) {
      console.error(`Error fetching post ${postId}:`, error);
      return null;
    }
  },

  // 게시물 생성
  createPost: async (postData: PostCreateInput) => {
    const response = await api.post('/api/posts/', postData);
    return response.data;
  },

  // 게시물 수정
  updatePost: async (postId: number, postData: Partial<PostCreateInput>) => {
    const response = await api.put(`/api/posts/${postId}`, postData);
    return response.data;
  },

  // 게시물 삭제
  deletePost: async (postId: number) => {
    await api.delete(`/api/posts/${postId}`);
    return true;
  },

  // 게시물의 댓글 조회
  getComments: async (postId: number) => {
    const response = await api.get(`/api/comments/post/${postId}`);
    return response.data;
  },

  // 댓글 작성
  createComment: async (data: { post_id: number; content: string; parent_id?: string }) => {
    const response = await api.post('/api/comments', data);
    return response.data;
  },

  // 댓글 삭제
  deleteComment: async (commentId: string) => {
    await api.delete(`/api/comments/${commentId}`);
    return true;
  }
};
