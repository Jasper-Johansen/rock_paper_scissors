function getComputerChoice(){
    let number = Math.floor(Math.random()*3)+1;
    let computerChoice;
    if (number===1){
        computerChoice = "rock"

    }

    else if (number===2){
        computerChoice = "paper";
    }

    else{
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: Rock, Paper or Sciccors: ").toLowerCase();
    return humanChoice;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){

    if (humanChoice===computerChoice){
        return "It's a tie!";
    }
    else{
        if (humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="scissors" && computerChoice==="paper" || humanChoice==="paper" && computerChoice==="rock"){
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }
        else{
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let round = playRound(humanSelection,computerSelection);

function playGame(playRound){
    for (let i = 0; i < 5; i++) {
        
}