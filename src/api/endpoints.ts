export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh'
  },
  USERS: {
    BASE: '/users',
    BY_ID: (id: string) => `/users/${id}`,
    PROFILE: '/api/users/profile'
  },
  STATS: {
    DASHBOARD: '/api/stats/dashboard',
    ACTIVITIES: '/api/stats/activities'
  }
} as const
