import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // state
  const isLoggedIn = ref(false);
  const user = ref(null);

  // actions
  const setLoggedIn = (value) => {
    isLoggedIn.value = value;
  };

  const setUser = (value) =>{
    user.value = value
  };

  const reset = () => {
    isLoggedIn.value = false
    user.value = null;
  };

  return {
    // state
    isLoggedIn,
    user,
    // actions
    setLoggedIn,
    setUser,
    reset,
  }
})
