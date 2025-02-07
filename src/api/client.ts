import type { User, Stats, Activity } from './types'
import { API_ENDPOINTS } from './endpoints'

export const api = {
  auth: {
    login: async (email: string, password: string) => {
      const { data } = await useFetch(API_ENDPOINTS.AUTH.LOGIN, {
        method: 'POST',
        body: { email, password },
      })
      return data.value
    }
  },

  users: {
    getProfile: async (): Promise<User> => {
      const { data } = await useFetch<User>(API_ENDPOINTS.USERS.PROFILE)
      return data.value
    }
  },

  stats: {
    getDashboardStats: async (): Promise<Stats[]> => {
      const { data } = await useFetch<Stats[]>(API_ENDPOINTS.STATS.DASHBOARD)
      return data.value
    },

    getRecentActivities: async (): Promise<Activity[]> => {
      const { data } = await useFetch<Activity[]>(API_ENDPOINTS.STATS.ACTIVITIES)
      return data.value
    }
  }
}
