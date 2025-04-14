
export const handleNext = async function (
    trigger: (name: "email" | "password" | "confirmPassword") => Promise<boolean>,
    setEmailConfirmed: (val: boolean) => void) {
    const isValid = await trigger("email");
    if (isValid) {
        setEmailConfirmed(true);
    }
}