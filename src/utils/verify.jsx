export const validateEmail = (email) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.length === 0) {
        return "Pole nie może być puste"
    }

    if (!email.match(mailFormat)) {
        return "Niepoprawny adres email"
    }

    return null
}

export const validatePassword = (password) => {
    const passwordFormat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,}$/

    if (password.length === 0) {
        return "Pole nie może być puste"
    }

    if (!password.match(passwordFormat)) {
        return "Hasło jest słabe"
    }

    return null
}