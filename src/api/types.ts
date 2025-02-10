export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  createdAt: string
}

export interface Stats {
  id: string
  title: string
  value: number
  trend: 'up' | 'down'
  percentage: number
}

export interface Activity {
  id: string
  type: 'login' | 'update' | 'create' | 'delete'
  description: string
  timestamp: string
  userId: string
}
