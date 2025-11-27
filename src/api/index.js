import axios from 'axios'
import { useAuthStore } from '@/store/authStore.js';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore()
      authStore.setLoggedIn(false)
      authStore.setUser(null)
    }
    // show error message
    return Promise.reject(error)
  }
)
export default axiosInstance
