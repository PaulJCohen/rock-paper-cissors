    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    function computerplay () {
        let getRandomValue = Math.random();
        //console.log(getrandomvalue);
        if (getRandomValue <= 0.33) {
            //console.log(rock);
            return "Rock";
        } else if (getRandomValue <= 0.66) {
            //console.log(paper);
            return "paper";
        }else {
            //console.log(siccors);
            return "Scissors";
        }
    }

    function game() {
       
        let gameWinner = "";

        while (roundsPlayed < 5) {
            roundsPlayed++;
            const computerselection = computerplay();
           let playerselection = prompt("player, please type in your selections (Rock, Paper, or Scissors)!")
      
           playRound(playerselection.toLowerCase(), computerselection.toLowerCase());
            console.log("Player Win totals " + playerWin);
            console.log("computer win totals " + computerWin);
            }  
            if (playerWin > computerWin) {
                gameWinner = "Your a Top G!";
              } else if (playerWin === computerWin) {
                gameWinner = "TIE!";
                   } else {
                  gameWinner = "computer  Wins!";
                }
                console.log("The Five game Winner is: " + gameWinner);
                  }                
              function playRound(firstLettercap, computerselection) {
            let tie = "It's a Tie! you selected " + firstLettercap + " and the computer selected " + computerselection + ".";
            if (firstLettercap == computerselection) {
           console.log(tie);
            
            }else if ((firstLettercap === "paper") && (computerselection === "rock") ||
            (firstLettercap === "rock") && (computerselection === "scissors") ||
            (firstLettercap === "scissors") && (computerselection === "paper")) {
                playerWin++;
                 console.log (`You win! you selected ${firstlettercap} and the computer selected ${computerselection}.`);

            } else if ((firstLettercap === "paper") && (computerselection === "scissors") ||
            (firstLettercap === "scissors") && (computerselection === "rock") ||
            (firstLettercap === "rock")  && (computerselection === "paper")) {
                computerWin++ 
                 console.log(`you lose ! you selected ${firstLettercap}and the computer selected${computerselection}.;`) 
            }

        }

    game();