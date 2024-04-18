<template>
   <div v-if="loading" class="mt-5">
    <CSkeleton />
  </div>
  <div v-else class="">
    <div v-if="props.data.result" class="w-full bg-gray-100 mx-auto text-xl rounded-lg p-10">
      {{ props?.data.result }}
    </div>
    <div v-else class="w-full bg-gray-100 mx-auto rounded-lg p-10">
      <h1 class="font-bold text-3xl my-3 text-gray-600">Nomzodning qarzdorlik ma'lumotlari</h1>
      <div class="w-full">
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Qarzdor nomi:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.debtor_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Qarz summasi:</h2>
          <h2 class="font-thin text-2xl">
            {{ formatNumber(props?.data[0]?.residual_sum) }} UZS
          </h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Qarz olingan joy:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.creditor_name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CSkeleton from '@/components/skeleton/CSkeleton.vue';
import { formatNumber} from '@/shared/utils/utils'
const props = defineProps({
  data: {
    type: Object,
    default() {
      return {}
    }
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>
