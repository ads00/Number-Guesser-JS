let min = 1,
    max = 10,
    tries = 3;

const guess = document.querySelector('#guess-input'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');

// let answer = Math.floor((Math.random() * (max - 1)) + min);
let answer = 4;

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', playGame);

function playGame() {
    if(tries === 0 || message.style.color === 'green') {
        resetGame();
    } else {
        guessValue = parseInt(guess.value);

        if(isNaN(guessValue) || guess < min || guess > max) {
            message.textContent = `Please enter a number between ${min} and ${max}`;
            message.style.color = 'red';
        } else {
            if(guessValue === answer) {
                message.textContent = `${answer} is correct! Do you want to play again?`;
                message.style.color = 'green';
                guessBtn.value='Play Again';
                guess.disabled = true;
                guess.style.borderColor = 'green';
                guess.style.color = 'green';
            } else {
                tries--;
                
                if(tries === 0) {
                    guessBtn.value='Play Again';
                    guess.disabled = true;
                    guess.style.borderColor = 'red';
                    message.textContent = `No more tries left! The answer is ${answer}. Want to play again?`;
                } else {
                    message.textContent = `Wrong! You have ${tries} tries left!`;
                    message.style.color = 'red';
                    guess.value = '';
                }
            }
        }
    }
}

function resetGame() {
    guessBtn.value = 'Submit';
    message.textContent = '';
    message.style.color = 'black';
    tries = 3;
    guess.value = '';
    guess.disabled = false;
}


