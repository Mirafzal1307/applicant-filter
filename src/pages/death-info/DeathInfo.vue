<template>
    <div class=" ">
      <div v-if="props.data.result" class="w-full bg-gray-100 mx-auto  rounded-lg p-10">
        {{ props?.data.result }}
      </div>
      <div v-else class="w-full bg-gray-100 mx-auto rounded-lg p-10">
        <h1 class="font-bold text-3xl my-3 text-gray-600">
          Ishchining tug'ilganlik haqidagi ma'lumotlari
        </h1>
        <div class="w-full">
        
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Ism:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.name }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Familiya:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.surname }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Otasining ismi:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.patronym }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Tug'ilgan sana:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.birth_date }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Jinsi:</h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.gender_code === 2 ? 'AYOL' : 'ERKAK' }}
            </h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">
              Tug'ilganlik haqidagi guvohnoma Ma'lumotlari:
            </h2>
            <h2 class="font-thin text-2xl">
              {{ props?.data[0]?.cert_series }} {{ props?.data[0]?.cert_number }}
            </h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Berilgan sana:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.doc_date }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">Hujjat raqami:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.doc_num }}</h2>
          </div>
        
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">O'lim qayt etilgan sana:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.death_date }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">O'lim qayt etilgan joy:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.death_place }}</h2>
          </div>
          <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
            <h2 class="font-semibold text-2xl text-gray-600 uppercase">O'liganlik haqida guvohnoma berilgan sana:</h2>
            <h2 class="font-thin text-2xl">{{ props?.data[0]?.cert_death_date }}</h2>
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
  console.log('fghjgjjk')
  </script>
  