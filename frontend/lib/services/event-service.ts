import api from '../api';

// 이벤트 타입 정의
export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  organizer_id: string;
  max_attendees: number;
  current_attendees: number;
  price: string;
  type: 'free' | 'paid';
  tags: string[];
  created_at: string;
  updated_at: string;
}

// 이벤트 생성 입력 타입
export interface EventCreateInput {
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  max_attendees: number;
  price: string;
  type: 'free' | 'paid';
  tags: string[];
}

// 이벤트 API 서비스
export const EventService = {
  // 이벤트 목록 조회
  getEvents: async (params?: { type?: 'free' | 'paid'; date?: string; search?: string }) => {
    const response = await api.get('/events', { params });
    return response.data;
  },

  // 특정 이벤트 조회
  getEvent: async (eventId: number) => {
    const response = await api.get(`/events/${eventId}`);
    return response.data;
  },

  // 이벤트 생성
  createEvent: async (eventData: EventCreateInput) => {
    const response = await api.post('/events', eventData);
    return response.data;
  },

  // 이벤트 수정
  updateEvent: async (eventId: number, eventData: Partial<EventCreateInput>) => {
    const response = await api.put(`/events/${eventId}`, eventData);
    return response.data;
  },

  // 이벤트 삭제
  deleteEvent: async (eventId: number) => {
    await api.delete(`/events/${eventId}`);
    return true;
  },

  // 이벤트 참가 신청
  joinEvent: async (eventId: number) => {
    const response = await api.post(`/events/${eventId}/join`);
    return response.data;
  },

  // 이벤트 참가 취소
  leaveEvent: async (eventId: number) => {
    const response = await api.post(`/events/${eventId}/leave`);
    return response.data;
  },

  // 이벤트 참가자 목록 조회
  getEventAttendees: async (eventId: number) => {
    const response = await api.get(`/events/${eventId}/attendees`);
    return response.data;
  }
};
