const generateQuiz = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const myQuestions = document.getElementById('myQuestions')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const startButton = generateQuiz
let  shuffledQuestions, currentQuestionsIndex
// attempt 3

document.querySelector("#submit-btn").addEventListener("click", function(event) {
    console.log("Get STARTED!");
});
// Let btn = document.createElement("button");
// btn.innerHTML = "Start Quiz";
// document.body.appendChild() method
// object.onclick = function(){generateQuiz};

// attempt 1

function startButton (myQuestions)
<button onclick='start'>Start Quiz</button>
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function beginQuiz() {
    startButton("click")
    click('startQuiz')
}

function startQuiz() {
   startButton.classList.add('hide')
   shuffledQuestions = questions.sort(() => Math.random() - .5)
   currentQuestionsIndex = 0
   myQuestions.classList.remove('hide')
   setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startQuiz.innerText = 'restart'
        startQuiz.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
             'HyperText Markup Logic', false,
             'HyperText Markup List', false,
             'HyperText Markup Language', true
        ]
    }
]






// // attemp2 bellow


// questions for quiz go here in a string
// function myQuestions 
    
//         question: "What does HTML stand for?",
//         answers: {
//             A: 'HyperText Markup Logic',
//             B: 'HyperText Markup List',
//             C: 'HyperText Markup Language'
//         }
//         correctAnswer: 'C'
    
    
//         question: "What is the best description of JavaScript?",
//         answers: {
//             A: 'Website stuff',
//             B: 'Steps To help Develop WebPages',
//             C: 'Computer Programming Language'
//         }
//         correctAnswer: 'C'
    
    
//         question: "CSS stands for?",
//         answers: {
//             A: 'Copy Start Setup',
//             B: 'Cascading Style Sheets',
//             C: 'CyberText System Stratogies'
//         }
//         correctAnswer: 'B'
    
    
//         question: "In coding what are these brackets; () used for?",
//         answers: {
//             A: 'Function',
//             B: 'List',
//             C: 'String'
//         }
//         correctAnswer: 'A'




// function showQuestions(question, quizContainer){
//     var output = [];
//     var answers;

//     for(var i=0; i<questions.length; i++){
//         answers= [];

//     for (letter in questions[i].answers){

//         answers.push(
//             + '<input type="radio" name="question'+i+'" value="'+letter+'">'
//             + letter + ': '
//             + questions[i].answers[letter]
//         + '</label>'
//         );
//     }

//     output.push(
//         '<div class="question">' + questions[i].question + '</dive>'
//         + '<div class="answers">' + answers.join('') + '</div>'
//     );
//     }
//     quizContainer.innerHTML = output.join('');

//     showQuestions(questions, quizContainer);
// }



// function generateQuiz(questions, quizContainer, resultContainer, submitButton){
//     function showQuestions(questions, quizContainer){

//     }

//     function showResults(questions, quizContainer, resultContainer){

//     }

//     showQuestions(questions, quizContainer);

//     submitButton.onclick = function(){
//         showResults(questions, quizContainer, resultContainer);
//     }
// }

// function showResults(questions, quizContainer, resultsContainer){
	
// 	var answerContainers = quizContainer.querySelectorAll('.answers');
	
// 	var userAnswer = '';
// 	var numCorrect = 0;
	
// 	for(var i=0; i<questions.length; i++){

// 		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
// 		if(userAnswer===questions[i].correctAnswer){
// 			numCorrect++;
		
// 			answerContainers[i].style.color = 'lightgreen';
// 		}
// 		else{
// 			answerContainers[i].style.color = 'red';
// 		}
// 	}

// 	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
// }

// start-btn.onclick = function(){
//     showResults(questions, quizContainer, resultContainer);
// }

// var quizContainer = document.getElementById('quiz');
// var resultContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');

// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);