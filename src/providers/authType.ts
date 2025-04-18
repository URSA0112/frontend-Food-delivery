export type inputValueType = {
    email: string,
    password: string,
    confirmPassword: string,
}

export type AuthContextType = {
    user: string | null,
    error: string | null,
    login: (values: inputValueType) => void,
    logout: () => void

}