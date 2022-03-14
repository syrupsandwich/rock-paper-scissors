// return either rock, paper, or scissors
function computerPlay() {
  if (getRandomInt(3) == 0) {
    return ('rock');
  } else if (getRandomInt(3) == 1) {
    return ('paper');
  } else {
    return ('scissors');
  }
}
// test computerPlay output is random
// console.log(`Computer may choose ${computerPlay()}.`)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let playerScore = 0;
let computerScore = 0;
let currentGameRound = 0;

// compare choices
function playRound(playerSelection, computerSelection) {
  console.log(`Round ${++currentGameRound}:\
 user played ${playerSelection}\
 against ${computerSelection}.`);
  
  if (playerSelection == 'rock' & computerSelection == 'paper') {
    ++computerScore;
  } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
    ++playerScore;
  } else if (playerSelection == 'paper' & computerSelection == 'rock') {
    ++playerScore;
  } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
    ++computerScore;
  } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
    ++computerScore;
  } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
    ++playerScore;
  } else if (playerSelection == computerSelection) {
    console.log(`...`)
  } else if(playerSelection == (null || ' ')) {
    playerSelection = 'nothing';
    console.log(`game was quit.`);
  } else {
    console.log(`Error.`);
  }
}

console.log(game());

function game() {
  for (let round = 0; round < 5; round++) {
    playRound(prompt(`...computer may choose ${computerPlay()}.`.toLowerCase()), computerPlay());
    console.log(`user: ${playerScore}, computer: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log(`***User is the winner!***`);
  } else if (computerScore > playerScore) {
    console.log(`***Computer is the winner!***`);
  } else {
    console.log(`there is no winner.`);
  }
}

// does not update score
// function getScore() {
//   return `${playerScore}:${computerScore}`;
// }
