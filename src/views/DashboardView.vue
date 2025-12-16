<script setup>
import AppTravelCard from '@/components/AppTravelCard.vue'
import AppCardContainer from '@/components/AppCardContainer.vue'
import AppPagination from '@/components/AppPagination.vue'
import UserGreeting from '@/components/UserGreeting.vue'
import { usePagination } from '@/composables/usePagination'
import { getTravelsFromApi } from '@/api/travel'

const {
  data: travels,
  meta,
  links,
  next,
  prev,
  loading
} = usePagination(getTravelsFromApi)
</script>

<template>
  <div class="bg-white py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- User greeting-->
      <UserGreeting />

      <!-- Cards Container -->
      <AppCardContainer>

        <!-- Cards -->
        <AppTravelCard
          v-for="travel in travels"
          :key="travel.id"
          :title="travel.name"
          :description="travel.description"
          :createdAt="travel.created_at"
          :numberOfDays="travel.number_of_days"
          :numberOfNights="travel.number_of_nights"
        />
      </AppCardContainer>

      <!-- Pagination -->
      <AppPagination
        :meta="meta"
        :links="links"
        :loading="loading"
        @next="next"
        @prev="prev"
      />
    </div>
  </div>
</template>
