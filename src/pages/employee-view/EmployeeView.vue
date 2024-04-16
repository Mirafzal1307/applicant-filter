<template>
  <div class="container my-5">
    <CNavigator title="Back to home" />
    <div class="flex py-6 gap-8 ">
      <div class="w-[40%]">
        <ul class="flex flex-col">
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
      <div class="w-full">
        <div
          v-if="applicantInfo && applicantInfo[0]?.api_name === 'date_document_info'"
          class="w-full"
        >
          <DateDocument :data="applicantInfo" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'birth_info' ||
              applicantInfo[0]?.api_name === 'birth_info')
          "
        >
          <BirthInfo :data="applicantInfo" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'death_info' ||
              applicantInfo[0]?.api_name === 'death_info')
          "
        >
          <DeathInfo :data="applicantInfo" />
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import DateDocument from '@/pages/date-info/DateDocument.vue'
import BirthInfo from '@/pages/birth-info/BirthInfo.vue'
import DeathInfo from '@/pages/death-info/DeathInfo.vue'
import CNavigator from '@/components/navigator/CNavigator.vue'
const userStore = useUserStore()

const { applicantInfo } = storeToRefs(userStore)

const { getApplicantInfoById } = useUserStore()

const router = useRouter()
const employeeId = router.currentRoute.value.query.id

onMounted(() => {
  getApplicantInfoById(`${employeeId}`)
  getEmployeeInfo()
})

const pages = reactive([
  {
    id: 1,
    name: 'Date Document',
    path: 'datedoc/v1/get-datedoc-by-emp-id?id=',
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

const getEmployeeInfo = (tabNum = 1) => {
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
