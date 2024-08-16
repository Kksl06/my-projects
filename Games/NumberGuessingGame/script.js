let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const message = document.getElementById('message');

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess)) {
        message.textContent = "Please enter a valid number!";
    } else if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Number must be between 1 and 100!";
    } else if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed it right!";
        resetGame();
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
    }
});

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.value = '';
}
