function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 0) 
        return "rock";
    else if (computerChoice == 1)
        return "paper";
    else if (computerChoice == 2)
        return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");

    return humanChoice;
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    function playRound() {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
    
        if (humanSelection === computerSelection)
            return "it's a tie";
        else if (humanSelection == 'rock' && computerSelection == 'paper') {
            computerScore += 1;
            return 'computer wins!';
        }
        else if (humanSelection == 'rock' && computerSelection == 'scissors') {
            humanScore += 1;
            return 'human wins!';
        }
        else if (humanSelection == 'paper' && computerSelection == 'rock') {
            humanScore += 1;
            return 'human wins!';
        }
        else if (humanSelection == 'paper' && computerSelection == 'scissors') {
            computerScore + 1;
            return 'computer wins!';
        }
    
        else if (humanSelection == 'scissors' && computerSelection == 'rock') {
            computerScore + 1;
            return 'computer wins!';
        }
    
        else if (humanSelection == 'scissors' && computerSelection == 'paper') {
            humanScore + 1;
            return 'human wins!';
        }
    }

    let round = 1;

    while (round < 6) {
        let result = playRound();
        console.log(result);
        round += 1;
    }

    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
}

playGame()