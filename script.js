const questionsCorrect = document.querySelector("#correct");
const questionsWrong = document.querySelector("#wrong");
const questionsAnswered = document.querySelector("#answered");

const question = document.querySelector("#question");

const trueButton = document.querySelector("#true");
const falseButton = document.querySelector("#false");

let q = [new function () {
    this.question = "In space, you cannot cry";
    this.answer = true;
}, new function () {
    this.question = "The inventor of the light bulb, Thomas Edison, was afraid of the dark";
    this.answer = true;
}, new function () {
    this.question = "The letter T is the most common in the English Language";
    this.answer = false;
}, new function () {
    this.question = "There is no real word that rhymes with Orange";
    this.answer = true;
}, new function () {
    this.question = "Women can read smaller print than men; Men can hear better than women";
    this.answer = false;
}, new function () {
    this.question = "A cockroach will live for nine days without its head, before it starves to death";
    this.answer = true;
}]

let questionNumber = 0;
let correct = 0;
let wrong = 0;
let answered = 0;

let questionDisplayed = false;
let quizFinished = false;

function startGame() {
    question.innerHTML = q[questionNumber].question;
    questionsCorrect.innerHTML = correct;
    questionsWrong.innerHTML = wrong;
    questionsAnswered.innerHTML = `${answered}/${q.length}`;
    questionDisplayed = true;
}

startGame();

if (questionDisplayed) {
    trueButton.addEventListener("click", function () {
        chooseAnswer(true)
    });
    falseButton.addEventListener("click", function () {
        chooseAnswer(false)
    });
}

function chooseAnswer(chosenAnswer) {
    if (questionNumber < q.length) {
        if (q[questionNumber].answer == chosenAnswer) {
            correct++;
        } else {
            wrong++;
        }
        answered++;
        questionsCorrect.innerHTML = correct;
        questionsWrong.innerHTML = wrong;
        questionsAnswered.innerHTML = `${answered}/${q.length}`;
        questionDisplayed = false;
        questionNumber++;
        nextQuestion();
    } else if (quizFinished) {
        alert("You already finished the quiz! Reload the page to try again.")
    }
}

function nextQuestion() {
    if (questionNumber < q.length) {
        question.innerHTML = q[questionNumber].question;
        questionDisplayed = true;
    } else {
        alert("You have finished the quiz! Reload the page to try again.")
        quizFinished = true;
    }
}