import type { User, userCredentials, applicantInfo } from '@/shared/types/userTypes';
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { login, employeePost, getEmployeeList, getEmployeeInfoById } from '@/services/user.service';

export const useUserStore = defineStore('user', () => {
	// state
	const isLoggingOut = ref(false)
	const loading = ref(false)
	const user = ref({} as User)
	const applicantList = ref([])
	const applicantInfo = ref()
	// actions
	const userLogin = async (userCredentials: userCredentials) => {
		try {
			loading.value = true

			const { data } = await login(userCredentials)

			user.value = data

			localStorage.setItem('token', user.value.token)

			return data
		} catch (error) {
			return error
		} finally {
			loading.value = false
		}
	}

	const createApplicant = async (applicantInfo: applicantInfo) => {
		try {
			loading.value = true
			const data = await employeePost(applicantInfo)
			return data
		} catch (error) {
			return error
		} finally {
			loading.value = false
		}
	}

	const getApplicantList = async (page: number) => {
		try {
			loading.value = true

			const { data } = await getEmployeeList(page)

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
			console.log(data);

			applicantInfo.value = data

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
		userLogin,
		createApplicant,
		getApplicantList,
		getApplicantInfoById
	}
})
