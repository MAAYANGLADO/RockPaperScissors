function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputerChoice(){
    // pair rock with a number
    // let rock = 0;
    // pair scissors with a number
    // let scissors = 1;
    // pair paper with a number
    // let paper = 2;
    // choose a random number between 0 and 2(inclusive)
    // fot each of the numbers, we will return a different string:
    
    let move = getRndInteger(0, 2) ;
    switch(move){
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){// tie
        console.log("This is a tie!");
        return 0;    
    }else if(playerSelection === "rock" && computerSelection === "paper"){//loss 1
        console.log("You lose! Paper beats Rock");
        return 0;
    }else if(playerSelection === "paper" && computerSelection === "scissors"){//loss 2
        console.log("You lose! Scissors beats Paper");
        return 0;
    }else if(playerSelection === "scissors" && computerSelection === "rock"){//loss 3
        console.log("You lose! Rock beats Scissors");
        return 0;
    }else{// win
        console.log("You win!");
        return 1;
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    if(playRound(playerSelection, computerSelection) === 0){
        computerScore ++;
    }else{
        playerScore ++;
    }
    console.log(playerScore);
    console.log(computerScore);
        for(let i=0;i<4;i++){
            playerSelection = prompt("Enter your next move: Rock, Paper or Scissors!");
            computerSelection = getComputerChoice();
            if(playRound(playerSelection, computerSelection) === 0){
                computerScore ++;
            }else{
                playerScore ++;
            }
            console.log(playerScore);
            console.log(computerScore);
        }
    if(playerScore > computerScore){
        return "You won the game!";
    }else{
        return "You lost the game!";
    }
}

let playerSelection = prompt("Enter your next move: Rock, Paper or Scissors!");
let computerSelection = getComputerChoice();
console.log(game());