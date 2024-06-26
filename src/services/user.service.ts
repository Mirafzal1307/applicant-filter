import axios from "@/shared/plugins/axios";
import type { applicantInfo, userCredentials } from "@/shared/types/userTypes";


//  User services 
export const login = async (userCredentials: userCredentials) => {
  const data = await axios.post('user/login', userCredentials)

  return data

}
export const employeePost = async (applicantInfo: applicantInfo) => {
  const data = await axios.post('employee/v1/create-employee', applicantInfo)

  return data
}

export const employeePut = async (applicantInfo: applicantInfo , id: number) => {
  const data = await axios.post(`employee/v1/update-employee?id=${id}`, applicantInfo)

  return data
}

export const getEmployeeList = async (page: number, params: string) => {

  const data = await axios.get(`employee/v1/get-all-employees?page=${page}&size=10&params=${params}`)

  return data
}

export const getEmployeeInfoById = async (url: string) => {
  const data = await axios.post(url)

  return data
}

export const putApplicantInfo = async (url: string) => {
  const data = await axios.put(url)

  return data
}

export const getConvictionInfo = async (id: string, queryId: number) => {
  const data = await axios.post(`convictions/v1/get-conviction-by-emp-id?id=${id}&id_query=${queryId}`)
  return data
}

export const deleteApplicant = async (id: number) => {
  const data = await axios.delete(`employee/v1/delete-employee?id=${id}`)
  return data
}

export const getApplicantInfoById = async (id: number) => {
  const data = await axios.get(`employee/v1/get-employee-by-id?id=${id}`)

  return data
}