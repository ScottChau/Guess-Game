'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Correct Number ! 🎊 `;

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


function hihi() {
  console.log(50);
}

hihi(); // method for calling this type of function

*/

// ! return true for false statement , return false for true statement
// 'if' have to be true value to return sth

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When guess has no input
  if (!guess) {
    document.querySelector('.message').textContent = `No Number!`;

    // When players win the game
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Correct Number ! 🎊 `;
    document.querySelector('body').style.backgroundColor = '#60b347'; // use the style to specify the CSS property
    document.querySelector('.number').style.width = '30rem'; // value has to be a string
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the guess is too high and condition 1
  } else if (guess > secretNumber) {
    // coniditon 2
    if (score > 1) {
      document.querySelector('.message').textContent = `Too High! `; // response 1
      score--; // response 2
      document.querySelector('.score').textContent = score; // make it become to the code here
    } else {
      document.querySelector('.message').textContent = `You lose the game `;
      document.querySelector('.score').textContent = 0;
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too Low! `;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lose the game `;
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
