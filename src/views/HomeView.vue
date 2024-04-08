<template>
  <div class="container">
    <!-- <div class="text-purple-800 font-bold bg-green-400">home view</div> -->
    <CTab />
    <!-- <CButton @click="notify"> notify me</CButton> -->
  </div>
</template>

<script setup lang="ts">
import CButton from '@/components/button/CButton.vue'
import CTab from '@/components/tab/CTab.vue'
import { toast, type ToastOptions } from 'vue3-toastify'

const notify = () => {
  toast('Wow so easy !', {
    autoClose: 3000,
    position: toast.POSITION.BOTTOM_RIGHT
  } as ToastOptions)
}
</script>
