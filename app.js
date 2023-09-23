let playerWin = 0;
let computerWin = 0;

function computerplay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIdex = Math.floor(Math.random() * 3);
    return choices[randomIdex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return {message: "It's a tie!", color: "black"};
    } else if (   
        (playerSelection === "Rock" && computerSelection === "Scissors")||
        (playerSelection === "Paper" && computerSelection === "Rock")||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playWin++;
        return {message: "You win this round!", color: "blue" };
    } else {
        computerWin++;
        return { message: "You lose this round!", color: "red" };
    }
}

function checkWinner() {
    if (playWin == 5) {
        return "Player, you won! Scum bag!";
    }else if ( computerWin === 5 ) {
        return "Computer wins! Better luck next time Dick face.";
    }
    return null;
}

document.addEventListener("DOMContentLoaded",() => {
    const buttons = document.querySelectorAll("button");
    const resulDiv = document.querySelector("#container");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {}
    }
}
