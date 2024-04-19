<template>
   <div v-if="loading" class="mt-5">
    <CSkeleton />
  </div>
  <div v-else class="">
    <div v-if="props.data.result" class="w-full bg-gray-100 mx-auto text-xl rounded-lg p-10">
      {{ data.result }}
    </div>
    <div v-else class="w-full bg-gray-100 mx-auto rounded-lg p-10">
      <h1 class="font-bold text-3xl my-3 text-gray-600">
        Nomzodning nigoh to'g'risidagi ma'lumotlari
      </h1>
      <div class="w-full">
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Hujjat sanasi:</h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.doc_date }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Hujjat seria va raqami:</h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.cert_series }}:{{ data[0]?.cert_number }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Hujjat sanasi:</h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.cert_date }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Erning familiyasi:</h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.h_family }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">
            Erning nigohdan keyingi familiyasi:
          </h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.h_family_after }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Erning ismi:</h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.h_first_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Erning otasini ismi:</h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.h_patronym }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Tug'ilgan kuni:</h2>
          <h2 class="font-thin text-2xl text-balance">{{ data[0]?.h_birth_day }}</h2>
        </div>

        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Fuqaroligi:</h2>
          <h2 class="font-thin text-2xl">
            {{ data[0]?.h_sitizen }}
          </h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">PNFL:</h2>
          <h2 class="font-thin text-2xl">
            {{ data[0]?.h_pnfl }}
          </h2>
        </div>
       
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Xotinning familiyasi:</h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.w_family }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">
            Xotinning nigohdan keyingi familiyasi:
          </h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.w_family_after }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Xotinning ismi:</h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.w_first_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Xotinning otasini ismi:</h2>
          <h2 class="font-thin text-2xl">{{ data[0]?.w_patronym }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Tug'ilgan kuni:</h2>
          <h2 class="font-thin text-2xl text-balance">{{ data[0]?.w_birth_day }}</h2>
        </div>

        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Fuqaroligi:</h2>
          <h2 class="font-thin text-2xl">
            {{ data[0]?.w_sitizen }}
          </h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">PNFL:</h2>
          <h2 class="font-thin text-2xl">
            {{ data[0]?.w_pnfl }}
          </h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Qaydlar:</h2>
          <h2 class="font-thin text-2xl">
            {{ data[0]?.notes }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CSkeleton from '@/components/skeleton/CSkeleton.vue';

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
