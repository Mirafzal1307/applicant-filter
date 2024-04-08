import { type User, type userCredentials, type applicantInfo } from './../shared/types/userTypes';
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { login , employeePost } from '@/services/user.service';

export const useUserStore = defineStore('user', () => {
	// state
	const isLoggingOut = ref(false)
	const loading = ref(false)
	let user = reactive({}) as User

	// actions
	const userLogin = async (userCredentials: userCredentials) => {
		try {
			loading.value = true
			const { data } = await login(userCredentials)


			user = data
			localStorage.setItem('token', user.token)
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

	return { isLoggingOut, user, userLogin ,createApplicant }
})
