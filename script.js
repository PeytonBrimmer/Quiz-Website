//variables----------------

const startButton = document.getElementById("start-btn");

const questionContainer = document.getElementById("question-container");

const resultContainer = document.getElementById("result-container");

const timerDisplay = document.getElementById("timer");

let currentQuestionIndex = 0;

let timer = 60;

//------------------------------------------------------------------------------------
//questions
const questions = [
  {
    question: "question",
    answers: ["Answer", "Answer", "Answer"],
    correctAnswer: 0
  },
  {
    question: "What are containers for storing values? ",
    answers: ["Variables", "element", "github"],
    correctAnswer:    0
  },
  {
    question: "question",
    answers: ["Answer", "Answer", "Answer"],
    correctAnswer: 0
  },
  {
    question: "question",
    answers: ["Answer ", "Answer ", "Answer "],
    correctAnswer: 0
  },
  {
    question: "question",
    answers: ["Answer", "Answer", "Answer"],
    correctAnswer: 0
  },
  {
    question: "What is?",
    answers: ["Answer ", "Answer ", "Answer "],
    correctAnswer: 0
  },
  
];
//start button
startButton.addEventListener('click', startQuiz);

function startQuiz() {
  startButton.style.display = 'none';
  showQuestion();

  startTimer();
}


function showQuestion() {

  const question = questions[currentQuestionIndex];
   questionContainer.innerHTML = `
    <h2>${question.question}</h2>
   
           <ul>
    
    ${question.answers.map((answer, index) => `
        <li><button onclick="checkAnswer(${index})">${answer}</button></li> `).join('')} </ul>`;}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  if (selectedIndex === question.correctAnswer) 
  {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    }
     else {
      endQuiz();
    }
  } 
  
  else {
   timer -= 20; 
  }
}

function startTimer() {

  const timerInterval = setInterval(() => {
    timer--;
    
if (timer <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 10000);
}

function endQuiz() {
  questionContainer.innerHTML = '';
  resultContainer.innerHTML = `
    <h2>Quiz Over!</h2>
    <p class="h2">Your score: ${timer}</p>
    <input type="text" id="initials" placeholder="Enter your initials">
     <button onclick="saveScore()">Save Score</button>
  `;
}

function saveScore() {
  const initials = document.getElementById('initials').value;
}

