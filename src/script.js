'use strict';

/*---------------- DOM eleemnts --------------------*/
const body = document.querySelector('body');
const btnAgain = document.querySelector('.again');
const divDisplayNumber = document.querySelector('.number');
const inputGuess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const lblMsg = document.querySelector('.message');
const spanScore = document.querySelector('.score');
const spanHighscore = document.querySelector('.highscore');

/*---------------- Variables --------------------*/
let highscore = 0;
let nGuess = 0;
let lowLimitNumber = 0;
let hightLimitNumber = 50;
let score = hightLimitNumber;
let secretNumber = getRandomIntInclusive(lowLimitNumber, hightLimitNumber);

//---------------- Initializer --------------------
spanScore.textContent = score;
console.log(secretNumber);

/*---------------- fuctions --------------------*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const displayScore = function () {
  score--;
  spanScore.textContent = score;

  // if score <= 0 - loss the game
  if (score <= 0) {
    lblMsg.textContent = 'You lost the game 💥';
    lblMsg.style.backgroundColor = '#fff';
    lblMsg.style.color = 'black';
    body.style.backgroundColor = '#c40000';
    return;
  }
};

const checkIfWin = function () {
  nGuess = inputGuess.value === '' || +inputGuess.value;

  console.log(nGuess);

  // -- check correct input values --
  if (nGuess === true) {
    lblMsg.textContent = `!Type a number 🤓¡`;
    return;
  }
  if (nGuess < lowLimitNumber || nGuess > hightLimitNumber) {
    lblMsg.textContent = `Type a number above ${lowLimitNumber} and below ${hightLimitNumber}`;
    return;
  }

  // -- if win
  if (nGuess === secretNumber) {
    lblMsg.textContent = 'Correct! you won!🎉';
    lblMsg.style.backgroundColor = '#fff';
    lblMsg.style.color = 'black';
    body.style.backgroundColor = '#087829';
    divDisplayNumber.style.width = '30rem';
    divDisplayNumber.textContent = secretNumber;
    inputGuess.disabled = true;
    btnCheck.disabled = true;

    if (score > highscore) {
      highscore = score;
      spanHighscore.textContent = highscore;
    }

    return;
  }

  // -- if number is to high
  if (nGuess > secretNumber) {
    lblMsg.textContent = '📈 Too high!';
    displayScore();
  }
  // -- if number is to low
  if (nGuess < secretNumber) {
    lblMsg.textContent = '📉 Too low!';
    displayScore();
  }
};

const resetElements = function () {
  secretNumber = getRandomIntInclusive(lowLimitNumber, hightLimitNumber);
  score = hightLimitNumber;
  body.style.backgroundColor = '#222';
  divDisplayNumber.style.width = '15rem';
  divDisplayNumber.textContent = '?';
  lblMsg.textContent = 'Start guessing...';
  lblMsg.style.backgroundColor = '#222';
  lblMsg.style.color = '#7ecaff';
  spanScore.textContent = score;
  inputGuess.value = '';
  inputGuess.disabled = false;
  btnCheck.disabled = false;
};

/*---------------- EventListener --------------------*/
btnCheck.addEventListener('click', checkIfWin);
btnAgain.addEventListener('click', resetElements);
