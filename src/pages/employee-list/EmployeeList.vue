<template>
  <div class="container mt-10">
    <div class="flex justify-between items-center">
      <div class="flex items-center justify-between gap-4">
        <CInput v-model="params" placeholder="search" type="text" class="h-auto" />
        <CButton @click="searchApplicant()"> Qidirish</CButton>
      </div>
      <RouterLink to="/add-employee">
        <CButton class="h-full"> Nomzod qo'shish</CButton>
      </RouterLink>
    </div>

    <div>
      <div v-if="loading" class="mt-5">
        <CSkeleton />
      </div>
      <CTable
        v-else
        :titles="titles"
        :data="applicantList"
        :total-items="applicantList.length"
        @update-page="updatePage"
      >
        <template #firstname="{ data }">
          <h2 class="truncate text-black text-base font-semibold whitespace-no-wrap capitalize">
            {{ data.firstname }}
          </h2>
        </template>
        <template #lastname="{ data }">
          <pre class="truncate text-black text-base font-semibold whitespace-no-wrap capitalize">
            {{ data.lastname }}
          
          </pre>
        </template>
        <template #middlename="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.middlename }} <span class="text-[#B2B7C1]"></span>
          </p>
        </template>

        <template #passport_seria="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.passport_seria }} <span class="text-[#B2B7C1]"></span>
          </p>
        </template>
        <template #passport_number="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.passport_number }} <span class="text-[#B2B7C1]"></span>
          </p>
        </template>

        <template #pnfl="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.pnfl }} <span class="text-[#B2B7C1]"></span>
          </p>
        </template>
        <template #birth_date="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.birth_date }} <span class="text-[#B2B7C1]"></span>
          </p>
        </template>
        <template #actions="{ data }">
          <div class="text-center">
            <RouterLink :to="{ name: 'update-applicant-info', query: { id: data?.id } }">
              <CButton
              @click="getEmployeeById(data?.id)"
                bg-color="bg-transparent"
                text-color="text-yellow-500"
                type="button"
                class="inline-block font-bold text-2xl hover:text-gray-700 text-center"
              >
                <Icon icon="mdi:edit-outline" />
              </CButton>
            </RouterLink>

            <RouterLink :to="{ name: 'employee-view', query: { id: data?.id } }">
              <CButton
                
                bg-color="bg-transparent"
                text-color="text-primary"
                type="button"
                class="inline-block font-bold text-2xl text-primary hover:text-gray-700 text-center"
              >
                <Icon icon="solar:eye-broken" />
              </CButton>
            </RouterLink>l
            <CButton
              @click="openModal(data?.id)"
              bg-color="bg-transparent"
              text-color="text-red-500"
              type="button"
              class="inline-block font-bold text-2xl hover:text-gray-700 text-center"
            >
              <Icon icon="mdi:trash-can-outline" />
            </CButton>
          </div>
        </template>
      </CTable>
      <CModal v-if="showModal" title="Confirm Action" width="lg" v-on:close="showModal = false">
        <p class="text-gray-800 text-2xl">Nomzodning ma'lumotlarini chindan o'qchirmoqchimisiz ?</p>

        <div class="text-right mt-4 flex justify-end gap-x-5">
          <CButton @click="showModal = false"> YO'Q </CButton>
          <CButton @click="deleteApplicant(applicantID)" bg-color="bg-red-500"> HA </CButton>
        </div>
      </CModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import CButton from '@/components/button/CButton.vue'
import CTable from '@/components/table/CTable.vue'
import { onMounted, reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue/dist/iconify.js'
import CInput from '@/components/form/input/CInput.vue'
import CSkeleton from '@/components/skeleton/CSkeleton.vue'
import CModal from '@/components/modal/CModal.vue'

const showModal = ref(false)

const params = ref('')

const userStore = useUserStore()

const { applicantList, loading } = storeToRefs(userStore)

const { getApplicantList, deleteApplicantInfo, getEmployeeById } = useUserStore()

onMounted(() => {
  getApplicantList(1, '')
})

const searchApplicant = (page = 1) => {
  getApplicantList(page, params.value)
}

const updatePage = (page: number) => {
  getApplicantList(page, '')
}



const deleteApplicant = async (id: number) => {
  await deleteApplicantInfo(id)
  await getApplicantList(1, '')
  showModal.value = false
}
const applicantID = ref(1)
const openModal = (id: number) => {
  applicantID.value = id
  showModal.value = true
}

const titles: any = reactive([
  {
    title: 'Ism',
    keys: 'firstname'
  },
  {
    title: 'Familiya  ',
    keys: 'lastname'
  },
  {
    title: 'otasining ismi',
    keys: 'middlename'
  },
  {
    title: 'Passport seriya',
    keys: 'passport_seria'
  },
  {
    title: 'Passport raqami',
    keys: 'passport_number'
  },

  {
    title: 'PNFL',
    keys: 'pnfl'
  },
  {
    title: "Tug'ilgan sana",
    keys: 'birth_date'
  },
  {
    title: 'Amallar',
    keys: 'actions'
  }
])
</script>
