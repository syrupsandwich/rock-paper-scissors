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
console.log(`Computer may choose ${computerPlay()}.`)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let playerScore = 0;
let computerScore = 0;

// compare choices
function playRound(playerSelection, computerSelection) {
  console.log(`user: ${playerSelection}`);
  console.log(`computer: ${computerSelection}`);
  if (playerSelection == 'rock' & computerSelection == 'paper') {
    ++computerScore;
    return ('You LOOOSE! Paper beats rock.');
  } else if (playerSelection == 'paper' & computerSelection == 'rock') {
    ++playerScore;
    return ('You win this round. >:(');
  } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
    ++playerScore;
    return ('You broke my scissors. :(');
  } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
    ++computerScore;
    return ('You loose! I hope those scissors arn\'t borrowed.');
  } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
    ++playerScore;
    return ('You cut my paper! How could you! >:I');
  } else if (playerSelection == 'paper' & computerSelection == 'scisors') {
    ++computerScore;
    return ('Snip snip. You loose!');
  } else {
    return (`Computer chose ${playerSelection}. Its a tie...`);
  }
}


// let score = (`${playerScore}:${computerScore}`);
const playerSelection = ('rock');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

console.log(`you: ${playerScore}, computer: ${computerScore}`);

// function game() {
//   for (let i = 0; i < 5; i++) {
//   }
// }

