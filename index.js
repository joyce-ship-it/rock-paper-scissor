console.log("Its Working");

const choices = ['rock', 'paper', 'scissor'];
const numOfChoices = choices.length;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * numOfChoices);
    return choices[choice];
}

// function getHumanChoice(question = "Enter 'rock', 'paper' or 'scissor'") {
//     let choice = prompt(question).toLowerCase();
//     if (choices.includes(choice)) {
//         return choice;
//     }
//     else {
//         choice = getHumanChoice("Wrong input, check for spelling mistakes and enter again");
//         return choice;
//     }
// }

const container = document.querySelector('.container');
let scoreboard = document.querySelector('#scoreboard');



function playGame() {
    console.log(`GAME HAS STARTED!`)
    let humanScore = 0;
    let computerScore = 0;
    let result = document.createElement('h4');
    container.appendChild(result);
    const FinalResult = document.createElement('h3');

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log("You lose!, Paper beats rock");
            computerScore++;
            return "You lose!, Paper beats rock";
        }
        else if (humanChoice === 'paper' && computerChoice === 'scissor') {
            console.log("You lose!, Scissor beats Paper");
            computerScore++;
            return "You lose!, Scissor beats Paper";
        }
        else if (humanChoice === 'scissor' && computerChoice === 'rock') {
            console.log("You lose!, Rock beats Scissor");
            computerScore++;
            return "You lose!, Rock beats Scissor";
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("You Win!, Paper beats Rock");
            humanScore++;
            return "You Win!, Paper beats Rock";
        }
        else if (humanChoice === 'scissor' && computerChoice === 'paper') {
            console.log("You win!, Scissor beats Paper");
            humanScore++;
            return "You win!, Scissor beats Paper";
        }
        else if (humanChoice === 'rock' && computerChoice === 'scissor') {
            console.log("You win!, Rock beats Scissor");
            humanScore++;
            return "You win!, Rock beats Scissor";
        }
        else {
            console.log(`Its a TIE!`)
            return `Its a TIE!`;
        }
    }
    // Event Listener
    container.addEventListener('click', (e) => {
        const humanChoice = e.target.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        result.textContent = playRound(humanChoice, computerChoice);
        scoreboard.textContent = `You: ${humanScore} || Computer: ${computerScore}`
        if ((humanScore > computerScore) && humanScore === 5) {
            FinalResult.textContent = `GAME OVER!! YOU WON!`;
            FinalResult.style.color = 'chartreuse';
            FinalResult.style.fontFamily = 'Helvetica';
            container.appendChild(FinalResult);

        }
        else if ((humanScore < computerScore) && computerScore === 5) {
            FinalResult.textContent = `GAME OVER! YOU LOSE`;
            FinalResult.style.color = 'red';
            FinalResult.style.fontFamily = 'Helvetica';
            container.appendChild(FinalResult);
        }
    })



}

playGame();