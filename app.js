    //computer play that is randomly generated
    function computerPlay() {
    }
        
        function game(){
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
                playerSelection = buttons.className;
                const computerSelection = computerPlay();
                battleWinText.textContent = (playRound(playerSelection,computerSelection));
                playWinText.textContent = "Player Win totals: " + playerWin;
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
 

            if (playerSelection === computerSelection){
                return tie;
            } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
               computerWin++;
               return paperBeatRock; 
            } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")){
            computerWin++;
            return scissorsBeatPaperLoss;
            } else if  ((playerSelection === "Rock") && ( computerSelection === "Paper")){
                computerWin++;
                return paperBeatRockLoss;
            } else if  ((playerSelection === "Rock") && (computerSelection === "Scissors")){
                playerWin++;
                return rockBeatScissors;
            } else if  ((playerSelection === "Scissors") && (computerSelection === "Rock")){
                computerWin++;
                return rockBeatScissorsLoss;
            } else {
                playerWin++;
     }


     // Creat a div Dom for all results
      const container = document.querySelector("#container");
      const resultsDiv = document.createElement("div");
      resultsDiv.style.marginTop = "20px";
      container.appendChild(resultsDiv);

      // creat a player win trcking Dom
      const playerWinText = document.createElement("p");
      playerWinText.style.color = "blue";
      computerWinText.textContent = "Computer Win totals: " + computerWin;
      resultsDiv.appendChild(computerWinText);

      // create computer win tracking Dom
      const computerWinText = document.createElement("p");
      computerWinText.style.color = "blue";
      computerWinText.textContent = "Computer Win totals: " + computerWin;
      resultsDiv.appendChild(computerWinText);

      // creat  battle win text Dom 
     const battleWinText = document.createElement("p");
     battleWinText.style.color = "black";
     resultsDiv.appendChild(battleWinText);

     // creat game win text DOM
     const gameWinText = document.createElement("p");
     gameWinText.style.color = "orange";
     gameWinText.textContent = gameWinner;
     resultsDiv.appendChild(gameWinText);

     // who won the five points first 
     function endGame() {
        if (playerWin == 5) {
            gameWinText.textContent = gameWinner;


            // disabled game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;

            // create new Dom button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

            // if  clicked reload page 
            playAgainButton.addEventListener('click', () => {
                location.reload();
            })
        } else if  (computerWin == 5){
            gameWinner = "COMPUTER WINS!";
            gameWinText.textContent = gameWinner;

            // disabled game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;

            //Dom button replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

            // if clicked, reload page
            playAgainButton.addEventListener('click',() =>{
                location.reload();
                 })
        }
            }
        }
     }
 game();
        