
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

    function getWinner(){
        if (humanScore===5 || computerScore===5){
            if (humanScore>computerScore){
                computerScore =0;
                humanScore=0;
                result = alert("YOU win the game!\nREFRESH for the NEW GAME")
                return result;
            }else{
                computerScore =0;
                humanScore=0;
                result = alert("COMPUTER win the game!\nREFRESH for the NEW GAME")
                return result;
                }
        
        }else if(humanScore<5 || computerScore<5){
            return '';
        }
    }

    btns.forEach (btn=>{
        btn.addEventListener("click",(e) => {
        const humanSelection = e.target.id;
        const computerSelection = getComputerChoice();
        const roundPlay = playRound(humanSelection, computerSelection);
        const para = document.createElement("p");
        container.appendChild(para);

        let resultText = `You chose: ${humanSelection.charAt(0).toUpperCase()+humanSelection.slice(1)} 
                            Computer chose: ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)}<br>`;
        resultText += `${roundPlay}<br>`;
        resultText += `Your score: ${humanScore} Computer Score: ${computerScore}<br>`;
        resultText += getWinner();

        para.innerHTML = resultText;
    });
    });

    
}

playGame();