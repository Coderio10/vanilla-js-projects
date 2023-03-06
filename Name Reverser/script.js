const wordUI = document.getElementById('name')
const result = document.getElementById('result')
const btn = document.getElementById('btn')

// stack
const letters = []

btn.onclick = () => {

    let word = wordUI.value
    let rword = ""
    
    // put the letters in to the stack
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i])
    }

    // pop off the stack in the reverse order
    for (let i = 0; i < word.length; i++) {
        rword += letters.pop();
    }
    
    result.value = rword  
}    



