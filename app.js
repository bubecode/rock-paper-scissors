function titleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function getComputerChoice() {

    let message = ''
    const response = Math.floor(Math.random() * 3)
    if (response === 0) {
        message = "rock"
    } else if (response === 1) {
        message = "paper"
    } else {
        message = "scissors"
    }

    return message

}


function getHumanChoice() {

    let userChoice = prompt("Choose: rock, paper, or scissors", "rock").toLowerCase();
    return userChoice

}



function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
    } else if (
        (humanChoice === 'rock' && computerChoice === "scissors") ||
        (humanChoice === 'paper' && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return 'win'
    } else {
        return 'lose'
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice())
        if (result == 'win') {
            humanScore++
        } else if (result == 'lose') {
            computerScore++
        }
    }

    console.log("Final Score → Human:", humanScore, "Computer:", computerScore);

    if (humanScore > computerScore) {
        console.log("🎉 You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("😅 Computer wins the game!");
    } else {
        console.log("🤝 It's a tie overall!");
    }

}
playGame()
