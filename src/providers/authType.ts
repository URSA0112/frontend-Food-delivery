export type inputValueType = {
    email: string,
    password: string,
    confirmPassword: string,
}

export type AuthContextType = {
    user: string,
    error: string,
    login: (values: inputValueType) => void,
    logout: () => void

}