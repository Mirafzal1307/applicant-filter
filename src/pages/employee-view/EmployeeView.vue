<template>
  <div class="container my-5">
    <div class="">
      <div class="pt-2">
        <ul class="flex">
          <li class="w-full" v-for="item in pages" :key="item.id">
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
          </li>
        </ul>
      </div>
      <div>{{ applicantInfo }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'



const userStore = useUserStore()

const { applicantInfo } = storeToRefs(userStore)

const { getApplicantInfoById } = useUserStore()

const router = useRouter()
const employeeId = router.currentRoute.value.query.id

onMounted(() => {
  getApplicantInfoById(`${employeeId}`)
  getEmployeeInfo(1)
})

const pages = reactive([
  {
    id: 1,
    name: 'Date Document',
    path: 'datedoc/v1/get-datedoc-by-api?id=',
    border: 'rounded-l',
    body: ''
  },
  {
    id: 2,
    name: 'Birth Info',
    path: 'birth-info/v1/get-birth-info-emp-id?id=',
    border: 'rounded-none ',
    body: ''
  },
  {
    id: 3,
    name: 'Death Info',
    path: 'death-info/v1/get-death-info-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 4,
    name: 'Address info',
    path: 'address/v1/get-address-info-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 5,
    name: 'Diplom Info',
    path: 'diplom/v1/get-diplom-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 6,
    name: 'Convictions',
    path: 'convictions/v1/get-conviction-query-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 7,
    name: 'Narko Dispensary',
    path: 'narko/v1/get-narko-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 8,
    name: 'Psycho Dispensary',
    path: 'psycho/v1/get-psycho-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 9,
    name: 'MIB',
    path: 'mib/v1/get-mib-info-by-emp-id?id=',
    border: 'rounded-r',
    body: ''
  },
  {
    id: 10,
    name: 'Marriage info',
    path: 'marriage/v1/get-marriage-info-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 11,
    name: 'Citizenship',
    path: 'citizen/v1/save-citizen-info-by-emp-id?id=',
    border: 'rounded-r',
    body: ''
  }
])

const tab = ref(1)

const getEmployeeInfo = (tabNum: number) => {
  const tabName = pages.find((data) => data.id === tabNum)
  const url = `${tabName?.path}` + employeeId

  getApplicantInfoById(url)
}

const currentTab = (tabNumber: any) => {
  tab.value = tabNumber
  getEmployeeInfo(tabNumber)
  return
}
</script>
