import { ref } from "vue";
import router from '@/router/index.js';
import axiosClient from '@/axios.js';
import { useAuthStore } from '@/stores/authStore.js';

const errorMessage = ref('')

export default function useAuth() {
  const auth = useAuthStore();

  const login = async (credentials) => {
    await axiosClient.get('http://localhost:8000/sanctum/csrf-cookie');

    try {
      await axiosClient.post('/login', credentials).then(response => {
        // set pinia auth status
        auth.setAuthenticated(true)
        // set pinia user data
        auth.setUser(response.data.data)

        // redirect to home page
        router.push({name: 'Home'})
      });
    }catch (e){
      errorMessage.value = e.response.data.message
    }
  }

  const register = async (credentials) => {
    await axiosClient.get('http://localhost:8000/sanctum/csrf-cookie');

    try {
      await axiosClient.post('/register', credentials).then(response => {
        // set pinia auth status
        auth.setAuthenticated(true)
        // set pinia user data
        auth.setUser(response.data.data)

        // redirect to home page
        router.push({name: 'Home'})
      });
    }catch (e){
      errorMessage.value = e.response.data.message
    }
  }

  const logout = async () => {
    try {
      await axiosClient.post('/logout').then(response => {
        // reset pinia
        auth.reset()

        router.push({name: 'Login'})
      });
    }catch (e){
      errorMessage.value = e.response.data.message
    }
  }

  const attempt = async () => {
    try {
      await axiosClient.get('/user').then(response => {
        // set pinia auth status
        auth.setAuthenticated(true)
        // set pinia user data
        auth.setUser(response.data.data)
      });
    } catch (e) {
      auth.setAuthenticated(false)
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

