
let humanScore=0;
let computerScore=0;
let round = 1;

function playGame(){
    
    

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

    
    let btns = document.querySelectorAll("button");
    let container = document.querySelector(".display");

    function getWinner(){
        if (humanScore===5 || computerScore===5){
            if (humanScore>computerScore){
                computerScore =0;
                humanScore=0;
                return "You win the game!";
            }else{
                computerScore =0;
                humanScore=0;
                return "Computer wins the game!";
                }
        
        }else if(humanScore<5 || computerScore<5){
            return '';
        }
    }

    btns.forEach (btn=>{
        btn.addEventListener("click",(e) => {
        const humanSelection = e.target.id;
        const computerSelection = getComputerChoice();
        container.textContent = `You chose ${humanSelection}
        Computer chose ${computerSelection}`;
        container.textContent += playRound(humanSelection,computerSelection);
        container.textContent += `Your score: ${humanScore} Computer Score: ${computerScore}`;
        container.textContent += getWinner();
    });
    });

    
}

playGame();