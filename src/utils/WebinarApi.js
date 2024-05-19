import axios from 'axios';
class WebinarApi {
  constructor(API_URL) {
    this.API_URL = API_URL;
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    });
  }
  async login(email, password) {
    const response = await this.axiosInstance
      .post('/auth/login', {
        email,
        password,
      })
      .then((res) => res.data)
      .catch((error) => {
        error.response;
      });
    return response;
  }
  async getCourses(url) {
    const response = await this.axiosInstance
      .get(`${url}`)
      .then((res) => res.data)
      .catch((error) => {
        error;
      });
    return response;
  }
  async getCategories() {
    const response = await this.axiosInstance.get('/category');
    return response.data.results;
  }
}
const api = new WebinarApi('https://webinarwise-api.onrender.com/api/');
export default api;
