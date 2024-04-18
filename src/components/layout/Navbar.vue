<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-6 sticky shadow-md">
    <div class="container flex justify-between items-center">
      <img src="../../assets/image/MKB_logo.svg" alt="MKB LOGO" class="w-[20%]" />
      <div class="flex overflow-hidden items-center">
        <img
          class="inline-block h-12 w-12 mr-4 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />

        <CButton @click="logout()" bg-color="bg-gray-300">
          <Icon icon="mdi:sign-out" class="text-white text-2xl font-bold" />
        </CButton>
      </div>
    </div>
  </div>

  <RouterView :key="$route.fullPath" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import CButton from '../button/CButton.vue'

const logout = () => {
  localStorage.clear()
  location.reload()
}

</script>
