<template>
   <div v-if="loading" class="mt-5">
    <CSkeleton />
  </div>
  <div v-else class="">
    {{ props?.data.result }}
    <div v-if="props.data.result" class="w-full bg-gray-100 mx-auto text-xl rounded-lg p-10">
      {{ props?.data.result }}
    </div>
    <div v-else class="w-full bg-gray-100 mx-auto rounded-lg p-10">
      <h1 class="font-bold text-3xl my-3 text-gray-600">Nomdozning ish tarixi</h1>
      <div class="w-full" v-for="data in props.data" :key="data.id">
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Korxona nomi:</h2>
          <h2 class="font-thin text-2xl">{{ data?.company_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Shartnoma sanasi:</h2>
          <h2 class="font-thin text-2xl">{{ formatDate(data?.contract_date) }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Ishlash muddati:</h2>
          <h2 class="font-thin text-2xl">
            {{ formatDate(data?.start_date) }}-{{
              data?.end_date === null ? 'Hozishda ishlamoqda' : formatDate(data?.end_date)
            }}
          </h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Lavozimi:</h2>
          <h2 class="font-thin text-2xl">{{ data?.position_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Bo'lim:</h2>
          <h2 class="font-thin text-2xl text-balance">{{ data?.structure_name }}</h2>
        </div>

        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Ishxona Manzili:</h2>
          <h2 class="font-thin text-2xl">
            {{ data?.workplace_address }}
          </h2>
        </div>

        <br /><br />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CSkeleton from '@/components/skeleton/CSkeleton.vue';
import { formatDate } from '@/shared/utils/utils'

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
