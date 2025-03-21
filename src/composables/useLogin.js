import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/apiService'
import { useLocalStorage } from '@/composables/useLocalStorage'

const { set, get } = useLocalStorage()

const user = ref(get('user') || null)

function useLogin() {
  const router = useRouter()
  const loading = ref(false)
  const error = ref(null)

  async function login(credentials) {
    loading.value = true
    try {
      const response = await apiService.post('/user/login', credentials)

      if (response.status === 200) {
        user.value = response.data
        set('user', response.data)
        router.push('/')
      } else {
        error.value = 'Invalid credentials'
      }

      return false
    } catch (err) {
      error.value = 'Invalid credentials'
      return false
    } finally {
      loading.value = false
    }
  }

  const isAuthenticated = computed(() => user.value !== null)

  function logout() {
    if (user.value) {
      user.value = null
      set('user', null)
      router.push('/login')
    }
  }

  return { login, logout, isAuthenticated, user, loading, error }
}

export { useLogin }
