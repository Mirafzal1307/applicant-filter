<template>
  <div>
    <div id="app">
      <div id="pages" class="flex justify-end">
        <button
          id="prev"
          @click="prevPage"
          class="px-2 py-2 rounded bg-white border mx-1 ease-in duration-1000"
        >
          <Icon icon="flat-color-icons:previous" />
        </button>
        <RouterLink :to="{ name: `${currentRoute}`, query: { page: currentPage } }">
          <button
            v-for="pageNumber in visiblePageNumbers"
            :key="pageNumber"
            :class="{
              'border-primary text-primary ease-in duration-100 ': pageNumber === currentPage
            }"
            @click="changePage(pageNumber)"
            class="px-3 py-1 rounded bg-white border mx-1 ease-in duration-700"
          >
            {{ pageNumber }}
          </button>
        </RouterLink>
        <button
          id="next"
          @click="nextPage"
          class="px-2 py-2 rounded bg-white border mx-1 ease-in duration-1000"
        >
          <Icon icon="flat-color-icons:next" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute.value.name

const props = defineProps({
  totalItems: {
    type: Number,
    default: 0,
    required: true
  }
})

const emit = defineEmits(['updatePage'])

let currentPage = ref(1)
let perPage = ref(10)
const maxVisiblePages = 6
const totalPages = computed(() => Math.ceil(props.totalItems / perPage.value))
const visiblePageNumbers = computed(() => {
  const startPage = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2))
  const endPage = Math.min(totalPages.value, startPage + maxVisiblePages - 1)
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
})

const changePage = (page: number) => {
  currentPage.value = page

  emit('updatePage', currentPage.value)
}

const prevPage = () => {
  if (currentPage.value === 1) return

  currentPage.value--
  emit('updatePage', currentPage.value)
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
  emit('updatePage', currentPage.value)
}
</script>
