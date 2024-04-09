<template>
  <div class="container mt-10">
    <div class="flex justify-end">
      <RouterLink to="/add-employee">
        <CButton class=""> Employee yaratish</CButton>
      </RouterLink>
    </div>

    <div>
      <CTable
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
          <pre class="text-black whitespace-no-wrap">
            {{ data.lastname }}
          
          </pre>
        </template>
        <template #middlename="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.middlename }} <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </template>
        <template #passport_number="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.passport_number }} <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </template>

        <template #passport_seria="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.passport_seria }} <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </template>
        <template #pnfl="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.pnfl }} <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </template>
        <template #birth_date="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.birth_date }} <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </template>
       

        <template #get_status_display="{ data }">
          <p class="text-black whitespace-no-wrap">{{ data.get_status_display }}</p>
        </template>

        <template #actions="{ data }">
          <div class="text-center">
            <RouterLink :to="{ name: 'sponsor-view', query: { id: data?.id } }">
              <CButton
                bg-color="bg-transparent"
                text-color="text-primary"
                type="button"
                class="inline-block font-bold text-2xl text-primary hover:text-gray-700 text-center"
              >
                <Icon icon="solar:eye-broken" />
              </CButton>
            </RouterLink>
          </div>
        </template>
      </CTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import CButton from '@/components/button/CButton.vue'
import CTable from '@/components/table/CTable.vue'
import { onMounted, reactive } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()

const { applicantList } = userStore

console.log(applicantList)

const { getApplicantList } = useUserStore()

const getApplicantsList = async () => {
  const data = getApplicantList()
  console.log(data)

  return data
}

const updatePage = () => {
  getApplicantsList()
}

onMounted(() => {
  getApplicantsList()
})

const titles = reactive([
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
    title: 'Passport raqami',
    keys: 'passport_number'
  },
  {
    title: 'Passport seriya',
    keys: 'passport_seria'
  },
  {
    title: 'PNFL',
    keys: 'pnfl'
  },
  {
    title: 'Tug\'ilgan sana',
    keys: 'birth_date'
  },
  {
    title: 'Holati',
    keys: 'get_status_display'
  },
  {
    title: 'Amallar',
    keys: 'actions'
  }
])
</script>
