import axios from "@/shared/plugins/axios";
import type { userCredentials } from "@/shared/types/userTypes";


//  User services 
export const login = async (userCredentials: userCredentials) => {
    const  data  = await axios.post('user/login', userCredentials)

    return data

}