<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="">
      <div v-if="props.data.result" class="w-full bg-gray-100 mx-auto text-xl rounded-lg p-10">
        {{ props?.data.result }}
      </div>
      <div v-else class="w-full bg-gray-100 mx-auto  rounded-lg p-10">
        <h1 class="font-bold text-3xl my-3 text-gray-600">
          Ishchining doyimiy turar manzili haqidagi ma'lumotlari
        </h1>
        <div class="w-full">
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">PNFL:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.employee }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Davlat:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.permanent_country_name }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Viloyat:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.permanent_region_name }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Tuman:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.permanent_district_name }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Manzil:</h2>
            <h2 class="font-thin text-2xl text-balance">{{ props?.data[0]?.permanent_address }}</h2>
          </div>
        
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">
              Doyimiy yashash boshlangan sana:
            </h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.permanent_registration_date }} 
            </h2>
          </div>
         
        </div>
      </div>
    </div>
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
  