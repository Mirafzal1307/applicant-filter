<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-#f5f5f700 w-full h-full">
    <div class="container mx-auto flex justify-center mt-44">
      <div class="grid grid-cols-3 w-full">
        <div class="col-start-2">
          <div class="flex justify-center p-6">
            <img src="../../assets/image/MKB_logo.svg" alt="MKB LOGO" class="w-[90%]"  />
          </div>
          <div
            class="bg-white shadow-xl mt-12 p-8 shadow-gray-200 rounded-xl border-solid border-[#ebeefc00]"
          >
            <h3 class="text-2xl font-bold pb-11">Kirish</h3>
            <form @submit.prevent="submit">
              <CInput
                v-model="userdata.username"
                id="login"
                type="text"
                placeholder="adm8904"
                label="Login"
                class="pb-5"
              />
              <CInput
                v-model="userdata.password"
                id="password"
                type="password"
                placeholder="••••••••••"
                label="Parol"
                class="pb-5"
              />
              <!-- <button type="submit">loror</button> -->

              <CButton type="submit">Kirish</CButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CInput from '@/components/form/input/CInput.vue'
import CButton from '@/components/button/CButton.vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const { userLogin } = useUserStore()

const userdata = {
  username: '',
  password: ''
}

async function submit() {
  const usercredentials = {
    username: userdata.username.trim(),
    password: userdata.password.trim()
  }

  try {
    await userLogin(usercredentials)
    await router.push('/employee-list')
  } catch (error) {
    return error
  }
}
</script>
