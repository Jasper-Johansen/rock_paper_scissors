
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
                return `You win! ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} 
                        beats ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}`; 
                        //First char of humanChoice is converted to Uppercase and
                        //slice(1) is used to get the rest of the string
            }
            else{
                computerScore++;
                return `You lose! ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} 
                        beats ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)}`; 
            }
        }
    }

    
    let btns = document.querySelectorAll("button");
    let container = document.querySelector(".display");

    btns.forEach (btn=>{
        btn.addEventListener("click",(e) => {
        const humanSelection = e.target.id;
        const computerSelection = getComputerChoice();
        const roundPlay = playRound(humanSelection, computerSelection);
        const para = document.createElement("p");
        container.appendChild(para);

        para.innerHTML = `You chose: ${humanSelection.charAt(0).toUpperCase()+humanSelection.slice(1)} 
                            Computer chose: ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)}==>`;
        para.innerHTML += `${roundPlay}<br>`;
        para.innerHTML += `Your Score: ${humanScore} Computer Score: ${computerScore}<br>`;

        if (humanScore===5 || computerScore===5){
            para.innerHTML += `============GAME OVER!============<br>`
            if (humanScore>computerScore){
                para.innerHTML += `You win the game. Congrats!<br>`;
            }else{
                para.innerHTML += `Computer win the game.!<br>`;
                }
            para.innerHTML += `<br><br>==========START NEW GAME=========<br>`
            computerScore = 0;
            humanScore = 0;
        }    
    });
    });

}

playGame();