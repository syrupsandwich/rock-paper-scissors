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

let scoreBoard = document.querySelector('#score');
let title = document.querySelector('#title');
let results = document.querySelector('#results');

// compare the player's selection against a random selection
function playRound(playerSelection, computerSelection) {
  gameEnd.style.color = 'white';
  gameEnd.textContent = '.';

  //update images
  leftHand.src = `./image/rps-${playerSelection}.svg`;
  rightHand.src = `./image/rps-robot-${computerSelection}.svg`;

  //stop the round if player selections are the same
  if (playerSelection == computerSelection) {
    results.textContent = (`Round ${currentGameRound}: same selection by chance`)
    return;
  } 

  results.textContent = (`Round ${++currentGameRound}:`
  + ` user played ${playerSelection}`
  + ` against ${computerSelection}.`);

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

let selection = 'rock';

let buttons = document.querySelector('#buttons');
buttons.addEventListener('click', (event) => {
  if (event.target.nodeName == 'DIV') return;
  selection = event.target.textContent.toLowerCase();
  console.log(selection)
});

let throwDown = document.querySelector('.hover');
throwDown.addEventListener('mouseover', function(){
  playRound(selection, computerPlay());
  scoreBoard.textContent = `${playerScore} : ${computerScore}`;
  checkScore();
  
});

function checkScore() {
  if (currentGameRound % 5 == 0 && currentGameRound > 0) announceWinner();
}

let gameEnd = document.querySelector('.winner');

function announceWinner(){
  if (playerScore > computerScore) {
    gameEnd.textContent = ' ***PLAYER WINS***';
    gameEnd.style.color = 'black';
  } else {
    gameEnd.textContent = ' ***COMPUTER WINS***';
    gameEnd.style.color = 'black';
  }
}

let mouseTrackingSpace = document.querySelector('#inner-container');
// let hand = document.querySelector('.hand');
let leftHand = document.querySelector('#left'); 
let rightHand = document.querySelector('#right');

mouseTrackingSpace.addEventListener('mousemove', function (e){
  // hand.style.top = e.clientY - mouseTrackingSpace.getBoundingClientRect().top + 'px';
  leftHand.style.transform = `rotate(${(e.clientY - 240 ) *.2}deg)`;
  rightHand.style.transform = `rotate(${(e.clientY - 240 ) * -.2}deg)`;
});

throwDown.addEventListener('mouseleave', function (){
  leftHand.src = `./image/rps-rock.svg`;
  rightHand.src = `./image/rps-robot-rock.svg`;
});