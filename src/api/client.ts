import axios from 'axios'
import type { User, Stats, Activity } from './types'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const api = {
  auth: {
    login: async (email: string, password: string) => {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password
      })
      return response.data
    }
  },

  users: {
    getProfile: async (): Promise<User> => {
      const response = await apiClient.get(API_ENDPOINTS.USERS.PROFILE)
      return response.data
    }
  },

  stats: {
    getDashboardStats: async (): Promise<Stats[]> => {
      const response = await apiClient.get(API_ENDPOINTS.STATS.DASHBOARD)
      return response.data
    },

    getRecentActivities: async (): Promise<Activity[]> => {
      const response = await apiClient.get(API_ENDPOINTS.STATS.ACTIVITIES)
      return response.data
    }
  }
}
