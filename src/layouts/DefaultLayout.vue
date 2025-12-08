<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue';
import { logout } from '@/api/auth.js'
import { useUserStore } from '@/store/user.js'
import { routerPush } from '@/router/index.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { isAuthorized } = storeToRefs(useUserStore())

const { updateUser } = useUserStore()

async function onLogout() {
  try {
    await logout()
  } finally {
    updateUser(null)
    await routerPush('Dashboard')
  }
}

const navigation = computed(() => {
  const items = [
    { name: 'Dashboard', to: { name: 'Dashboard' } },
    { name: 'Tours', to: { name: 'Tours' } },
  ]

  if (!isAuthorized.value) {
    items.push(
      { name: 'Login', to: { name: 'Login' } },
      { name: 'Register', to: { name: 'Register' } }
    )
  }

  return items
})
</script>

<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ close }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo and title -->
          <div class="flex items-center space-x-2">
            <div class="shrink-0">
              <img
                class="size-10"
                src="https://thumbs2.imgbox.com/85/67/o2tm4B7X_t.png"
                alt="Welltrip"
              />
            </div>
            <div>
              <p class="text-sm text-white font-bold">The Journey Begins</p>
            </div>
          </div>

          <!-- Desktop nav links -->
          <div class="hidden md:block">
            <div class="flex items-center space-x-4">
              <div class="flex items-baseline space-x-4">
                <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  :class="[
                    $route.name === item.to.name
                      ? 'bg-white/5 text-white'
                      : 'text-gray-300 hover:text-white',
                    'block rounded-sm px-3 py-2 text-base font-medium',
                  ]"
                >
                  {{ item.name }}
                </RouterLink>
              </div>

              <!-- User Dropdown -->
              <Menu as="div" class="relative ml-3">
                <MenuButton
                  class="relative flex max-w-xs items-center rounded-sm p-2 bg-white/25 hover:bg-white/20 text-white"
                >
                  <div class="block h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </div>
                </MenuButton>

                <transition
                  enter-active-class="transition duration-100"
                  enter-from-class="transform opacity-0"
                  enter-to-class="transform scale-100"
                  leave-active-class="transition duration-75"
                  leave-from-class="transform scale-100"
                  leave-to-class="transform opacity-0"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5"
                  >
                    <MenuItem>
                      <button
                        @click="onLogout"
                        class="flex items-center px-4 py-2 text-sm text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                          />
                        </svg>
                        Logout
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="-mr-2 flex md:hidden">
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-sm p-2 bg-white/5 hover:bg-white/4 text-white"
            >
              <span class="absolute -inset-0.5"></span>
              <div class="block size-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </DisclosureButton>
          </div>
        </div>
      </div>

      <!-- Mobile nav -->
      <transition
        enter-active-class="transition-all duration-600 ease-out"
        enter-from-class="transform max-h-0"
        enter-to-class="transform translate-y-0 max-h-96"
        leave-active-class="transition-all duration-400 ease-in"
        leave-from-class="transform translate-y-0 max-h-96"
        leave-to-class="transform max-h-0"
      >
        <DisclosurePanel class="md:hidden overflow-hidden">
          <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <RouterLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              @click="close"
              :class="[
                $route.name === item.to.name
                  ? 'text-white bg-white/5'
                  : 'text-gray-300 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              ]"
              :aria-current="$route.name === item.to.name ? 'page' : undefined"
            >
              {{ item.name }}
            </RouterLink>

            <!-- Logout -->
            <button
              @click="onLogout; close()"
              class="text-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Logout
            </button>
          </div>
        </DisclosurePanel>
      </transition>
    </Disclosure>

    <!-- Main content -->
    <RouterView />
  </div>
</template>
