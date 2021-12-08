var questions = [

    {
        question: "What does HTML stand for?",
        A: "HyperText Markup Logic",
        B: "HyperText Markup List",
        C: "HyperText Markup Language",
        correctAnswer: "C",
    },
    {
        question: "What is the best description of JavaScript?",
        A: "Website stuff",
        B: "Steps To help Develop WebPages",
        C: "Computer Programming Language",
        correctAnswer: "C"
    },
    {
        question: "CSS stands for?",
        A: "Copy Start Setup",
        B: "Cascading Style Sheets",
        C: "CyberText System Stratogies",
        correctAnswer: "B"
    },
    {
        question: "In coding what are these brackets; () used for?",
        A: "Function",
        B: "List",
        C: "String",
        correctAnswer: "A"
    }

]

var startQuiz = document.querySelector("#start-btn");
var timeLeft = 50;
var randomQuestion = "";
var questionEl = document.getElementById("question-title");
var buttonA = document.getElementById("button-a");
var buttonB = document.getElementById("button-b");
var buttonC = document.getElementById("button-c");
var buttonD = document.getElementById("button-d");
var currentQuestion = 0;
var rightOrWrong = document.getElementById("right-or-wrong");
var quizHomePage = document.getElementById("start-quiz");
var questionPage = document.getElementById("question-page");
var highScorePage = document.getElementById("high-score-page");
var enterInitials = document.getElementById("enter-name");
var highScoreButton = document.getElementById("high-score");
var userScore = document.getElementById("user-score");
var playerName = document.getElementById("enter-name");

var submitScore = document.getElementById("submit-score");
var userInitials = document.getElementById("user-initials");
var playerName = "";
var localScore = "";

// generates the questions after pressing start
function generateQuestion() {

highScorePage.style.display = "none";
if (currentQuestion <=4) {

   
    questionEl.innerHTML = questions[currentQuestion].question;
    buttonA.innerHTML = questions[currentQuestion].A;
    buttonB.innerHTML = questions[currentQuestion].B;
    buttonC.innerHTML = questions[currentQuestion].C;
    buttonD.innerHTML = questions[currentQuestion].D;

    buttonA.addEventListener("click", checkAnswer);
    buttonB.addEventListener("click", checkAnswer);
    buttonC.addEventListener("click", checkAnswer);
    buttonD.addEventListener("click", checkAnswer);


}   else {
    endGame();
}
};


// checks to see if answer is right
function checkAnswer(e) {
if (e.target.value !== questions[currentQuestion].correctAnswer) {
    timeLeft -= 10;
    rightOrWrong.innerHTML = "wrong";
} else { 
rightOrWrong.innerHTML = "right";
}

if (currentQuestion <= 4) {

currentQuestion++;

questionEl.innerHTML = questions[currentQuestion].question;
buttonA.textContent = questions[currentQuestion].A;
buttonB.innerHTML = questions[currentQuestion].B;
buttonC.innerHTML = questions[currentQuestion].C;
buttonD.innerHTML = questions[currentQuestion].D;
} else {
    endGame();
}
};

// timer
var quizTimer;
var clock = document.getElementById("quiz-timer");

function timer() {

    clock.innerHTML = timeLeft + " seconds remaining.";

    timeLeft--;
    if (timeLeft === 0) {
        clearInterval(quizTimer);
        endGame();
    } 
};


function nameFunction() {
localStorage.setItem("name", playerName);
var localName = localStorage.getItem("name");
userInitials.innerHTML = localName;
};



function endGame() {
clearInterval(quizTimer);

localStorage.setItem("score", timeLeft.toString());

questionPage.style.display = "none";
highScorePage.style.display = "none";
enterInitials.style.display = "unset";
nameFunction();
generateHighScore();
};


function generateHighScore() {

localScore = localStorage.getItem("score");
userScore.innerHTML = localScore;


}






function generateQuiz() {
quizTimer = setInterval(timer, 1000);
quizHomePage.style.display = "none";
questionPage.style.display = "unset";
};


generateQuestion();

questionPage.style.display = "none";
highScorePage.style.display = "none";
enterInitials.style.display = "none";



highScoreButton.addEventListener("click", function(){
questionPage.style.display = "none";
enterInitials.style.display = "none";
quizHomePage.style.display = "none";
questionPage.style.display = "none";
highScorePage.style.display = "unset";
generateHighScore();
});

startQuiz.addEventListener("click", generateQuiz);