<template>
  <div class="flex flex-col text-start gap-y-2">
    <label class="text-xs font-bold text-black uppercase" :for="id">{{ label }}</label>
    <input
      class="text-black rounded-md px-4 py-3 w-full bg-[#E0E7FF33] border-[#E0E7FF] placeholder:text-[#79849c] border-solid border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      :value="modelValue"
      @input="updateModelValue"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      v-maska:[options]
      :data-maska="dataMaska"
      :data-maska-tokens="dataMaskaTokens"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { vMaska } from 'maska'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Object,
    default: () => {
      return {}
    }
  },
  dataMaska: {
    type: String,
    default: ''
  },
  dataMaskaTokens: {
    type: String,
    default: ''
  }
})
console.log(props.options)

// eslint-disable-next-line vue/valid-define-emits
const emit = defineEmits()

const updateModelValue = (event: any) => {
  if (typeof props.modelValue === 'string') {
    const refModelValue = ref(props.modelValue)
    emit('update:modelValue', refModelValue.value)
  }

  // Don't directly assign to props, emit an event instead
  emit('update:modelValue', event.target.value)
}
</script>
