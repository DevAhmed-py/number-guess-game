let computerGuess
const guesses = []

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1)
    console.log(computerGuess)
    document.getElementById("gameArea").style.display = "none"
    document.getElementById("newGameButton").style.display = "none"
}

function startGame() {
    document.getElementById("gameArea").style.display = "block"
    document.getElementById("welcomeScreen").style.display = "none"
}

function easyMode() {
    startGame()
}

function hardMode() {
    startGame()
}

function compareGuess() {
    const userGuess = Number(document.getElementById("inputBox").value)
    guesses.push(" " + userGuess)
    document.getElementById("previousGuesses").innerHTML = guesses

    if (userGuess > computerGuess) {
        document.getElementById("textOutput").innerHTML = "Your guess is too high"
        document.getElementById("inputBox").value = ""

    } else if (userGuess < computerGuess) {
        document.getElementById("textOutput").innerHTML = "Your guess is too low"
        document.getElementById("inputBox").value = ""

    } else {
        document.getElementById("textOutput").innerHTML = "Correct!"
    }
}