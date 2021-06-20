let min = 1,
    max = 10;

const guess = document.querySelector('#guess-input'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function() {
    guessValue = parseInt(guess.value);
    console.log(guessValue);
});


