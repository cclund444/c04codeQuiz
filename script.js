//questions for quiz go here in a string
var myQuestions = [
    {
        question: "What is the U of A mascot?",
        answers: {
            A: 'SunDevil',
            B: 'Donkey',
            C: 'WildCat'
        },
        correctAnswer: 'C'
    },
    {
        question: "How many States are in the United States of America?",
        answers: {
            A: '25',
            B: '48',
            C: '50'
        },
        correctAnswer: 'C'
    },
    {
        question: "Who created Disney?",
        answers: {
            A: 'Joe Biden',
            B: 'Marry Poppins',
            C: 'Walt Disney'
        },
        correctAnswer: 'C'
    },
    {
        question: "What color is the sky really?",
        answers: {
            A: 'Clear',
            B: 'Yellow',
            C: 'Blue'
        },
        correctAnswer: 'C'
    }
]

function showQuestions(question, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
        answers= [];

    for (letter in questions[i].answers){

        answers.push(
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
        + '</label>'
        );
    }

    output.push(
        '<div class="question">' + questions[i].question + '</dive>'
        + '<div class="answers">' + answers.join('') + '</div>'
    );
    }
    quizContainer.innerHTML = output.join('');

    showQuestions(questions, quizContainer);
}



function generateQuiz(questions, quizContainer, resultContainer, submitButton){
    function showQuestions(questions, quizContainer){

    }

    function showResults(questions, quizContainer, resultContainer){

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultContainer);
    }
}

function showResults(questions, quizContainer, resultsContainer){
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	var userAnswer = '';
	var numCorrect = 0;
	
	for(var i=0; i<questions.length; i++){

		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
		
			answerContainers[i].style.color = 'lightgreen';
		}
		else{
			answerContainers[i].style.color = 'red';
		}
	}

	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

submitButton.onclick = function(){
    showResults(questions, quizContainer, resultContainer);
}

var quizContainer = document.getElementById('quiz');
var resultContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);