//The Odin Project - Rock, Paper, Scissors.

function getComputerChoice () {
  let choice = ['rock', 'paper', 'scissors'];
  return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  switch(playerSelection) {
    case "rock":
      switch(computerSelection) {
        case "paper": //rock vs paper - Lose
          scoreComputer++;
          wincolor = colors[1];
          return "Paper covers Rock.";
        case "scissors": //rock vs scissors - Win
          scorePlayer++;  
          wincolor = colors[0];
          return "Rock breaks Scissors.";
        default: //rock vs rock - Draw
         wincolor = colors[2];
         return "Deuce."
      }
    case "paper":
      switch(computerSelection) {
        case "paper": //paper vs paper - Draw
          wincolor = colors[2];
          return "Deuce."
        case "scissors": //paper vs scissors - Lose
          wincolor = colors[1];
          scoreComputer++;
          return "Scissors cuts Paper."
        default: //paper vs rock - Win
        wincolor = colors[0];
        scorePlayer++;
          return "Paper covers Rock.";
      }
    case "scissors":
      switch(computerSelection) {
        case "paper"://scissors vs paper - Win
          wincolor = colors[0];
          scorePlayer++;
          return "Scissors cuts Paper."
        case "scissors"://scissors vs scissors - Draw
          wincolor = colors[2];
          return "Deuce."
        default: //scissors vs rock - Lose
          scoreComputer++
          wincolor = colors[1];
          return "Rock breaks Scissors."
      }
    default:
      return "Please, select only: rock, paper or scissors."
  }
}

function tryAgain() {
  const tryAgain = document.getElementById('tryagain-container');
  tryAgain.textContent = "Try again";
  buttonChoice.forEach((btns) => {
    btns.disabled = true;
  });

}

function updateScore(message) {
  score.textContent = "Your Score: " +scorePlayer+ " NPC Score: " +scoreComputer;
  scoreContainer.appendChild(score);
  if (scorePlayer > 4) {
    winner.style.fontSize = '36px';
    winner.style.color = colors[0];
    winner.textContent = "You Win!";
    scorePlayer= 0;
    scoreComputer = 0;
    tryAgain();
    return;
  }
  if (scoreComputer > 4) {
    winner.style.fontSize = '36px';
    winner.style.color = colors[1];
    winner.textContent = "You Lose! Try again";
    scorePlayer = 0;
    scoreComputer = 0;
    tryAgain();
    return;
  }
  winner.style.color = wincolor;
  winner.textContent = message;
}

function game(playerSelection) {
  computerSelection = getComputerChoice();
  updateScore(playRound(playerSelection.target.id, computerSelection));

}

let scorePlayer = 0;
let scoreComputer = 0;
let colors = ['green', 'red', 'blue'];
let wincolor = 'green';

const buttonChoice = document.querySelectorAll('button');
const scoreContainer = document.querySelector('#score-container');
const winnerContainer = document.querySelector('#winner-container');
const score = document.createElement('div');
const winner = document.getElementById('winner-container');

score.classList.add('score');
buttonChoice.forEach((btn) => {btn.addEventListener('click', game)});
