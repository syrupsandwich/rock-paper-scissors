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

// compare choices
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' & computerSelection == 'paper') {
    console.log('computer: paper')
    return ('You LOOOSE! Paper beats rock.');
  } else if (playerSelection == 'paper' & computerSelection == 'rock') {
    console.log('computer: rock')
    return ('... paper? You win this time. >:(');
  } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
    console.log('computer: scissors')
    return ('You broke my scissors... :(');
  } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
    console.log('computer: rock')
    return ('You loose! I hope those scissors arn\'t borrowed.');
  } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
    console.log('computer: paper')
    return ('You cut my paper! How could you! >:I');
  } else if (playerSelection == 'paper' & computerSelection == 'scisors') {
    console.log('computer: scissors')
    return ('Snip snip. You loose!');
  } else {
    return ('Its a tie...');
  }
  
}

let playerSelection = (prompt('Rock Paper Scissors!'));
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// function game() {
//   for (let i = 0; i < 5; i++) {

//   }
// }

