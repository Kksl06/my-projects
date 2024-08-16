const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const options = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = options[Math.floor(Math.random() * 3)];
        determineWinner(userChoice, computerChoice);
    });
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        resultText.textContent = `It's a tie! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}