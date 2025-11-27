<script setup>
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <!-- Logo -->
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-20 w-auto" src="https://thumbs2.imgbox.com/85/67/o2tm4B7X_t.png" alt="Welltrip">
    </div>

    <!-- Authentication Pages -->
    <slot/>
  </div>
</template>
