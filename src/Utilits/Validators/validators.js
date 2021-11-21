// const requiredField = (value) => (value) ? return undefined  : return "ОБЯЗАТЕЛЬНОЕ ПОЛЕ ДЛЯ ЗАПОЛНЕНИЯ"
// const maxLength = max => value =>
//     value && value.length > max ? `Must be ${max} characters or less` : undefined
// export const maxLength15 = maxLength(30)
// export const minLength = min => value =>
//     value && value.length < min ? `Must be ${min} characters or more` : undefined
// export const minLength2 = minLength(2)

export const requiredField = (value) => {
    if (value) return undefined

    return "ОБЯЗАТЕЛЬНОЕ ПОЛЕ ДЛЯ ЗАПОЛНЕНИЯ"
}
export const maxLength = (max) => (value) => {
    if (value && value.length > max) {
        return "Допускается не более 30 символов"
    }
    return undefined

}

export const maxLength100 = (max) => (value) => {
    if (value && value.length > max) {
        return "Допускается не более 100 символов"
    }
    return undefined

}

export const minLength = (min) => (value) => {
    if (value && value.length < min) {
        return "Допускается не менее 2 символов"
    }
    return undefined
}


