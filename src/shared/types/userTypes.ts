//  user types all are here exported
export type userCredentials = {
    username: string,
    password: string
}

export type applicantInfo = {
    pnfl: string,
    firstname: string,
    lastname: string,
    middlename: string,
    passport_seria: string,
    passport_number: string,
    birth_date: string
}

export type APIResponse<Data> = {
    token: string,
    user: Data
}

export type User = APIResponse<{
    id: number,
    username: string,
    fullname: string
}> 