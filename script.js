/*
The Odin Project - Rock, Paper, Scissors.

Reminder:
rock > scissors
paper > rock
scissors > paper
*/

function getComputerChoice () {
  let choice = ['rock', 'paper', 'scissors'];
  return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  switch(playerSelection) {
    case "rock":
      switch(computerSelection) {
        case "paper": //rock vs paper
          return "You Lose! Paper covers Rock."
          break;
        case "scissors": //rock vs scissors
          return "You Win! Rock breaks Scissors."
          break;
        default: //rock vs rock
         return "Deuce."
         break;
      }
      break;
    case "paper":
      switch(computerSelection) {
        case "paper": //paper vs paper
          return "Deuce."
          break;
        case "scissors": //paper vs scissors
          return "You Lose! Scissors cuts Paper."
          break;
        default: //paper vs rock
          return "You Win! Paper covers Rock."
      }
    case "scissors":
      switch(computerSelection) {
        case "paper"://scissors vs paper
          return "You Win! Scissors cuts Paper."
          break;
        case "scissors"://scissors vs scissors
          return "Deuce."
          break;
        default: //scissors vs rock
          return "You Lose! Rock breaks Scissors."
      }
    default:
      return "Please, select only: rock, paper or scissors."
  }
}

function game() {
  for (let x = 0; x < 5; x++) {
    let choice = prompt("Welcome to Rock, Paper, Scissors. Your turn:","Rock");
    playerSelection = choice.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection)
    console.log(playRound(playerSelection, computerSelection));
  }

}

let scorePlayer = 0;
let scoreComputer = 0;
let playerSelection = "";
let computerSelection = "";

game();
