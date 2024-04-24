import type { User, userCredentials, applicantInfo } from '@/shared/types/userTypes';
import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
	login,
	employeePost,
	getEmployeeList,
	getEmployeeInfoById,
	putApplicantInfo,
	getConvictionInfo,
	deleteApplicant,
	getApplicantInfoById as getEmployeeInfoByID,
	employeePut

} from '@/services/user.service';
import { toast, type ToastOptions } from 'vue3-toastify'

export const useUserStore = defineStore('user', () => {
	// state
	const isLoggingOut = ref(false)
	const loading = ref(false)
	const user = ref({} as User)
	const applicantList = ref([])
	const applicantInfo = ref()
	const employeeInfoByID = ref()
	const convictionInfo = ref([])
	// actions
	const userLogin = async (userCredentials: userCredentials) => {
		try {
			loading.value = true

			const { data } = await login(userCredentials)

			user.value = data

			localStorage.setItem('token', user.value.token)
			toast.success('Muaffaqiyatli kirildi', {
				autoClose: 4000,

				position: toast.POSITION.TOP_RIGHT
			} as ToastOptions)

			return data
		} catch (error) {
			toast.error('Xatolik sodir boldi', {
				autoClose: 4000,
				position: toast.POSITION.TOP_RIGHT
			} as ToastOptions)

			return error
		} finally {
			loading.value = false
		}
	}

	const createApplicant = async (applicantInfo: applicantInfo) => {
		try {
			loading.value = true
			const data = await employeePost(applicantInfo)
			toast.success('Muaffaqiyatli qo\'shildi', {
				autoClose: 4000,

				position: toast.POSITION.TOP_RIGHT
			} as ToastOptions)

			return data
		} catch (error) {
			toast.error('Xatolik sodir boldi', {
				autoClose: 4000,
				position: toast.POSITION.TOP_RIGHT
			} as ToastOptions)

			return error
		} finally {
			loading.value = false
		}
	}

	const updateApplicant = async (applicantInfo: applicantInfo, id: number) => {
		try {
			loading.value = true
			const data = await employeePut(applicantInfo, id)
			toast.success('Muaffaqiyatli qo\'shildi', {
				autoClose: 4000,

				position: toast.POSITION.TOP_RIGHT
			} as ToastOptions)

			return data
		} catch (error) {
			toast.error('Xatolik sodir boldi', {
				autoClose: 4000,
				position: toast.POSITION.TOP_RIGHT
			} as ToastOptions)

			return error
		} finally {
			loading.value = false
		}
	}

	const getApplicantList = async (page: number, params: string) => {

		try {
			loading.value = true

			const { data } = await getEmployeeList(page, params)

			applicantList.value = data.items

		} catch (err) {
			return err
		} finally {
			loading.value = false
		}
	}
	const getApplicantInfoById = async (url: string) => {
		try {
			loading.value = true
			const { data } = await getEmployeeInfoById(url)

			applicantInfo.value = data

		} catch (err) {
			return err
		} finally {
			loading.value = false
		}
	}

	const updateApplicantInfo = async (url: string) => {
		try {
			loading.value = true
			const { data } = await putApplicantInfo(url)


			applicantInfo.value = data
			toast.success('Muaffaqiyatli kirildi', {
				autoClose: 4000,

				position: toast.POSITION.TOP_RIGHT
			} as ToastOptions)

			return data
		} catch (error) {
			toast.error('Xatolik sodir boldi', {
				autoClose: 4000,
				position: toast.POSITION.TOP_RIGHT
			} as ToastOptions)

			return error
		} finally {
			loading.value = false
		}
	}

	const getConInfo = async (id: string, queryId: number) => {
		try {
			loading.value = true
			const { data } = await getConvictionInfo(id, queryId)

			convictionInfo.value = data

		} catch (err) {
			return err
		} finally {
			loading.value = false
		}
	}

	const deleteApplicantInfo = async (id: number) => {

		try {
			loading.value = true
			const { data } = await deleteApplicant(id)


			toast.success('Muaffaqiyatli o\'chirildi', {
				autoClose: 4000,

				position: toast.POSITION.TOP_RIGHT
			} as ToastOptions)
			return data
		} catch (error) {
			toast.error('Xatolik sodir boldi', {
				autoClose: 4000,
				position: toast.POSITION.TOP_RIGHT
			} as ToastOptions)

			return error
		} finally {
			loading.value = false
		}

	}

	const getEmployeeById = async (id: number) => {
		try {
			loading.value = true
			const { data } = await getEmployeeInfoByID(id)
			console.log(data);
			employeeInfoByID.value = data

		} catch (err) {
			return err
		} finally {
			loading.value = false
		}
	}

	return {
		isLoggingOut,
		user,
		applicantList,
		applicantInfo,
		loading,
		convictionInfo,
		employeeInfoByID,
		userLogin,
		createApplicant,
		getApplicantList,
		getApplicantInfoById,
		updateApplicantInfo,
		getConInfo,
		deleteApplicantInfo,
		getEmployeeById,
		updateApplicant
	}
})
