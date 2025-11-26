<script setup>
import GuestLayout from '@/components/GuestLayout.vue';
import useAuth from '@/composables/useAuth.js';
import { reactive } from 'vue';

const { login, errorMessage } = useAuth()

const form = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <GuestLayout>
    <h2 class="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Login</h2>

    <div v-if="errorMessage" class="mt-4 py-2 px-3 rounded text-white bg-red-400">
      {{errorMessage}}
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="login(form)" class="space-y-3">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
          <div class="mt-2">
            <input
              v-model="form.email"
              type="email"
              name="email"
              id="email"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <!-- Password -->
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="form.password"
              type="password"
              name="password"
              id="password"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <!-- Submit -->
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Login</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Don't have an account yet?
        {{ ' ' }}
        <RouterLink :to="{ name: 'Register'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Register</RouterLink>
      </p>
    </div>
  </GuestLayout>
</template>

<style scoped></style>
