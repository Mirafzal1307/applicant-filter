<template>
  <div class=" ">
    <div class="w-full bg-gray-100 mx-auto  rounded-lg p-10">
      <h1 class="font-bold text-3xl my-3 text-gray-600">Ishchining ma'lumotlari</h1>
      <div class="w-full">
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Ism:</h2>
          <h2 class="font-thin text-2xl">{{ props.data[0].firstname }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Familiya:</h2>
          <h2 class="font-thin text-2xl">{{ props.data[0].lastname }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Otasining ismi:</h2>
          <h2 class="font-thin text-2xl">{{ props.data[0].patronym }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Tug'ilgan sana:</h2>
          <h2 class="font-thin text-2xl">{{ props.data[0].birth_date }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Jinsi:</h2>

          <h2 class="font-thin text-2xl">{{ props.data[0].sex === 1 ? 'AYOL' : 'ERKAK' }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Passport Ma'lumotlari:</h2>
          <h2 class="font-thin text-2xl">
            {{ props.data[0].passport_seria }} {{ props.data[0].passport_number }}
          </h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Berilgan sana:</h2>
          <h2 class="font-thin text-2xl">{{ props.data[0].date_issue }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Amal qilish muddati:</h2>
          <h2 class="font-thin text-2xl">{{ props.data[0].date_expiry }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Kim tomonidan berilgan:</h2>
          <h2 class="font-thin text-2xl">{{ props.data[0].give_place_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Tug'ilgan joyi:</h2>
          <h2 class="font-thin text-2xl">{{ props.data[0].birth_country_name }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Millati:</h2>
          <h2 class="font-thin text-2xl">{{ props.data[0].nationality_desc }}</h2>
        </div>
        <div class="flex items-center gap-3 mx-2 py-4 border-b border-gray-300">
          <h2 class="font-semibold text-2xl text-gray-600 uppercase">Fuqaroligi:</h2>
          <h2 class="font-thin text-2xl">{{ props.data[0].citizenship }}</h2>
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
