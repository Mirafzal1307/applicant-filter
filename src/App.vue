<template>
  <div  >
    <component :is="currentLayout" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from '@/components/layout/Navbar.vue'
import Login from './pages/login/Login.vue';
const route = useRoute()

const currentLayout = computed(() => (route.meta.layout === 'default' ? Navbar : Login ))
</script>
