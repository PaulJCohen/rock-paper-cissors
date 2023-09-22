    //computer play that is randomly generated
    function computerPlay() {
        let rock = "Rock";
        let paper = "Paper";
        let scissors = "Scissors";
        let getRandomValue = Math.random();
        if (getRandomValue <= 0.33) {
            return rock;
        }else if (getRandomValue <= 0.66) {
            return paper;
        } else {
            return scissors;
        }
    }


    function game(){
        let playWin = 0;
        let computerWin = 0;
        let gameWinner = "";


        const buttons = document.querySelectorAll('button');
        buttons.forEach((buttons) => {
            buttons.addEventListener('click',  () => {
                playerSelection = button.className;
                const computerSelection = computerPlay();
                battleWinText.textContent = (playRound(playerSelection,computerSelection));
                playWinText.textContent = "Player Win totals: " +playerWin;
                computerWinText.textContent = "computer Win totals: " + computerWin;
                endGame();
            })
        })

        function playRound(playerSelection, computerSelection) {
            let tie = "It's a Tie! You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let paperBeatRock = "You Win! You selected " + playerSelection + "and the computer selected " + computerSelection + ".";
            let scissorsBeatPaperLoss = "You lose! You selected " + playerSelection + "and the computer selected " + computerSelection + ".";
            let paperBeatRockLoss = "You lose! You seleted " + playerSelection + "and the computer selected " + computerSelection + ".";
            let rockBeatScissors = "You Win! You selected " + playerSelection + "and the computer selected " + computerSelection + ".";
            let rockBeatScissorsLoss = "You Win! You selected " + playerSelection + "and the computer selected " + computerSelection + ".";
            let scissorsBeatPaper = "You WiN! You selected " + playerSelection + "and the computer selected " + computerSelection + ".";
            
        }
    
