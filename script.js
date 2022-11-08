let computerGuess;
const guesses = [];
let attempts = 0;
let maxGuesses;
let low = 1;
let high = 100;
function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1)
    console.log(computerGuess)
    document.getElementById("gameArea").style.display = "none"
    document.getElementById("newGameButton").style.display = "none"
};

function startGame() {
    document.getElementById("gameArea").style.display = "block"
    document.getElementById("welcomeScreen").style.display = "none"
};

function updateRange() {
    const lowValue = document.getElementById("low")
    lowValue.style.flex = low + '%'
    lowValue.style.background = '#ef7b54'

    const space = document.getElementById("space")
    space.style.flex = high - low + '%'
    space.style.background = '#83e1d0'

    const highValue = document.getElementById("high")
    highValue.style.flex = 100 - high + '%'
    highValue.style.background = '#ef7b54'
}

function easyMode() {
    maxGuesses = 10
    startGame()
};

function hardMode() {
    maxGuesses = 5
    startGame()
};

function compareGuess() {
    const userGuess = Number(document.getElementById("inputBox").value)
    guesses.push(" " + userGuess)
    document.getElementById("previousGuesses").innerHTML = guesses
    attempts ++
    document.getElementById("attempts").innerHTML = attempts

    if (attempts < maxGuesses) {
        if (userGuess > computerGuess) {

            high = userGuess
            document.getElementById("textOutput").innerHTML = "Your guess is too high"
            document.getElementById("inputBox").value = ""
    
        } else if (userGuess < computerGuess) {

            low = userGuess
            document.getElementById("textOutput").innerHTML = "Your guess is too low"
            document.getElementById("inputBox").value = ""
    
        } else {
            document.getElementById("textOutput").innerHTML = `Correct Guess! You got it at ${attempts} attempts`
        gameEnded()
        }
    } else {
        if (userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = `YOU LOSE!, <br> The number is ${computerGuess}`
        gameEnded()
    
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = `YOU LOSE! <br> The number is ${computerGuess}`
        gameEnded()
    
        } else {
            document.getElementById("textOutput").innerHTML = `Correct! You got it at ${attempts} attempts`
        gameEnded()
        }
    }
    updateRange()
}

function gameEnded() {
    document.getElementById("newGameButton").style.display = "inline"
    document.getElementById("inputBox").setAttribute("readonly", "readonly")
}

function newGame() {
    window.location.reload()
}