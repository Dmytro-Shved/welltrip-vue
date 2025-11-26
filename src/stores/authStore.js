import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    user: null,
  }),

  actions: {
    setAuthenticated(value){
      this.authenticated = value
    },

    setUser(user){
      this.user = user
    },

    reset() {
      this.authenticated = false
      this.user = null
    }
  }
})
