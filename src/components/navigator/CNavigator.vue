<template>
  <div>
    <div class="w-fit my-4 mb-6">
      <CButton
        @click="goBack"
        bg-color="transparent"
        text-color="text-gray-700"
        border-color="border border-blue-600 border-2"
        class="text-xl "
      >
        <Icon icon="mdi:arrow-back" class="font-bold text-2xl" /> {{ props.title }}</CButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

import { useRouter } from 'vue-router'
import CButton from '../button/CButton.vue'
import { Icon } from '@iconify/vue'

const router = useRouter()
const goBack = () => {
  if (router) {
    router.back()
  }
}
</script>

<style scoped></style>
