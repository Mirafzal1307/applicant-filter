import { type User, type userCredentials } from './../shared/types/userTypes';
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/services/user.service';

export const useUserStore = defineStore('user', () => {
	// state
	const isLoggingOut = ref(false)
	const loading = ref(false)
	let user = reactive({}) as User

	// actions
	const userLogin = async (userCredentials: userCredentials) => {
		try {
			loading.value = true
			// any ni orniga user uchun berilgan typeni berib ket !
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
	return { isLoggingOut, user, userLogin }
})
