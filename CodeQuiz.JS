const quizData = [{
  question: "What does HTML stand for?",
  choices: ['HyperText Markup Language', 'Holytext Markup Language', 'HyperTrinity Markup Language', 'HolyTrinity Markup Language'],
  correct: "HyperText Markup Language"
},
{
  question: "What does CSS stand for?",
  choices: ['Column Style Sheet', 'Cascading Style Sheet', 'Cascading Sleeping Sheet', 'Cascading Sleeping Style'],
  correct: "Cascading Style Sheet"
},
{
  question: "What is JavaScript?",
  choices: ['Provides the structure for the website', 'It styles the website', 'It allows you to implement complex features on a webpage', 'It provides you with a nice cup of coffee'],
  correct: "It allows you to implement complex features on a webpage"
},
{
  question: "What year was the internet born?",
  choices: ['1985', '1972', '2021', '1969'],
  correct: "1969"
},
];




const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submitBtn');
const choicesDiv = document.getElementById('choices')
let seconds;
let score = 0
var questionCounter = 0;
var highscore = 0;
var leader = 'aaa';
const testbtn = document.getElementById("Start");

var timer;
var time = 30;

testbtn.addEventListener("click", () => {
  questionCounter = 0;
  time = 30;
  score = 0
//start timer
timer = setInterval(countDown, 1000)

//get question and choices render
renderQuiz();

})


function countDown() {
//subtract one from current value of time
time--;
document.getElementById("timer").innerHTML = time;

//check if timer ran out
if (time <= 0) {
  clearInterval(timer);
  document.getElementById("CodeQuiz").innerHTML = "Game Over: time expired";
  document.getElementById("quizheader").hidden = true;
  // console.log('End Quiz');
  //eventually call function to end quiz
}
}

function renderQuiz() {
document.getElementById("quizheader").hidden = false;
document.getElementById("Start").hidden = true;

console.log(quizData[questionCounter].question);
//append question to div on html
questionEl.innerHTML = quizData[questionCounter].question;

choicesDiv.innerHTML = '';

var choicesArr = quizData[questionCounter].choices;

//looping choices arry to create btns and get them renderede
for (let index = 0; index < choicesArr.length; index++) {
  //create buttons with each item/
  let btn = document.createElement("button")

  //add text to buttons
  btn.innerHTML = choicesArr[index]
  //add values to those buttons
  btn.setAttribute('value', choicesArr[index])
  //console.log(btn)
  //add function or onclick to the buttons
  btn.onclick = checkAnswer;
  //then append to html
  choicesDiv.append(btn)
}
};

function checkAnswer() {
console.log(this)
if (this.value !== quizData[questionCounter].correct) {
  console.log('incorrect', time);
  time = time - 10;
  document.getElementById("timer").innerHTML = time;
  
  //we have to check if our timer has expired due to the penalty:
  if (time <= 0) {
    clearInterval(timer);
    document.getElementById("CodeQuiz").innerHTML = "Game Over: time expired";
    document.getElementById("quizheader").hidden = true;
    return;
  }
}
else {
  score ++
}

questionCounter++;
//if there is move on to the next question 
if (questionCounter === quizData.length) {
  console.log('end quiz')
  clearInterval(timer);
  document.getElementById("CodeQuiz").innerHTML = "Quiz Complete";
  document.getElementById("quizheader").hidden = true;

  var initials 
   
    initials = prompt("Initials Here");
    if (highscore < score)  {
      highscore = score;
      leader = initials;
    }
 
    var message = `bad luck you scored ${score}`;
if (score >= 3) {
  message = `great job! you scored ${score}`;
}
document.getElementById("message").innerHTML = message;
document.getElementById("highscore").innerHTML = `leader, ${leader} highscore ${highscore}`;
document.getElementById("Start").hidden = false;




} else {
  renderQuiz();
}

//elsecall function to end quiz

}
