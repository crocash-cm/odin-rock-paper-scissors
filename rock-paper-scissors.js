const MAX_ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;
let roundsCount = 0;


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
    
    const resultsDisplay = document.querySelector("#results-display");
    const resultPara = document.querySelector("#result-para");
    
    let winnerFound = false;
    // First item of nested arrays beats second item
    let beaters = [["paper", "rock"], ["rock", "scissors"], ["scissors", "paper"]];
    
    for (let i = 0; i < beaters.length; i++) {
        if (humanChoice == beaters[i][0] && computerChoice == beaters[i][1])
        {
            // If pair is found and computerChoice is beaters[i][1], human wins
            console.log("You win! " + beaters[i][0] + " beats " + beaters[i][1]);
            resultPara.textContent = "You win! " + beaters[i][0] + " beats " + beaters[i][1];
            winnerFound = true;
            return "human"
        }
        else if (computerChoice == beaters[i][0] && humanChoice == beaters[i][1]) {
            // Computer wins
            console.log("You lose! " + beaters[i][0] + " beats " + beaters[i][1]);
            resultPara.textContent = "You lose! " + beaters[i][0] + " beats " + beaters[i][1];
            winnerFound = true;
            return "computer"
        }
    }
    // No winner found so prints tie
    if (!winnerFound) {
        resultPara.textContent = "Tie!";
        resultsDisplay.appendChild(resultPara);
        console.log("Tie!");
        return "tie";
    }
}

function removeResult () {
    const resultPara = document.querySelector("#result-para");
    const finalResult = document.querySelector("#final-result")
    if (resultPara != null)
    {
        resultPara.textContent = "";
    }
    if (finalResult != null)
    {
        finalResult.textContent = "";
    }  
}

function resetGame () {
    removeResult();
    humanScore = 0;
    computerScore = 0;
    roundsCount = 0;
    scoreUpdater();
}

function checkResult () {
    const finalResult = document.querySelector("#final-result")
    if (roundsCount >= MAX_ROUNDS) {
        removeResult();
        if (humanScore > computerScore)
        {
            // human wins
            finalResult.textContent = "YOU WIN THE GAME!! Final result: Human " + humanScore + " Computer: " + computerScore;
        }
        else if (computerScore > humanScore)
        {
            //computer wins
            finalResult.textContent = "You've lost the game :( Final result: Computer " + computerScore + " Human: " + humanScore;
        }
        else
        {
            //tie;
            finalResult.textContent = "Nobody wins! It was a tie!";
        }
    }

}


function scoreUpdater () {
    const scorePara = document.querySelector("#score-para");
    scorePara.textContent = "Your Score: " + humanScore + " Computer Score: " + computerScore;
}

function runRound (humanChoice) {
    roundsCount++;
    console.log("runRound->roundsCount: " + roundsCount)
    removeResult();
    let roundResult = playRound(humanChoice, getComputerChoice());
    if (roundResult == "human")
    {
        humanScore++;
    }
    else if (roundResult == "computer")
    {
        computerScore++;
    }
    scoreUpdater();
    checkResult();
    if (roundsCount >= MAX_ROUNDS)
    {
        resetGame();
    }
}

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener("click", () => { runRound("rock");  });
paperBtn.addEventListener("click", () => { runRound("paper");  });
scissorsBtn.addEventListener("click", () => { runRound("scissors"); });




// function playGame(numRounds) {
//     let humanScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < numRounds; i++) {
//         let round = playRound(getHumanChoice(), getComputerChoice());
//         if (round == "human") {
//             humanScore++;
//         }
//         else if (round == "computer") {
//             computerScore++;
//         }

//     }
//     if (humanScore > computerScore) {
//         console.log("You scored: " + humanScore + ". The computer scored: " + computerScore);
//         console.log("You win the game! The human has bested the machine!");
//     }
//     else if (computerScore > humanScore) {
//         console.log("The computer scored: " + computerScore + ". You scored: " + humanScore);
//         console.log("You lose! The machine is mightier than the human!");
//     }
//     else {
//         console.log("The game was a tie!")
//     }

//}