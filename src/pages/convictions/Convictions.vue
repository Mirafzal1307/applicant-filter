<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="loading" class="mt-5">
    <CSkeleton />
  </div>
  <div v-else class="">
    <div
      v-if="props.data.result !== 'OK'"
      class="w-full bg-gray-100 mx-auto text-xl rounded-lg p-10"
    >
      {{ props?.data.result }}
      <div v-if="convictionInfo" class="mt-4 " >
        {{ convictionInfo[0]?.comment }}
      </div>
      <div class="mt-6">
        <CButton @click="getConvictionsInfo(employeeId, data.query_id)">
          Ma'lumotlarni yangilash</CButton
        >
      </div>
    </div>
    <div v-else class="w-full bg-gray-100 mx-auto rounded-lg p-10">
      <h1 class="font-bold text-3xl my-3 text-gray-600">Nomzodning sud haqidagi ma'lumotlari</h1>
      <div v-if="convictionInfo">
        {{ convictionInfo[0]?.comment }}
      </div>
      <div class="mt-6">
        <CButton @click="getConvictionsInfo(employeeId, data.query_id)">
          Ma'lumotlarni yangilash</CButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CButton from '@/components/button/CButton.vue'
import CSkeleton from '@/components/skeleton/CSkeleton.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()

const employeeId = router.currentRoute.value.query.id


const userStore = useUserStore()

const { convictionInfo } = storeToRefs(userStore)

const { getConInfo } = useUserStore()

const props = defineProps({
  data: {
    type: Object,
    default() {
      return {}
    }
  },
  loading: {
    type: Boolean,
    default: false
  }
})



const getConvictionsInfo = async (id: string, queryId: number) => {
  await getConInfo(id, queryId)
}
</script>
