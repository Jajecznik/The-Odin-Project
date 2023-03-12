const playAgain = document.querySelector('.play-again');
const btns = document.querySelectorAll('.button');

const result0 = document.querySelector('.result0');
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');

window.addEventListener("DOMContentLoaded", game);

// playing full game (5 rounds), gives alert who won
function game() {
    playAgain.classList.add('hidden');

    let playerCounter = 0;
    let computerCounter = 0;
    let result = [0, 0, ""];

    result0.innerText = playerCounter.toString();
    result1.innerText = computerCounter.toString();
    result2.innerText = result[2];

    buttons = Array.from(btns)
 
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (computerCounter < 5 && playerCounter < 5) {
                const computerSelection = getComputerChoice();

                // result[0] - player points, result[1] - computer points, result[2] - proper text
                result = playRound(computerSelection, btn.innerText);
                playerCounter += result[0];
                computerCounter += result[1];

                result0.innerText = playerCounter.toString();
                result1.innerText = computerCounter.toString();
                result2.innerText = result[2];
            }
            
            if (computerCounter == 5 || playerCounter == 5) {
                if (playerCounter > computerCounter) {
                    result2.innerText = "You WON!";
                }
                else {
                    result2.innerText = "You LOST!";
                }

                playAgain.classList.remove('hidden');
            }  
        })
    });
}

// getting computer choice, returns rock, paper or scissors
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        return "rock";
    } 
    else if (number === 1) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}

// one round of the game, returns array with result of the game and proper text
function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            return [0, 0, "DRAW! You both used a Rock!"];
        }
        else if (playerSelection === "paper") {
            return [1, 0, "You Win! Paper beats Rock!"];
        }
        else {
            return [0, 1, "You Lose! Rock beats Scissors!"];
        }
    }

    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return [0, 1, "You Lose! Paper beats Rock!"];
        }
        else if (playerSelection === "paper") {
            return [0, 0, "DRAW! You both used a Paper!"];
        }
        else {
            return [1, 0, "You Win! Scissors beats Paper!"];
        }
    }

    else if (playerSelection === "rock") {
        return [1, 0, "You Win! Rock beats Scissors!"];
    }
    else if (playerSelection === "paper") {
        return [0, 1, "You Lose! Scissors beats Paper!"];
    }
    else {
        return [0, 0, "DRAW! You both used a Scissors!"];
    }
}
