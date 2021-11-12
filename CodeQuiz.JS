const quizData = [
  {
      question: "What does HTML stand for?",
     choices:['HyperText Markup Language', 'Holytext Markup Language', 'HyperTrinity Markup Language', 'HolyTrinity Markup Language'],
          correct: "HyperText Markup Language"
  },
  {
    question: "What does CSS stand for?",
   choices:['Column Style Sheet', 'Cascading Style Sheet', 'Cascading Sleeping Sheet', 'Cascading Sleeping Style'],
    correct: "Cascading Style Sheet"
  }, 
  {
    question: "What is JavaScript?",
   choices:['Provides the structure for the website', 'It styles the website', 'It allows you to implement complex features on a webpage', 'It provides you with a nice cup of coffee'],
    correct: "It allows you to implement complex features on a webpage"
  }, 
  {
    question: "What year was the internet born?",
   choices:['1985', '1972', '2021', '1969'],
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
  //keep track of which question the user is on  
var questionCounter = 0;

const testbtn = document.getElementById("Start");

var timer;
var time = 120;

testbtn.addEventListener("click", () => {

//start timer
timer = setInterval(countDown, 1000)

//get question and choices render
renderQuiz();

})


function countDown(){
  //subtract one from current value of time
    time--;
    document.getElementById("timer").innerHTML = time;

    //check if timer ran out
    if(time === 0){
      console.log('End Quiz');
      //eventually call function to end quiz
    }

}

function renderQuiz ()  {
    document.getElementById("quizheader").hidden = false;
    document.getElementById("Start").hidden = true;

    console.log(quizData[questionCounter].question);
//append question to div on html
  questionEl.innerHTML = quizData[questionCounter].question;

choicesDiv.innerHTML ='';

   // console.log(quizData[questionCounter].choices);


    var choicesArr =quizData[questionCounter].choices;

    //looping choices arry to create btns and get them renderede
    for (let index = 0; index < choicesArr.length; index++) {
      //create buttons with each item/
      let btn = document.createElement("button")
    
      //add text to buttons
      btn.innerHTML = choicesArr[index]
       // console.log(btn)
      //add values to those buttons
      btn.setAttribute('value', choicesArr[index])
//console.log(btn)
      //add function or onclick to the buttons
      btn.onclick = checkAnswer;
      //then append to html
      choicesDiv.append(btn)
   // console.log(choicesArr[index])
      
    }

    
};

function checkAnswer () {
  console.log(this)


  //check to see if the choice is right or wrong

   //if wrong deduct seconds from timer
   if(this.value !== quizData[questionCounter].correct ){
     console.log('incorrect', time);
     time = time - 10;
     document.getElementById("timer").innerHTML = time;
    }


   //check to see if there is a next questionCounter
     questionCounter++;
    //if there is move on to the next question 
    if(questionCounter === quizData.length){
      console.log('end quiz')
    }else{
      renderQuiz();
    }
    //elsecall function to end quiz

}


// const questions = ["what does HTML stand for?", "Volvo?", "BMW?"];
// const a1 = ["HyperText Markup Language", "Holy Text Many Langauges", "Holy Trinity of Many Langauges", "HyperText of Many Langauges"];
// const a2 = ["Holy Text Many Langauges", "Volvo", "BMW"];
// const a3 = ["Holy Trinity of Many Langauges", "Volvo", "BMW"];
// const a4 = ["HyperText of Many Langauges", "Volvo", "BMW"];



// function updateQuestions() {
//     questionCounter += 1;
//     document.getElementById("question").innerHTML = questions[questionCounter];
//     document.getElementById("a_text").innerHTML = a1[questionCounter];
//     document.getElementById("b_text").innerHTML = a2[questionCounter];
//     document.getElementById("c_text").innerHTML = a3[questionCounter];
//     document.getElementById("d_text").innerHTML = a4[questionCounter];
// }

// const submitbtn = document.getElementById("submit");
// submitbtn.addEventListener("click" , updateQuestions);
