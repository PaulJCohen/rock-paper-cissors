function computerPlay () {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    if (getRandomValue <= 0.33){
        return rock;
    }else {
        return scissors;
}

function game(){
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button)  => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = computerPlay();
            battleWinText.textContent = (playRound(playerSelection, computerSelection));
            playerWinText.textContent = "Player win totals: " + playerWin;
            computerwinText.textContent = "Computer win totals: " + computerWin;
            endGame();
        })
    })

    function playRound(playerSelection, computerSelection) {
    let tie = "It's a Tie! You selected " + playerSelection + " and the computer selected " + computerSelection + "."; 
    let paperBeatRock = "You Win! you selected " + playerSelection + " and the computer selected " + computerSelection + "."; 
    let scissorsBeatPaperLoss = "You lose! You selected " +playerSelection + " and the computer selected " + computerSelection + "."; 
    let paperBeatRockLoss = "You lose! You selected " + playerSelection + "and the computer selected " + computerSelection + "."; 
    let rockBeatScissors = "You Win! You selected " + playerSelection + "and the computer selected " + computerSelection + "."; 
    let rockBeatScissorsLoss = "You lose! You selected " +playerSelection + "and the computer selected " + computerSelection + "."; 
    let scissorsBeatPaper = "You Win! You selected " + playerSelection + " and the computer selected " + computerSelection + "."; 

    if (playerSelection === computerSelection)}
        return tie;
    }else if ((playerSelection === "paper") && (computerSelection === "Rock")){
        playerWin++;
        return paperBeatRock;
    }else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        computerWin++
        return scissorsBeatPaperLoss;
    }else if ((playerSelection === "Rock") && (computerSelection === "Paper")){
        computerWin++;
        return paperBeatsRockLoss;
    }else if ((playerSelection === "Rock") && (computerSelection === " scissors")){
        playerWin++;
        return rockBeatScissors;
    }else if ((playerSelection == "scissors") && (computerSelection === "Rock")){
        computerWin++;
        return rockBeatScissorsLoss;
    } else {
        playerWin++;
        return scissorsBeatPaper;
    }
}
const container = document.querySelector("#container");
const resultDiv = document.createElement("div");
resultsDiv.style.marginTop = "20px";
container.appendChild(resultDiv);

const playerWinText =document.createElement("p");
playerWinText.style.color = "blue";
playerWinText.textContent = "player Win totals: "  + playerWin;
resultDiv.appendChild(playerWinText);

const computerwinText = Document.createElement("p");
computerwinText.style.color = "blue";
computerwinText.textContent = "computer Win totals:" + computerWin;
resultDiv.appendChild(computerwinText);

const battleWinText = document.createElement("p");
gameWinText.style.color = "black";
gameWinText.textContent = gameWinner;
resultDiv.appendChild(battleWinText);

const gameWinText = document.createElement("p");
gameWinText.style.color = "orange";
gameWinText.textContent = gameWinner;
resultDiv.appendChild(gameWinText);

function endGame(){
    if (playerWin == 5){
        gameWinner = "YOU WIN!";
        gameWinText.textContent = gameWinner;
        
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
    
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again!";
        resultDiv.appendChild(playAgainButton);

        playAgainButton.addEventListener('click',() =>{
        location.reload();
        })
} else if (computerwin == 5) {
        gameWinner = "COMPUTER WINS!";
        gameWinText.textContent = gameWinner;

        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
    //disables the buttons 
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again!";
        resultDiv.appendChild(playAgainButton);

        playAgainButton.addEventListener('click', () => {
           location.reload(); 
            })
        }

    }
game();
