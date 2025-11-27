import { ref } from "vue";
import router from '@/router/index.js';
import axiosInstance from '@/api/index.js';
import { useAuthStore } from '@/store/authStore.js'

const errorMessage = ref('')

export default function useAuth() {
  const auth = useAuthStore();

  const login = async (credentials) => {
    await axiosInstance.get('http://localhost:8000/sanctum/csrf-cookie');

    try {
      await axiosInstance.post('/login', credentials).then(response => {
        // set pinia auth status
        auth.setLoggedIn(true)
        // set pinia user data
        auth.setUser(response.data.data)

        // redirect to home page
        router.push({name: 'Dashboard'})
      });
    }catch (e){
      // errorMessage.value = e.response.data.message
    }
  }

  const register = async (credentials) => {
    await axiosInstance.get('http://localhost:8000/sanctum/csrf-cookie');

    try {
      await axiosInstance.post('/register', credentials).then(response => {
        // set pinia auth status
        auth.setLoggedIn(true)
        // set pinia user data
        auth.setUser(response.data.data)

        // redirect to home page
        router.push({name: 'Dashboard'})
      });
    }catch (e){
      errorMessage.value = e.response.data.message
    }
  }

  const logout = async () => {
    try {
      await axiosInstance.post('/logout').then(response => {
        // reset pinia
        auth.reset()

        router.push({name: 'Dashboard'})
      });
    }catch (e){
      errorMessage.value = e.response.data.message
    }
  }

  const attempt = async () => {
    try {
      await axiosInstance.get('/user').then(response => {
        // set pinia auth status
        auth.setLoggedIn(true)
        // set pinia user data
        auth.setUser(response.data.data)
      });
    } catch (e) {
      auth.setLoggedIn(false)
      auth.setUser(null)
    }
  }

  return {
    login,
    register,
    logout,
    attempt,
    errorMessage
  }
}

