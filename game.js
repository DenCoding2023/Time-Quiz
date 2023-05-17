const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let qustionCounter= 0
let availableQuestions = []

let quetoins = [
    {
        question: 'what is 2+2',
        choice1:'2',
        choice2:'4',
        choice3: '21',
        choice4: '17',
        answer: 2,

    },
    {
        question: 'what is 2+2',
        choice1:'2',
        choice2:'4',
        choice3: '21',
        choice4: '17',
        answer: 2,

    },
    {
        question: 'what is 2+2',
        choice1:'2',
        choice2:'4',
        choice3: '21',
        choice4: '17',
        answer: 2,

    },
    {
        question: 'what is 2+2',
        choice1:'2',
        choice2:'4',
        choice3: '21',
        choice4: '17',
        answer: 2,

    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () =>{
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    
}

getNewQuestion = () =>{
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score)
        return window.location.assign('/end.html')
    }


questioncounter++
progressText.innerText =`Question ${questionCounter} of ${Max_Quetsions}`
progressBarFull.getElementsByClassName.width= `${(questioncounter/MAX_QUESTIONS) * 100}%`

const questionsIndex= Math.florr(Math.ramdon() * availableQuestions.length)
currentQuestion = availableQuestions{questionsIndex}
question.innerText= currentQuestion.question

choices.forEach(choice => {
    const number = cohice.dataset['number']
    choice.innerText = currentQuestion['chhoice' + number]

})

availableQuestions.splice(questionIndex, 1)



}