console.log("Its Working");

const choices = ['rock', 'paper', 'scissor'];
const numOfChoices = choices.length;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * numOfChoices);
    return choices[choice];
}

function getHumanChoice(question = "Enter 'rock', 'paper' or 'scissor'") {
    let choice = prompt(question).toLowerCase();
    if (choices.includes(choice)) {
        return choice;
    }
    else {
        choice = getHumanChoice("Wrong input, check for spelling mistakes and enter again");
        return choice;
    }
}



function playGame() {
    console.log(`GAME HAS STARTED!`)
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log("You lose!, Paper beats rock");
            computerScore++;
        }
        else if (humanChoice === 'paper' && computerChoice === 'scissor') {
            console.log("You lose!, Scissor beats Paper");
            computerScore++;
        }
        else if (humanChoice === 'scissor' && computerChoice === 'rock') {
            console.log("You lose!, Rock beats Scissor");
            computerScore++;
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("You Win!, Paper beats Rock");
            humanScore++;
        }
        else if (humanChoice === 'scissor' && computerChoice === 'paper') {
            console.log("You win!, Scissor beats Paper");
            humanScore++;
        }
        else if (humanChoice === 'rock' && computerChoice === 'scissor') {
            console.log("You win!, Rock beats Scissor");
            humanScore++;
        }
        else{
            console.log(`Its a TIE!`)
        }
    }

    for(let i=0;i<5;i++){
        
        playRound(getHumanChoice(),getComputerChoice());
    }
    if(humanScore > computerScore){
        console.log(`GAME OVER!! YOU wON!`);
    }
    else if(humanScore < computerScore){
        console.log(`GAME OVER! YOU lOSE`)
    }
    else{
        console.log(`IT'S A TIE!`)
    }
}

playGame();