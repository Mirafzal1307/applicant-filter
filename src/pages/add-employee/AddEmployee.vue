<template>
  <div class="container mt-4">
   <CNavigator title="Back" />
    <form action="" @submit.prevent="addEmployee" class="w-[70%] mx-auto">
      <h1 class="font-bold text-3xl py-8">Ishga qabul qulinuvchining ma'lumotlarini olish</h1>
      
      <CInput
        v-model="employeeInfo.pnfl"
        type="text"
        label="PNFL"
        data-maska="##############"
        data-maska-tokens="0:[0-14]:optional"
      />
      <div class="flex justify-between gap-8 my-3">
        <CInput
          v-model="employeeInfo.firstname"
          type="text"
          label="ISM"
          class="w-full"
          placeholder="Abdulla"
          :options="options"
          data-maska="AA"
          data-maska-tokens="A:[A-Z']:multiple"
        />
        <CInput
          v-model="employeeInfo.lastname"
          type="text"
          label="Familiya"
          class="w-full"
          placeholder="Abdullayev"
          :options="options"
          data-maska="AA"
          data-maska-tokens="A:[A-Z']:multiple"
        />
      </div>
      <div class="flex justify-between gap-8 my-3">
        <CInput
          v-model="employeeInfo.middlename"
          type="text"
          label="Otasining ismi"
          class="w-full"
          placeholder="Abdulla o'g'li"
          :options="options"
          data-maska="A A"
          data-maska-tokens="A:[A-Z']:multiple"
        />
        <CInput
          v-model="employeeInfo.birth_date"
          type="text"
          label="Tug'ilgan sana"
          class="w-full"
          placeholder="12.12.2012"
          data-maska="##.##.####"
        />
      </div>
      <div class="flex justify-between gap-8 my-3">
        <CInput
          v-model="employeeInfo.passport_seria"
          type="text"
          label="Passport Seriyasi"
          class="w-full"
          placeholder="AA"
          :options="options"
          data-maska="AA"
          data-maska-tokens="A:[A-Z]:multiple 0:[0-2]:optional "
        />
        <CInput
          v-model="employeeInfo.passport_number"
          type="text"
          label="Passport Raqami"
          class="w-full"
          placeholder="0000000"
          data-maska="#######"
        />
      </div>
      <!-- <input v-maska data-maska="#-#"> -->

      <CButton class="my-6">Yuborish</CButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import CButton from '@/components/button/CButton.vue'
import CInput from '@/components/form/input/CInput.vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { toast, type ToastOptions } from 'vue3-toastify'
import CNavigator from '@/components/navigator/CNavigator.vue'
// import { Icon } from '@iconify/vue'

const router = useRouter()
const { createApplicant } = useUserStore()

const employeeInfo = {
  pnfl: '',
  firstname: '',
  lastname: '',
  middlename: '',
  passport_seria: '',
  passport_number: '',
  birth_date: ''
}

const options = {
  preProcess: (val: string) => val.toUpperCase()
}

options.preProcess(employeeInfo.firstname)
options.preProcess(employeeInfo.lastname)
options.preProcess(employeeInfo.middlename)
options.preProcess(employeeInfo.passport_seria)

async function addEmployee() {
  const employeeInfos = {
    pnfl: employeeInfo.pnfl.trim().toUpperCase(),
    firstname: employeeInfo.firstname.trim().toUpperCase(),
    lastname: employeeInfo.lastname.trim().toUpperCase(),
    middlename: employeeInfo.middlename.toUpperCase(),
    passport_seria: employeeInfo.passport_seria.trim().toUpperCase(),
    passport_number: employeeInfo.passport_number.trim().toUpperCase(),
    birth_date: employeeInfo.birth_date.trim()
  }
  console.log(employeeInfos)

  try {
    const data: unknown = await createApplicant(employeeInfo)
    console.log(data)
    if (data?.status === 200) {
      router.push('/employee-list')
      toast.success('Successfully added', {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT
      } as ToastOptions)
    }
  } catch (error) {
    if (error) {
      toast.error('Error has occured', {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT
      } as ToastOptions)
    }
  }
}


</script>
