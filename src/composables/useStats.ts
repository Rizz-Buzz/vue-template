import { ref, onMounted } from 'vue'
import { api } from '@/api/client'
import type { Stats, Activity } from '@/api/types'

export function useStats() {
  const stats = ref<Stats[]>([])
  const recentActivities = ref<Activity[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchStats = async () => {
    loading.value = true
    try {
      stats.value = await api.stats.getDashboardStats()
      recentActivities.value = await api.stats.getRecentActivities()
    } catch (err) {
      error.value = 'Failed to fetch dashboard data'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchStats)

  return {
    stats,
    recentActivities,
    loading,
    error,
    refresh: fetchStats
  }
}
