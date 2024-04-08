<template>
  <div>
    <button
      :class="[bgColor, textColor, borderColor, borderRadius]"
      class="font-bold py-2 px-4 focus:outline-none focus:shadow-outline flex items-center justify-center gap-1 w-full"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const buttonBorder = ref('')

// eslint-disable-next-line no-unused-vars
const props: CButtonProps = defineProps({
  bgColor: {
    type: String,
    default: 'bg-primary'
  },
  textColor: {
    type: String,
    default: 'text-white'
  },

  borderRadius: {
    type: String,
    default: 'rounded'
  },
  borderColor: {
    type: String,
    default: ''
  }
})

if (props) {
  buttonBorder.value = 'border'
}

type CButtonProps = {
  bgColor: string
  textColor: string
  borderRadius: string
  borderColor: string
}

</script>
