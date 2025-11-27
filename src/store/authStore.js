import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null,
  }),

  actions: {
    setLoggedIn(value){
      this.isLoggedIn = value
    },

    setUser(user){
      this.user = user
    },

    reset() {
      this.isLoggedIn = false
      this.user = null
    }
  }
})
