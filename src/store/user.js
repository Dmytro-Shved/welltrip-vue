import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { getCurrentUser } from '@/api/user.js'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const isAuthorized = computed(() => !!user.value)
  const isAdmin = computed(() => user.value.roles.includes('admin'))
  const isEditor = computed(() => user.value.roles.includes('editor'))

  async function getUser() {
    try {
      const userData = await getCurrentUser()
      userData ? user.value = userData : user.value = null
      console.log('Logged in: ', user.value?.name)
    } catch (error) {
      console.log('Error: ',  error)
      return error
    }
  }

  function updateUser(userData) {
    userData ? user.value = userData : user.value = null
  }

  return {
    user,
    isAuthorized,
    isAdmin,
    isEditor,
    getUser,
    updateUser
  }
})
