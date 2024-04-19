<template>
  <div class="w-full">
    <div class="py-10">
      <div class="inline-block min-w-full  rounded-lg overflow-hidden ease-in duration-1000 py-8">
        <table class="min-w-full   ">
          <thead>
            <tr>
              <th
                v-for="(title, index) in props.titles"
                :key="index"
                class="px-5 py-3 text-left text-lg border   font-semibold text-black-400 uppercase tracking-wider hover:bg-slate-200"
              >
                {{ title.title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index" class=" bg-white  hover:bg-slate-200 cursor-pointer">
              <td class="px-5 py-2 border " v-for="(header, headerId) in titles" :key="headerId">
                <slot :data="item" :name="header.keys">
                  {{ item[header.keys] }}
                </slot>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CPagination :total-items="props.totalItems" @update-page="updatePage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CPagination from '@/components/pagination/CPagination.vue'

const props = defineProps<{
  titles?: [],
  data?: [],
  totalItems: number
}>()


console.log(props.data)

const emit = defineEmits(['updatePage'])

function updatePage(page: number) {
  emit('updatePage', page)
}
/*

const obj = {} Record<string, unknown>


*/
</script>

