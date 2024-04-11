function getRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

function getComputerChoice() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    let choice = getRandomNumber(3);

    return computerChoices[choice];
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection == 'rock' && computerSelection == 'rock'){
        return 0;
    }
    else if(playerSelection =='rock' && computerSelection == 'paper'){
        return -1;
    }
    else if (playerSelection =='rock' && computerSelection == 'scissors'){
        return 1;
    }
    if(playerSelection == 'paper' && computerSelection == 'paper'){
        return 0;
    }
    else if(playerSelection =='paper' && computerSelection == 'scissors'){
        return -1;
    }
    else if (playerSelection =='paper' && computerSelection == 'rock'){
        return 1;
    }
    if(playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 0;
    }
    else if(playerSelection =='scissors' && computerSelection == 'rock'){
        return -1;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return 1;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt('What do you want to play (rock, paper or scissors)? ');
        let computerSelection = getComputerChoice();        
        let gameResult = playRound(playerSelection, computerSelection);
        
        if (gameResult == 1) {
            ++playerScore;
        }
        else if (gameResult == 0) {
            ++computerScore;
            ++playerScore;
        }
        else
            ++computerScore;
    }

    console.log('Your score: ' + playerScore);
    console.log('Computerr score: ' + computerScore);
    if(playerScore > computerScore)
        console.log('After 5 game rounds, you win!');
    else if(playerScore == computerScore)
        console.log('After 5 game rounds, you tied with the computer!');
    else
        console.log('After 5 game rounds, you lose!');
}

playGame()

/*
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/