let playerWin = 0;
let computerWin = 0;

function computerplay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIdex = Math.floor(Math.random() * 3);
    return choices[randomIdex];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection) {
        return {message: "It's a tie!", color: "black"};
    } else if (
        
    )
}