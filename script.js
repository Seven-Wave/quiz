const quizData = [
    {
        question: 'How are you?',
        a: '... :(',
        b: 'Ok :/',
        c: 'It could be better :)',
        d: 'Super! :D',
        correct: 'd'
    }, 
    {
        question: 'What is the best programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the President of US',
        a: 'Kim Jong-un',
        b: 'Donald Trump',
        c: 'Vladimir Putin',
        d: 'Emmanuel Macron',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'JSON Object Notation',
        d: 'Helicopters Terminals Motorboats Labmorginis',
        correct: 'a'
    }
]

const quiz = document.getElementById('quiz')
const answersEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtm = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {

    let answer = undefined

    answersEl.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

function deselectAnswers() {
    answersEl.forEach(answerEl => {
        answerEl.checked = false
    })
}

submitBtm.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`
        }
    }
    

    
})