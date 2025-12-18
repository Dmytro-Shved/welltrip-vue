<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, } from '@headlessui/vue'
import AppLogo from '@/components/AppLogo.vue'
import DesktopNavLinks from '@/components/DesktopNavLinks.vue'
import MobileNavButton from '@/components/MobileNavButton.vue'
import { provide } from 'vue'
import { logout } from '@/api/auth.js'
import { useUserStore } from '@/store/user.js'
import { routerPush } from '@/router/index.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import MobileNavLinks from '@/components/MobileNavLinks.vue'

const { isAuthorized, isAdmin, isEditor } = storeToRefs(useUserStore())

const { updateUser } = useUserStore()

async function onLogout() {
  try {
    await logout()
  } finally {
    updateUser(null)
    await routerPush('Dashboard')
  }
}

provide('logout', onLogout)

const navigation = computed(() => {
  // Public routes
  const items = [
    { name: 'Dashboard', to: { name: 'Dashboard' } },
    { name: 'Tours', to: { name: 'Tours' } },
  ]

  // Admin routes
  if (isAdmin.value){
    items.push(
      { name: 'Create Travel', to: { name: 'New Travel' } }
    )
  }

  // Editor routes
  if (isEditor.value){
    // items.push()
  }

  // Auth routes
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
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ close }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo and title -->
        <AppLogo />

        <!-- Desktop Navigation links -->
        <DesktopNavLinks :navigation="navigation"/>

        <!-- Mobile Menu button -->
        <div class="-mr-2 flex md:hidden">
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-sm p-2 bg-white/5 hover:bg-white/4 text-white">
            <!-- Mobile Navigation Button -->
            <MobileNavButton />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition-all duration-600 ease-out"
      enter-from-class="transform max-h-0"
      enter-to-class="transform translate-y-0 max-h-96"
      leave-active-class="transition-all duration-400 ease-in"
      leave-from-class="transform translate-y-0 max-h-96"
      leave-to-class="transform max-h-0">

      <DisclosurePanel class="md:hidden overflow-hidden">
        <!-- Mobile Navigation Links -->
        <MobileNavLinks :navigation="navigation" @close="close()"/>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>
