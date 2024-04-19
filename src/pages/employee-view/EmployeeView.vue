<template>
  <div class="container my-5">
    <div class="flex items-center justify-between">
      <CNavigator title="Bosh sahifa" />
      <div class="flex gap-x-5">
        <CButton @click="showModal = true"> So'rov yuborish</CButton>
        <CButton @click="showUpdateModal = true">Yangilash</CButton>
      </div>
    </div>

    <CModal v-if="showModal" title="Confirm Action" width="lg" v-on:close="showModal = false">
      <p class="text-gray-800 text-2xl">So'rov yuborishga ishonchingiz komilmi? Bu pullik so'rov</p>

      <div class="text-right mt-4 flex justify-end gap-x-5">
        <CButton @click="showModal = false"> YO'Q </CButton>
        <CButton @click="getApplicantInfos()" bg-color="bg-red-500"> HA </CButton>
      </div>
    </CModal>
    <CModal
      v-if="showUpdateModal"
      title="Confirm Action"
      width="lg"
      v-on:close="showUpdateModal = false"
    >
      <p class="text-gray-800 text-2xl">So'rov yuborishga ishonchingiz komilmi? Bu pullik so'rov</p>

      <div class="text-right mt-4 flex justify-end gap-x-5">
        <CButton @click="showUpdateModal = false"> YO'Q </CButton>
        <CButton @click="updateApplicantInfos()" bg-color="bg-red-500"> HA </CButton>
      </div>
    </CModal>
    <div class="flex py-6 gap-8">
      <div class="w-[25%]">
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
              class="inline-block px-8 focus:outline-none w-full py-3 border-[#E0E7FF] border-2 uppercase ease-in duration-400 text-start"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>

      <div v-if="getData" class="w-full">
        <div
          v-if="applicantInfo && applicantInfo[0]?.api_name === 'date_document_info'"
          class="w-full"
        >
          <DateDocument :data="applicantInfo" :loading="loading" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'birth_info' ||
              applicantInfo[0]?.api_name === 'birth_info')
          "
        >
          <BirthInfo :data="applicantInfo" :loading="loading" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'death_info' ||
              applicantInfo[0]?.api_name === 'death_info')
          "
        >
          <DeathInfo :data="applicantInfo" :loading="loading" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'address_info' ||
              applicantInfo[0]?.api_name === 'address_info')
          "
        >
          <AddressInfo :data="applicantInfo" :loading="loading" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'diplom_info' ||
              applicantInfo[0]?.api_name === 'diplom_info')
          "
        >
          <DiplomInfo :data="applicantInfo" :loading="loading" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'narko' || applicantInfo[0]?.api_name === 'narko')
          "
        >
          <NarkoDispensary :data="applicantInfo" :loading="loading" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'psycho' || applicantInfo[0]?.api_name === 'psycho')
          "
        >
          <PsychoDispensary :data="applicantInfo" :loading="loading" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'mib' || applicantInfo[0]?.api_name === 'mib')
          "
        >
          <MIB :data="applicantInfo" :loading="loading" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'citizen_info' ||
              applicantInfo[0]?.api_name === 'citizen_info')
          "
        >
          <WorkHistory :data="applicantInfo" :loading="loading" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'marriage_info' ||
              applicantInfo[0]?.api_name === 'marriage_info')
          "
        >
          <MarriageInfo :data="applicantInfo" :loading="loading" />
        </div>
        <div
          class="w-full"
          v-if="
            applicantInfo &&
            (applicantInfo?.api_name === 'convictions' ||
              applicantInfo[0]?.api_name === 'convictions')
          "
        >
          <Convictions :data="applicantInfo" :loading="loading" />
        </div>
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
import AddressInfo from '@/pages/address-info/AddressInfo.vue'
import DiplomInfo from '@/pages/diplom-info/DiplomInfo.vue'
import NarkoDispensary from '@/pages/nakro-dispensary/NarkoDispensary.vue'
import PsychoDispensary from '@/pages/psycho-dispensary/PsychoDispensary.vue'
import MIB from '@/pages/mib/MIB.vue'
import WorkHistory from '@/pages/work-history/WorkHistory.vue'
import MarriageInfo from '@/pages/marriage-info/MarriageInfo.vue'
import Convictions from '../convictions/Convictions.vue'
import CButton from '@/components/button/CButton.vue'
import CModal from '@/components/modal/CModal.vue'

const showModal = ref(false)
const showUpdateModal = ref(false)
const getData = ref(false)

const userStore = useUserStore()

const { applicantInfo, loading } = storeToRefs(userStore)

const { getApplicantInfoById, updateApplicantInfo } = useUserStore()

const router = useRouter()
const employeeId = router.currentRoute.value.query.id

const updateURL = ref('')
const getURL = ref('')

const fullPathOfApplicant = (tabNum = 1) => {
  const tabName = pages.find((data) => data.id === tabNum)
  updateURL.value = `${tabName?.updatePath}` + employeeId
  getURL.value = `${tabName?.path}` + employeeId
}

const updateApplicantInfos = async () => {
  if (updateURL.value !== '') {
    await updateApplicantInfo(updateURL.value)
    getData.value = true
    showUpdateModal.value = false
  }
}
const getApplicantInfos = async () => {
  if (getURL.value !== '') {
    await getApplicantInfoById(getURL.value)
    getData.value = true
    showModal.value = false
  }
}

onMounted(() => {
  currentTab()
})

const pages = reactive([
  {
    id: 1,
    name: "Umumiy ma'lumotlar",
    path: 'datedoc/v1/get-datedoc-by-emp-id?id=',
    updatePath: 'datedoc/v1/update-datedoc-by-emp-id?id=',
    border: 'rounded-t',
    body: ''
  },
  {
    id: 2,
    name: "Tug'ilganlik ma'lumotlar",
    path: 'birth-info/v1/get-birth-info-emp-id?id=',
    border: 'rounded-none ',
    body: ''
  },
  {
    id: 3,
    name: "O'lim ma'umotlari",
    path: 'death-info/v1/get-death-info-by-emp-id?id=',
    updatePath: 'death-info/v1/update-death-info-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 4,
    name: 'Yashash manzili',
    path: 'address/v1/get-address-info-by-emp-id?id=',
    updatePath: 'address/v1/update-address-info-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 5,
    name: "Ta'lim ma'lumotlari",
    path: 'diplom/v1/get-diplom-by-emp-id?id=',
    updatePath: 'diplom/v1/update-diplom-info-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 6,
    name: 'Sud',
    path: 'convictions/v1/get-conviction-query-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 7,
    name: 'Narko dispanser',
    path: 'narko/v1/get-narko-by-emp-id?id=',
    updatePath: 'narko/v1/update-narko-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 8,
    name: 'Ruhiy dispanser',
    path: 'psycho/v1/get-psycho-by-emp-id?id=',
    updatePath: 'psycho/v1/update-psycho-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 9,
    name: 'MIB',
    path: 'mib/v1/get-mib-info-by-emp-id?id=',
    updatePath: 'mib/v1/update-mib-info-by-emp-id?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 10,
    name: "Nigoh ma'umotlari",
    path: 'marriage/v1/get-marriage-info-by-emp-id?id=',
    updatePath: 'marriage/v1/update-marriage-info?id=',
    border: 'rounded-none',
    body: ''
  },
  {
    id: 11,
    name: 'Ish tarixi',
    path: 'citizen/v1/save-citizen-info-by-emp-id?id=',
    updatePath: 'citizen/v1/update-citizen-info-by-emp-id?id=',
    border: 'rounded-b',
    body: ''
  }
])

const tab = ref(1)

const currentTab = (tabNumber = 1) => {
  tab.value = tabNumber
  fullPathOfApplicant(tabNumber)
  return
}
</script>
