const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score")


const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);


questionEl.innerText = `Whats is ${num1} multiply by ${num2} ?`;

const correctAnswer = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`;


function checkAnswer() {
    const Answer = parseInt(inputEl.value)
    if (Answer === correctAnswer) {
        score++
        updateLocalStorage()
    }else {
        if (score === 0){
            score = 0
        }else {
            score --
        }
        updateLocalStorage()
    }
}


function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}


formEl.addEventListener("submit", checkAnswer);
