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
let round = 0;
// compare choices
function playRound(playerSelection, computerSelection) {
  console.log(`Round ${++round}: user played ${playerSelection} against ${attack}.`);
  
  if (playerSelection == 'rock' & computerSelection == 'paper') {
    ++computerScore;
  } else if (playerSelection == 'paper' & computerSelection == 'rock') {
    ++playerScore;
  } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
    ++playerScore;
  } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
    ++computerScore;
  } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
    ++playerScore;
  } else if (playerSelection == 'paper' & computerSelection == 'scisors') {
    ++computerScore;
  } else if (playerSelection == (null || ' ')) {
    console.log(`Try again.`);
    return round--;
  } else {
    console.log(`...Its a tie...`);
    return round--;
  }
}


// const playerSelection = (prompt('Rock Paper Scissors!'));

const computerSelection = computerPlay();
// console.log(`user: ${playerScore}, computer: ${computerScore}`);

// does not update score
// function getScore() {
//   return `${playerScore}:${computerScore}`;
// }

console.log(game());

function game() {
  for (let round = 0; round < 5; round++) {
    console.log(`...computer may choose ${computerPlay()}.`);
    playRound(prompt('Rock Paper Scissors!'.toLowerCase()), computerSelection);
    console.log(`user: ${playerScore}, computer: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log(`***User is the winner!***`);
  } else if (computerScore > playerScore) {
    console.log(`***Computer is the winner!***`);
  } else {
    console.log(`Its a draw...`);
  }
}
