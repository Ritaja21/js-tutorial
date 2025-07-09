let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //if the guesses are between 1 to 100
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1 && guess > 100) {
        alert('Guess should be between 1 and 100')
    } else {
        prevGuess.push(guess)
        if (numGuess >= 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //check if the guess is correct or less or high
    if (guess === randomNumber) {
        displayMessage(`Your guess is correct`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is LOW`)
    } else if (guess > randomNumber) {
        displayMessage(`Nummber is HIGH`)
    }
}

function displayGuess(guess) {
    //empty the guess value and add the guessSlot and update the remaining guess
    userInput.value = "";
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    //display the lowOrHi message 
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start new Game</button>`
    startOver.appendChild(p);
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML = ''
        playGame = true;
    })
}