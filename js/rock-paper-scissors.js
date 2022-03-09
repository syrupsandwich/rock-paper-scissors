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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Play a round of the game. the evaluation?
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' & computerSelection == 'paper') {
    console.log('paper')
    return ('You LOOOSE! Paper beats rock.');
  } else if (playerSelection == 'paper' & computerSelection == 'rock') {
    console.log('rock')
    return ('... paper? You win this time. >:(');
  } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
    console.log('scissors')
    return ('You broke my scissors... :(');
  } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
    console.log('rock')
    return ('You loose! I hope those scissors arn\'t borrowed.');
  } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
    console.log('paper')
    return ('You cut my paper! How could you! >:I');
  } else if (playerSelection == 'paper' & computerSelection == 'scisors') {
    console.log(scissors)
    return ('Snip snip. You loose!');
  } else {
    return ('Try again.');
  }

}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));