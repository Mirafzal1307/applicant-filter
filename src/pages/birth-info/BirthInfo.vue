<template>
   <div v-if="loading" class="mt-5">
    <CSkeleton />
  </div>
  <div v-else class="">
    <div v-if="props.data.result" class="w-full bg-gray-100 mx-auto text-xl rounded-lg p-10">
      {{ props?.data.result }}
    </div>
    <div v-else class="w-full bg-gray-100 mx-auto  rounded-lg p-10">
      <h1 class="font-bold text-3xl my-3 text-gray-600">
        Ishchining tug'ilganlik haqidagi ma'lumotlari
      </h1>
      <div class="w-full">
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">PNFL:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.pnfl }}</h2>
        </div>
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
          <h2 class="font-thin text-2xl">{{ formatDate(props?.data[0]?.birth_date) }}</h2>
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
          <h2 class="font-thin text-2xl">{{ formatDate(props?.data[0]?.doc_date) }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Hujjat raqami:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.doc_num }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Otasining ismi:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.f_first_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Otasining Familiyasi:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.f_family }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Otasining Ochestvasi:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.f_patronym }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Tug'ilgan sanasi:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.f_birth_day }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">PNFL:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.f_pnfl }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Onasining ismi:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.m_first_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Onasining Familiyasi:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.m_family }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Onasining Ochestvasi:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.m_patronym }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Tug'ilgan sanasi:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.m_birth_day }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">PNFL:</h2>
          <h2 class="font-thin text-2xl">{{ props?.data[0]?.m_pnfl }}</h2>
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
