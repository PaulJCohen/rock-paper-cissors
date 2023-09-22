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
                
            }
        }
    }
