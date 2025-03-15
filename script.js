
let humanScore=0;
let computerScore=0;
let round = 1;

function playGame(round){
    
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
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice,computerChoice){
        if (humanChoice===computerChoice){
            console.log("It's a tie!");
        }
        else{
            if (humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="scissors" && computerChoice==="paper" || humanChoice==="paper" && computerChoice==="rock"){
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            }
            else{
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            }
        }
        return 0;
    }

    if (round<=5) {
        console.log("Round: " + round);
        getComputerChoice();
        getHumanChoice();
        playRound(humanSelection,computerSelection);
        console.log("Your score: "+ humanScore);
        console.log("Computer's score: " + computerScore);
        playGame(round+1);
        round++;
    }
}

console.log(playGame(round));