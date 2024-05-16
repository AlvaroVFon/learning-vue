import axios from 'axios'
class WebinarApi {
  constructor(API_URL) {
    this.API_URL = API_URL
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    })
  }

  async getCourses() {
    const response = await this.axiosInstance
      .get('/courses')
      .then((res) => res.data.results)
      .catch((error) => {
        error
      })
    return response
  }
}
const api = new WebinarApi('https://webinarwise-api.onrender.com/api/')
export default api
