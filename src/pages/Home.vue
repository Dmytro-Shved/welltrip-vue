<script setup>
import { useAuthStore } from '@/stores/authStore.js'

const auth = useAuthStore();

</script>

<template>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate dolore facere laboriosam, nesciunt quos! Aut dignissimos doloremque eius exercitationem laudantium numquam praesentium qui tempora totam voluptatibus. Accusantium, cupiditate eaque natus nisi officia quis rerum sunt velit! Assumenda facere illo incidunt minus, officia repudiandae unde vitae! A adipisci atque autem, delectus dolore eaque error fugit id inventore labore laboriosam libero minima modi molestiae non, nulla omnis reprehenderit sit unde veritatis vitae voluptate voluptatem, voluptatibus

  <div v-if="auth.authenticated">
    <p>
      Hello {{ auth.user.name}}
    </p>
  </div>
</template>
