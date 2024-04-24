<template>
  <div class="col-span-3">
    <div class="pt-2">
      <ul class="flex">
        <li class="w-full" v-for="item in pages" :key="item.id">
          <RouterLink :to="item.path">
            <button
              :class="[
                item.border,
                {
                  'bg-blue-500 text-white border-2 border-primary ease-out duration-500 ':
                    tab === item.id
                }
              ]"
              @click="currentTab(item.id)"
              class="inline-block px-4 focus:outline-none w-full py-3 border-[#E0E7FF] border-2 uppercase ease-in duration-400"
            >
              {{ item.name }}
            </button>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div>
      body
      <!-- <DateDocument /> -->
      <div v-for="item in pages" :key="item.id">
        <div v-if="item.path === router.currentRoute.value.fullPath">
          <!-- {{ item.body }} -->
          <component :is="resolveComponents(item.body)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DateDocument from '@/pages/date-info/DateDocument.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const pages = reactive([
  {
    id: 1,
    name: 'Date Document',
    path: '/date-info',
    border: 'rounded-l',
    body: 'DateDocument'
  },
  { id: 2, name: 'Birth Info', path: '/birth-info', border: 'rounded-none ', body: 'DateDocument' },
  { id: 3, name: 'Death Info', path: '/death-info', border: 'rounded-none', body: '' },
  { id: 4, name: 'Address info', path: '/address-info', border: 'rounded-none', body: '' },
  { id: 5, name: 'Diplom Info', path: '/diplom-info', border: 'rounded-none', body: '' },
  { id: 6, name: 'Convictions', path: '/convictions', border: 'rounded-none', body: '' },
  { id: 7, name: 'Narko Dispensary', path: '/narko-dispensary', border: 'rounded-none', body: '' },
  {
    id: 8,
    name: 'Psycho Dispensary',
    path: '/psycho-dispensary',
    border: 'rounded-none',
    body: ''
  },
  { id: 9, name: 'MIB', path: '/mib-info', border: 'rounded-r', body: '' }
])

const currentPage = pages.find((page) => page.path === router.currentRoute.value.path)

const resolveComponents = (componentName: string) => {
  if (componentName === 'DateDocument') {
    return DateDocument
  }
}

const tab = ref(currentPage?.id)

const currentTab = (tabNumber: any) => {

  tab.value = tabNumber
}
</script>
