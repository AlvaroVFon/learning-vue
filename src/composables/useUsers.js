import { ref } from 'vue'
import apiService from '@/services/apiService'

export function useUsers() {
  const users = ref([])
  const error = ref(null)
  const loading = ref(false)

  const fetchUsers = async () => {
    try {
      loading.value = true
      users.value = await apiService.get('/users')
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { users, loading, error, fetchUsers }
}
