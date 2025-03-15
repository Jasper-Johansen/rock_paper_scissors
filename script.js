function getComputerChoice(){
    let number = Math.floor(Math.random()*3)+1;
    if (number===1){
        computerChoice = "rock"

    }

    else if (number===2){
        computerChoice = "paper";
    }

    else{
        computerChoice = "scissors";
    }

    return `Computer chose ${computerChoice}`;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: Rock, Paper or Sciccors: ");
    return humanChoice;
}

var humanScore=0;
var computerScore=0;

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.tolowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();