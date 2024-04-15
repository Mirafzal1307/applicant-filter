<template>
  <div>{{ props.data }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>
