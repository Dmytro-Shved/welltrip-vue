<template>
  <main class="grid min-h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-white">404</p>
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Page not found</h1>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink :to="{name: 'Home'}" class="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-700">Go back home</RouterLink>
      </div>
    </div>
  </main>
</template>
