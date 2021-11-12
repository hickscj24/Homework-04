const quizData = [
{
    question: "What does HTML stand for?",
    a: "HyperText Markup Language",
    b: "Holy Text Many Langauges",
    c: "Holy Trinity of Many Langauges",
    d: "HyperText of Many Langauges",
        correct: "a",
},
{
    question: "What does CSS stand for?",
    a: "Column Style Sheet",
    b: "Cascading Style Sheet",
    c: "Cascading Sleeping Sheet",
    d: "Cascading Sleeping Style",
        correct: "b",
},
{
    question: "What is JavaScript?",
    a: "Provides the structure for the website",
    b: "It styles the website",
    c: "It allows you to implement complex features on a webpage",
    d: "It provides you with a nice cup of coffee",
        correct: "c",
},
{
   question: "What year was the internet born?",
   a: "1985",
   b: "1972",
   c: "2021",
   d: "1969",
}
];



const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submitBtn')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData [currentQuiz]

    questionEl.innetText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function deselectAnswers() {
    answerEls.forEach(answerEL => answerEL.checked = false)

}

function getSelected() {
    let answer 

    answerEls.forEach(answerEl => {
      if(answer.El.checked) {
          answer = answerEl.id
      }  
    })

    return answer

}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz ++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.
            length} questions correctly</h2>

            <button onclick="location.reload()">Reload Button</button>
            `
        }
    }
})