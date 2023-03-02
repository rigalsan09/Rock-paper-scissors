const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

//checks for possibility
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie!"
    }
    else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

//Get player choice loop ask for input
function getPlayerChoice() {
    let validInput = false;
    while (validInput == false) {
        const choice = prompt("Rock Paper Sciccors");
        if (choice == null) {
            continue;
        }
        const choiceLower = choice.toLowerCase();
        if (options.includes(choiceLower)) {
            validInput = true;
            return choiceLower;
        }
    }
}

//play 5 games
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }
    console.log("Game over")
    if (playerScore > computerScore) {
        console.log("Player was the winner");
    }
    else if (playerScore < computerScore) {
        console.log("Computer was the winner");
    }
    else {
        console.log("We have a tie!");
    }
}
