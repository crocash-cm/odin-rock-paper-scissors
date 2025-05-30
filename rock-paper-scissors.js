function getComputerChoice() {
    let ranNum = Math.random();
    if (ranNum < 0.333) {
        return "rock";
    }
    else if (ranNum >= 0.333 && ranNum < 0.666) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    let winnerFound = false;
    // First item of nested arrays beats second item
    let beaters = [["paper", "rock"], ["rock", "scissors"], ["scissors", "paper"]];
    // Iterate over beaters
    for (let i = 0; i < beaters.length; i++) {
        if (humanChoice == beaters[i][0] && computerChoice == beaters[i][1])
        {
            // If pair is found and computerChoice is beaters[i][1], humanChoice wins
            console.log("You win! " + beaters[i][0] + " beats " + beaters[i][1]);
            winnerFound = true;
            return "human"
        }
        else if (computerChoice == beaters[i][0] && humanChoice == beaters[i][1]) {
            // Human wins
            console.log("You lose! " + beaters[i][0] + " beats " + beaters[i][1]);
            winnerFound = true;
            return "computer"
        }
    }
    // No winner found so prints tie
    if (!winnerFound) {
        console.log("Tie!");
        return "tie";
    }
    
}


function playGame(numRounds) {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < numRounds; i++) {
        let round = playRound(getHumanChoice(), getComputerChoice());
        if (round == "human") {
            humanScore++;
        }
        else if (round == "computer") {
            computerScore++;
        }

    }
    if (humanScore > computerScore) {
        console.log("You scored: " + humanScore + ". The computer scored: " + computerScore);
        console.log("You win the game! The human has bested the machine!");
    }
    else if (computerScore > humanScore) {
        console.log("The computer scored: " + computerScore + ". You scored: " + humanScore);
        console.log("You lose! The machine is mightier than the human!");
    }
    else {
        console.log("The game was a tie!")
    }

}    

playGame(5);
