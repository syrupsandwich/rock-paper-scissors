// return a random selection of rock, paper, or scissors
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

let playerScore = 0;
let computerScore = 0;
let currentGameRound = 0;

let score = document.querySelector('#score');
let title = document.querySelector('#title');
let results = document.querySelector('#results');

// compare the player's selection against a random selection
function playRound(playerSelection, computerSelection) {

  //stop the round if player selections are the same
  if (playerSelection == computerSelection) {
    results.textContent = (`Error: same selection by chance`)
    return;
  }

  results.textContent = (`Round ${++currentGameRound}:`
  + ` user played ${playerSelection}`
  + ` against ${computerSelection}.`);

  //update: replace console.log with results.textContent
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
  } else {
    results.textContent = (`Error.`);
  }
}

//remove function game()

let selection = document.querySelector('#selection');
selection.addEventListener('click', (event) => {
  if (event.target.nodeName == 'DIV') return;
  playRound(event.target.textContent, computerPlay());
  score.textContent = `The score is ${playerScore} to ${computerScore}.`;
});

