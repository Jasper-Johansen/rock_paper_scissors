
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

    const computerSelection = getComputerChoice();
    
    let btns = document.querySelectorAll("button");
    let container = document.querySelector(".display");

    btns.forEach (btn=>{
        btn.addEventListener("click",(e) => {
        const humanSelection = e.target.id;
        container.textContent = `You chose ${humanSelection}
        Computer chose ${computerSelection}`;
        container.textContent += playRound(humanSelection,computerSelection);
        });
    });

    
}

playGame(round);