<template>
   <div v-if="loading" class="mt-5">
    <CSkeleton />
  </div>
    <div v-else class="">
      <div v-if="props.data.result" class="w-full bg-gray-100 mx-auto text-xl rounded-lg p-10">
        {{ props?.data.result }}
      </div>
      <div v-else class="w-full bg-gray-100 mx-auto rounded-lg p-10">
        <h1 class="font-bold text-3xl my-3 text-gray-600">
          Nomzodning psixodispanser haqidagi ma'lumotlari
        </h1>
        <div class="w-full">
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">PNFL:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.pin }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">I.F.SH:</h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.name }} {{ props?.data[0]?.surname }}
              {{ props?.data[0]?.middle_name }}
            </h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Hayot tarzi:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.life_status }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">TEL raqami:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.phone }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Manzil:</h2>
            <h2 class="font-thin text-2xl text-balance">{{ props?.data[0]?.permanent_address }}</h2>
          </div>
  
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Nogironlik guruhi:</h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.disability_group }}
            </h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Nogironlik sanasi:</h2>
            <h2 class="font-thin text-2xl">
              {{ formatDate(props?.data[0]?.disability_date) }}
            </h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">O'qish joyi:</h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.study_place }}
            </h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Ish joyi:</h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.workplace }}
            </h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">O'zgargan holati:</h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.status_change_data }}
            </h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Holati:</h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.status }}
            </h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Qayt etilgan shifoxona:</h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.med_org }}
            </h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Qayt etilgan sana:</h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.created_at }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import CSkeleton from '@/components/skeleton/CSkeleton.vue';
import { formatDate } from '@/shared/utils/utils';

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
  