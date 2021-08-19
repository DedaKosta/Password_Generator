//Sve moguce vrednosti karaktera sifre
const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

//Funkcija za odabir dozvoljenih karatktera i vracanje sifre
const createPassword = (length = 10, hasNumbers = true, hasSymbols = true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    return generatePassword(length, chars)
}

//Funkcija za generisanje sifre
const generatePassword = (length, chars) => {
    let password = ''
    for(let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
}

module.exports = createPassword