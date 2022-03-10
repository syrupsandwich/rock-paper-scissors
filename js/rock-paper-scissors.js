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

// compare choices
function playRound(playerSelection, computerSelection) {
  console.log(`user: ${playerSelection}`);
  console.log(`computer: ${computerSelection}`);
  if (playerSelection == 'rock' & computerSelection == 'paper') {
    return ('You LOOOSE! Paper beats rock.');
  } else if (playerSelection == 'paper' & computerSelection == 'rock') {
    return ('You win this round. >:(');
  } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
    return ('You broke my scissors. :(');
  } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
    return ('You loose! I hope those scissors arn\'t borrowed.');
  } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
    return ('You cut my paper! How could you! >:I');
  } else if (playerSelection == 'paper' & computerSelection == 'scisors') {
    return ('Snip snip. You loose!');
  } else {
    return (`Computer chose ${playerSelection}. Its a tie...`);
  }
}

let playerScore = 0;
let computerScore = 0;
let score = (`${playerScore}:${computerScore}`)
const playerSelection = ('rock');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

console.log(score);

// function game() {
//   for (let i = 0; i < 5; i++) {
//   }
// }

