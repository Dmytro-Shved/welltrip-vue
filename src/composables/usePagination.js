import { ref, watch } from 'vue'

export function usePagination(fetcher) {
  const page = ref(1)
  const data = ref([])
  const meta = ref({})
  const links = ref({})

  const loading = ref(false)
  const error = ref(null)

  const load = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetcher(page.value)

      data.value = response.data.data
      meta.value = response.data.meta
      links.value = response.data.links
    } catch (e) {
      error.value = 'Failed to load data'
    } finally {
      loading.value = false
    }
  }

  watch(page, load, { immediate: true })

  const next = () => {
    if (links.value.next) page.value++
  }

  const prev = () => {
    if (links.value.prev) page.value--
  }

  return {
    page,
    data,
    meta,
    links,
    loading,
    error,
    next,
    prev,
    reload: load,
  }
}
