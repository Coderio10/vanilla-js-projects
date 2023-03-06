const quizData = [
    {
        question: '1. What is HTML?',
        a: 'Hypertext Markup language',
        b: 'Hypertest makeup language',
        c: 'Higher makeup language',
        d: 'Highertext markup language',
        correct: 'a' 
    },
    {
        question: '2. What is the most popular programming language?',
        a: 'C',
        b: 'C++',
        c: 'Python',
        d: 'Javascript',
        correct: 'c' 
    },
    {
        question: '3. What is the most popular js framework?',
        a: 'React',
        b: 'Vue',
        c: 'Jquery',
        d: 'Angular',
        correct: 'a' 
    },
    {
        question: '4. What is HTML?',
        a: 'Framework',
        b: 'Language',
        c: 'Markup language',
        d: 'Library',
        correct: 'c' 
    },
    {
        question: '5. Which of this is a not datatype?',
        a: 'String',
        b: 'Object',
        c: 'Number',
        d: 'Loop',
        correct: 'd' 
    },
    {
        question: '6. Which of this is a javascript library?',
        a: 'React',
        b: 'Vue',
        c: 'Express',
        d: 'Angular',
        correct: 'a' 
    }
]

// const quiz          = document.getElementsById("quiz")
const questionEl    = document.getElementById('question')
const answerEls     = document.querySelectorAll('.answer')
const a_text        = document.getElementById('a_text')
const b_text        = document.getElementById('b_text')
const c_text        = document.getElementById('c_text')
const d_text        = document.getElementById('d_text')
const submitBtn     = document.getElementById('submit')

let currentQuiz = 0;
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAns()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a 
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function getSelected() {
    let answer = undefined 

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deselectAns() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false     
    })
}

submitBtn.onclick = () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2 style="margin: 20px"> you answered correctly at ${score} / ${quizData.length} questions. </h2> 
            
            <button onclick="location.reload()"> Reload </button>
            `
        }
    }
}
