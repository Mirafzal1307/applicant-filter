<template>
  <div class="">
    <div v-if="props.data.result" class="w-full bg-gray-100 mx-auto text-xl rounded-lg p-10">
      {{ props?.data.result }}
    </div>
    <div v-else class="w-full bg-gray-100 mx-auto rounded-lg p-10">
      <h1 class="font-bold text-3xl my-3 text-gray-600">
        Nomdozning ta'limi haqidagi ma'lumotlari
      </h1>
      <div class="w-full" v-for="data in props.data" :key="data.id">
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Ta'lim turi:</h2>
          <h2 class="font-thin text-2xl">{{ data?.edu_type_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Muassasa turi:</h2>
          <h2 class="font-thin text-2xl">{{ data?.institution_type_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Muassasa Nomi:</h2>
          <h2 class="font-thin text-2xl">{{ data?.institution_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Ta'lim darajasi:</h2>
          <h2 class="font-thin text-2xl">{{ data?.degree_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Ta'lim turi:</h2>
          <h2 class="font-thin text-2xl text-balance">{{ data?.edu_form_name }}</h2>
        </div>

        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Fakultitet nomi:</h2>
          <h2 class="font-thin text-2xl">
            {{ data?.speciality_name }}
          </h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Ta'lim davomiyligi:</h2>
          <h2 class="font-thin text-2xl text-balance">{{ data?.edu_duration_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Ta'lim muddati:</h2>
          <h2 class="font-thin text-2xl text-balance">
            {{ formatDate(data?.edu_starting_date) }}- {{ formatDate(data?.edu_finishing_date) }}
          </h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Diplom berilgan sana:</h2>
          <h2 class="font-thin text-2xl text-balance">
            {{ formatDate(data?.diploma_given_date) }}
          </h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">
            Diplomning seriya va raqami:
          </h2>
          <h2 class="font-thin text-2xl text-balance">
            {{ data?.diploma_serial }} {{ data?.diploma_number }}
          </h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Diplomning holati:</h2>
          <h2 class="font-thin text-2xl text-balance">{{ data?.status_name }}</h2>
        </div>
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '@/shared/utils/utils'

const props = defineProps({
  data: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>
