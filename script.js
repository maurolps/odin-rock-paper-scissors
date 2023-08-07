/*
The Odin Project - Rock, Paper, Scissors.
*/

function getComputerChoice () {
  let choice = ['rock', 'paper', 'scissors'];
  return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  switch(playerSelection) {
    case "rock":
      switch(computerSelection) {
        case "paper": //rock vs paper - Lose
          scoreComputer++
          return "Paper covers Rock.";
        case "scissors": //rock vs scissors - Win
          scorePlayer++;  
          return "Rock breaks Scissors.";
        default: //rock vs rock - Draw
         return "Deuce."
      }
    case "paper":
      switch(computerSelection) {
        case "paper": //paper vs paper - Draw
          return "Deuce."
        case "scissors": //paper vs scissors - Lose
          scoreComputer++
          return "Scissors cuts Paper."
        default: //paper vs rock - Win
        scorePlayer++;
          return "Paper covers Rock.";
      }
    case "scissors":
      switch(computerSelection) {
        case "paper"://scissors vs paper - Win
          scorePlayer++;
          return "Scissors cuts Paper."
        case "scissors"://scissors vs scissors - Draw
          return "Deuce."
        default: //scissors vs rock - Lose
          scoreComputer++
          return "Rock breaks Scissors."
      }
    default:
      return "Please, select only: rock, paper or scissors."
  }
}

function updateScore(message) {
  score.textContent = "Your Score: " +scorePlayer+ " NPC Score: " +scoreComputer;
  scoreContainer.appendChild(score);
  if (scorePlayer > 4) {
    winner.textContent = "You Win!";
    scorePlayer= 0;
    scoreComputer = 0;
    return;
  }
  if (scoreComputer > 4) {
    winner.textContent = "You Lose! Try again";
    scorePlayer = 0;
    scoreComputer = 0;
    return;
  }
  winner.textContent = message;
  winnerContainer.appendChild(winner);

}

function game(playerSelection) {
  computerSelection = getComputerChoice();
  updateScore(playRound(playerSelection.target.id, computerSelection));

}

let scorePlayer = 0;
let scoreComputer = 0;

const buttonChoice = document.querySelectorAll('button');
const scoreContainer = document.querySelector('#score-container');
const winnerContainer = document.querySelector('#winner-container');
const score = document.createElement('div');
const winner = document.createElement('div');

score.classList.add('score');
winner.classList.add('winner');
buttonChoice.forEach((btn) => {btn.addEventListener('click', game)});

 