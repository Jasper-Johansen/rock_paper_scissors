
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

    if (round<=5) {
        console.log("Round: " + round);   
        console.log(playRound(humanSelection,computerSelection));
        console.log("Your score: "+ humanScore);
        console.log("Computer's score: " + computerScore);

        playGame(round+1);
    }else{
        console.log("Final score: You: " + humanScore + " Computer: " + computerScore);
        if (humanScore>computerScore){
            console.log("You win the game!");
        }else if (humanScore===computerScore){
            console.log("It's a tie!");
        }else{
            console.log("Computer won the game!");
        }
        console.log("Refresh the browser for NEW GAME!")
    }
    return;
}

playGame(round);