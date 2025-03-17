
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

<<<<<<< HEAD
    const computerSelection = getComputerChoice();
    
    let btns = document.querySelectorAll("button");
    btns.forEach (btn=>{
        btn.addEventListener("click",(e) => {
        const humanSelection = e.target.id;
        console.log(humanSelection);
        console.log(computerSelection)
        console.log(playRound(humanSelection,computerSelection));
        });
    });

=======
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 
>>>>>>> 9248424c02cc42fce5c405107e075c13fc329807
    
}

playGame(round);