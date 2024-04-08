<template>
  <div class="container mt-10">
    <div class="flex justify-end">
      <RouterLink to="/add-employee">
        <CButton class=""> Employee yaratish</CButton>
      </RouterLink>
    </div>

    <div>employee list</div>
  </div>
</template>

<script setup lang="ts">
import CButton from '@/components/button/CButton.vue'
</script>
