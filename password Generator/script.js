const passwordEl        = document.getElementById("pw");  
const copy              = document.getElementById("copy"); 
const passwordlength    = document.getElementById("Length"); 
const upperEl           = document.getElementById("upper"); 
const lowerEl           = document.getElementById("lower"); 
const numberEl          = document.getElementById("number"); 
const symbolEl          = document.getElementById("symbol"); 
const generateEl        = document.getElementById("generate"); 
var change              = document.querySelector('.copy')


const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-+=";


// function to Get lowerCase
function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

// function to Get Uppercase
function getupperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

// function to Get Number
function getNumber() {
    return number[Math.floor(Math.random() * number.length)]
}

// function to Get Symbols
function getSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)]
}

// function to Generate
function generatePassword() {

    // Defining Password
    let password = ''

    // if upperase is checked
    if (upperEl.checked) {
        password += getupperCase()
    }

    // if lowercase is checked
    if (lowerEl.checked) {
        password += getLowerCase()
    }

    // if number is checked
    if (numberEl.checked) {
        password += getNumber()
    }

    // if symbol is checked
    if (symbolEl.checked) {
        password += getSymbol()
    }
        
    for (let i = password.length; i < passwordlength.value; i++) {
        const x = generateX()
        password += x
    }

    passwordEl.innerText = password;

}

function generateX() {
    const xs = []
    
    // if upperase is checked
    if (upperEl.checked) {
        xs.push(getupperCase())
    }

    // if lowercase is checked
    if (lowerEl.checked) {
        xs.push(getLowerCase())
    }

    // if number is checked
    if (numberEl.checked) {
        xs.push(getNumber())
    }

    // if symbol is checked
    if (symbolEl.checked) {
        xs.push(getSymbol())
    }

    return xs[Math.floor(Math.random() * xs.length)]
}

//  if the generate button is clicked
generateEl.onclick = () => generatePassword()

// Copy to Clipboard
copy.onclick = () => {

    // create a text area
    const textArea = document.createElement('textarea')
    const password = passwordEl.innerText

    if (!password) { 
        return  
    }

    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    // copy.classList.add('copied')

    change.innerText = "Copied"
}