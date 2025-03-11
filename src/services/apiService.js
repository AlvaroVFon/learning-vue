import axios from 'axios'
import parameters from '@/config/parameters'

class ApiService {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
      timeout: 5000,
      headers: { 'Content-Type': 'application/json' },
    })

    this.api.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error.response?.data || error.message),
    )
  }

  async get(endpoint, params = {}) {
    const response = await this.api.get(endpoint, { params })
    return response.data
  }

  async post(endpoint, data) {
    return await this.api.post(endpoint, data)
  }

  async put(endpoint, data) {
    const response = await this.api.put(endpoint, data)
    return response.data
  }

  async delete(endpoint) {
    const response = await this.api.delete(endpoint)
    return response.data
  }
}

const apiService = new ApiService(parameters.api.baseURL)

export default apiService
