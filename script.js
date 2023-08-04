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

function game() {
  for (let x = 0; x < 5; x++) {
    let choice = prompt("Welcome to Rock, Paper, Scissors. Your turn: ("+(x+1)+"/5)","Rock");
    playerSelection = choice.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log("Your Score: " +scorePlayer+ " NPC Score: " +scoreComputer);
  if (scorePlayer > scoreComputer)  {
    console.log("You Win!"); 
    return
  }
    else 
      if (scorePlayer < scoreComputer) {
      console.log("You Lose!");
      return
      }
  console.log("Draw!")
      
}

let scorePlayer = 0;
let scoreComputer = 0;
let playerSelection = "";
let computerSelection = "";
 
game(); 
 