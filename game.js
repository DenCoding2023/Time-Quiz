const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Which of the following is NOT a valid Java identifier?',
        choice1: 'myVariable',
        choice2: '123variable',
        choice3: '_variable',
        choice4: 'Variable123',
        answer: 2,
    },
    {
        question: 'Which of the following is the correct way to declare and initialize a constant variable in Java?',
        choice1: 'constant int x = 5;',
        choice2: 'final x = 5;',
        choice3: 'final int x = 5;',
        choice4: 'int x = final 5;',
        answer: 3,
    },
    {
        question: 'What is the purpose of the break statement in Java?',
        choice1: 'It terminates the current loop or switch statement.',
        choice2: 'It skips the current iteration of a loop.',
        choice3: 'It transfers the program control to a specified label.',
        choice4: 'It throws an exception to be caught by a try-catch block.',
        answer: 1,
    },
    {
        question: 'Which HTML tag is used to define a hyperlink?',
        choice1: '<a>',
        choice2: '<h1>',
        choice3: '<p>',
        choice4: '<div>',
        answer: 1,
    },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

const getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice, index) => {
        choice.innerText = currentQuestion['choice' + (index + 1)];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});
