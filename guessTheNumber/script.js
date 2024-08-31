
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

const feedback = document.getElementById('feedback');
const attempts = document.getElementById('attempts');
const userGuess = document.getElementById('userGuess');
const checkGuess = document.getElementById('checkGuess');
const restartGame = document.getElementById('restartGame');

function disableInput() {
    userGuess.disabled = true;
    checkGuess.disabled = true;
}

checkGuess.addEventListener('click', () => {
    const guess = parseInt(userGuess.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }
    attemptsLeft--;
    attempts.textContent = attemptsLeft;

    if (guess === randomNumber) {
        feedback.textContent = "Congrats You guessed it right!";
        disableInput();
    } else if (guess > randomNumber) {
        feedback.textContent = "You guessed it high.";
    } else {
        feedback.textContent = "You guessed it low.";
    }

    if (attemptsLeft === 0 && guess !== randomNumber) {
        feedback.textContent = "Sorry, you've run out of Attempts";
        disableInput();
    }
});

