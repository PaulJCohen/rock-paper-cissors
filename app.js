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
    let tie = "It's a Tie! You selected " + playerSelection + " and the computerselection";
    let paperBeatRock = "You Win! you selected " + playerSelection + " and the computerselection";
    let scissorsBeatPaperLoss = "You lose! You selected " +playerSelection + " and the computerselection";
    let paperBeatRockLoss = "You lose! You selected " + playerSelection + "and the computerselection";
    let rockBeatScissors = "You Win! You selected " + playerSelection + "and the computerselection";
    let rockBeatScissorsLoss = "You lose! You selected " +playerSelection + "and the computerselection";
    let scissorsBeatPaper = "You Win! You selected " + playerSelection + " and the computerselection";

    if (playerSelection === computerSelection)}
        return tie;