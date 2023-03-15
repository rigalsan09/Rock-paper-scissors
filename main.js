let playerScore = 0;
let compScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

const getComputerChoice = function () {
  const options = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * options.length);
  return options[randomNum];
};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    const p = document.createElement("p");
    outcomeDiv.append(p);
    p.innerText = `You tied! You both picked ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lose! Rock crushes scissors";
    outcomeDiv.append(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You win! scissors cut paper";
    outcomeDiv.append(p);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! Paper covers rock";
    outcomeDiv.append(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You win! rock crushes scissors";
    outcomeDiv.append(p);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! scissors cut paper";
    outcomeDiv.append(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You won! paper covers rock";
    outcomeDiv.append(p);
  }
};

const checkForWinner = (playerScore, compScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("player-won!");
    h2.innerText = `You won ${playerScore} to ${compScore} great job beating the computer!`;
    outcomeDiv.append(h2);
  } else if (compScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("computer-won!");
    h2.innerText = `You lost ${playerScore} to ${compScore} great job computer!`;
    outcomeDiv.append(h2);
  }
};

//Event listener

//function
const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player score: ${playerScore}`;
  computerScoreSpan.innerText = ` Computer score ${computerScore}`;
};

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, compScore);
  checkForWinner(playerScore, compScore);
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, compScore);
  checkForWinner(playerScore, compScore);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, compScore);
  checkForWinner(playerScore, compScore);
});

// const game = () => {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt("Choose RPS").toLowerCase();
//     const computerSelection = getComputerChoice();
//     console.log("1 ", playRound(playerSelection, computerSelection));
//   }

//   if (playerScore > compScore) {
//     return " You beat the computer!";
//   } else if (playerScore < compScore) {
//     return "You got beat by the computer!";
//   } else {
//     return "You tied with computer";
//   }
// };

// console.log(game());

//////////////////////////////////////
