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

export const getEmployeeList = async (page: number) => {
  const data = await axios.get(`employee/v1/get-all-employees?page=${page}&size=10`)
  console.log(data);

  return data
}

export const getEmployeeInfoById = async (url: string) => {
  const data = await axios.post(url)
  console.log(data);
  return data
} 