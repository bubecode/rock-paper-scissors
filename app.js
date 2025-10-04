function titleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
const icons = { "rock": "✊", "paper": "🖐️", "scissors": "✌" }

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}



let humanScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

const buttons = document.querySelectorAll("button")
const computerHand = document.querySelector(".computer-hand")
const humanHand = document.querySelector(".human-hand")
const gameMessage = document.querySelector("#game-message")
const humanScoreLabel = document.querySelector("#human-score")
const computerScoreLabel = document.querySelector("#computer-score")

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return null
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return true;
    } else {
        return false;
    }

}

function playGame(event) {

    const computerChoice = getComputerChoice().toLowerCase()
    const humanChoice = event.target.dataset.choice.toLowerCase()

    const result = playRound(computerChoice, humanChoice)

    if (result === true) {
        humanScore++
        gameMessage.textContent = `You Win! ${titleCase(humanChoice)} beats ${computerChoice}.`;

    } else if (result === false) {
        computerScore++
        gameMessage.textContent = `You Lose! ${titleCase(computerChoice)} beats ${humanChoice}.`;
    } else {
        gameMessage.textContent = `It's a Tie! You both chose ${humanChoice}.`;

    }

    humanScoreLabel.textContent = humanScore
    computerScoreLabel.textContent = computerScore
    
    humanHand.textContent = icons[humanChoice]
    computerHand.textContent = icons[computerChoice]

    if (humanScore === MAX_SCORE) {
        gameMessage.textContent = "🎉 You are the overall winner!";
        disableButtons();
    } else if (computerScore === MAX_SCORE) {
        gameMessage.textContent = "😅 Computer wins the game!";
        disableButtons();
    }
}


buttons.forEach(btn => {
    btn.addEventListener("click", playGame);
});

function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}