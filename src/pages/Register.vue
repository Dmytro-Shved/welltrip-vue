<script setup>
import GuestLayout from '@/components/GuestLayout.vue'
</script>

<template>
  <GuestLayout>
    <!-- Heading -->
    <h2 class="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Register</h2>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-3" action="#" method="POST">
        <!-- Name -->
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Name</label>
          <div class="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
          <div class="mt-2">
            <input
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
          </div>

          <div class="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <!-- Password Confirmation -->
        <div>
          <div class="flex items-center justify-between">
            <label for="password_confirmation" class="block text-sm/6 font-medium text-gray-900">Password Confirmation</label>
          </div>

          <div class="mt-2">
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <!-- Submit -->
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Register</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account?
        {{ ' ' }}
        <RouterLink :to="{ name: 'Login'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Login</RouterLink>
      </p>
    </div>
  </GuestLayout>
</template>

<style scoped></style>
