<script setup>
defineProps({
  meta: Object,
  links: Object,
  loading: Boolean,
})

const emit = defineEmits(['next', 'prev'])
</script>

<template>
  <div class="flex justify-between pt-5 border-t border-gray-200">

    <!-- Previous Page button -->
    <button @click="emit('prev')" :disabled="!links?.prev || loading" class="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 p-2 rounded-lg cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
      </svg>
    </button>

    <!-- Current Page -->
    <div v-if="meta.current_page" class="bg-gray-800 text-white p-2 rounded-lg">
      <span>
        Page {{ meta.current_page }} / {{ meta.last_page }}
      </span>
    </div>

    <!-- Next Page button -->
    <button @click="emit('next')" :disabled="!links?.next || loading" class="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 p-2 rounded-lg cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </button>
  </div>

  <!-- Loading -->
  <div v-if="loading" class="flex justify-center items-center mt-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="size-5 fill-info motion-safe:animate-spin dark:fill-info">
      <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" />
      <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
    </svg>
  </div>
</template>
