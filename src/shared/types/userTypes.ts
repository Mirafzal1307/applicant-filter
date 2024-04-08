//  user types all are here exported
export type userCredentials = {
    username: string,
    password: string
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