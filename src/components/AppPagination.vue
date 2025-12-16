<script setup>
defineProps({
  meta: Object,
  links: Object,
  loading: Boolean,
})

const emit = defineEmits(['next', 'prev'])
</script>

<template>
  <div class="flex justify-between pt-5">
    <button @click="emit('prev')" :disabled="!links?.prev || loading">
      ← Prev
    </button>

    <span v-if="meta.current_page">
      Page {{ meta.current_page }} / {{ meta.last_page }}
    </span>

    <button @click="emit('next')" :disabled="!links?.next || loading">
      Next →
    </button>
  </div>

  <p v-if="loading">Loading...</p>
</template>
