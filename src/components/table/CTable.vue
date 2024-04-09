<template>
  <div class="w-full">
    <div class="py-10">
      <div class="inline-block min-w-full rounded-lg overflow-hidden ease-in duration-1000">
        <table class="min-w-full leading-normal border-spacing-y-4 border-separate">
          <thead>
            <tr>
              <th
                v-for="(title, index) in props.titles"
                :key="index"
                class="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
              >
                {{ title.title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index" class="gap-y-2 bg-white my-2 gap-3">
              <td class="px-5 py-5" v-for="(header, headerId) in titles" :key="headerId">
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
import CPagination from '../pagination/CPagination.vue'

const props = defineProps({
  titles: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  },
  totalItems: {
    type: Number,
    default: 0,
    required: true
  }
})

console.log(props.data)

const emit = defineEmits(['updatePage'])

function updatePage(page: number) {
  emit('updatePage', page)
}
</script>
