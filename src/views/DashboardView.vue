<script setup>
import { useAuthStore } from '@/store/authStore.js';

const auth = useAuthStore();
</script>

<template>
  <h1>Dashboard</h1>

  <div v-if="auth.isLoggedIn">
    <p>
      Hello my dear {{ auth.user.name }}
    </p>
  </div>
</template>
