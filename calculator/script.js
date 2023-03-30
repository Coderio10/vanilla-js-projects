// DEFINING INPUT
//  Selecting data number and storing it into numberButtons 
const numberButtons = document.querySelectorAll('[data-number]')
//  Selecting data number and storing it into operationButtons
const operationButtons = document.querySelectorAll('[data-operation]')
//  Selecting data number and storing it into equalButton
const equalButton = document.querySelector('[data-equals]')
//  Defining delete button
const deleteButton = document.querySelector('[data-delete]')
//  Defining AC button  
const allClearButton = document.querySelector('[data-all-clear]')   
//  Defining Previous text operand 
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
//  Defining current text operand
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement  = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand  = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break   
            default:
                return     
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = '' 
    }

    getDisplayNumber(number) {
        // gets the number and convert it to string
        const stringNumber = number.toString()
        // converts the number to an array by spliting it into two
        // store the first part (integer) in integerDigits 
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        // store the 2nd part (decimal) in decimalDigits
        const decimalDigits = stringNumber.split('.')[1]
        
        // define integerDisplay
        let integerDisplay

        // IF integer digit is not a NUMBER
        if(isNaN(integerDigits)) {
            // SET integer digit empty
            integerDisplay = ''
        } else {
            // if integerDisplay is a number, convert it to a string and make sure there is no decimal point after its converted to a string
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }

        // if number has decimal digit
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

// equalButton.onclick = button => {
//     calculator.compute()
//     calculator.updateDisplay()
// }

// allClearButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
// })

allClearButton.onclick = () => {
    calculator.clear()
    calculator.updateDisplay()
}

deleteButton.addEventListener('click', button => { 
    calculator.delete()
    calculator.updateDisplay()
})

// deleteButton.onclick = button => { 
//     calculator.delete()
//     calculator.updateDisplay()
// }