export const validateComment = (comment: string): string | true => {
    console.log(comment)
    if (comment === '') {
        return 'Сообщение не может быть пустой строкой'
    }

    if (/^\s*$/.test(comment)) {
        return 'Сообщение не может содержать одни пробелы'
    }

    return true
}
