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
      
            console.log(playRound(playerselection.toLowerCase(), computerselection.toLowerCase()));
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
              function playRound(firstLettercap, computerselection) 
        

        if (firstLettercap === computerselection) {
            return tie;
        } else if ((firstLettercap === "Paper" ) && (computerselection === "Rock")) {
            playerWin++;
            return paperBeatrock;
        }else if  ((firstLettercap === "Paper") && (computerselection ===  "Scissors")) {
            computerWin++;
            return scissorsbeatPaperLoss;
        }else if ((firstLettercap === "Rock")   && (computerselection === "Paper")) {
            computerWin++;
            return paperBeatrockLoss;
        }else if ((firstLettercap === "Rock") && (computerselection === "Scissors")) {
            playerWin++;
            return rockBeatScissors;        
        }else if ((firstLettercap === "Scissors") && (computerselection === "Rock")) {
            computerWin++;
            return rockBeatScisorsloss;
        } else if ((firstLettercap === "Scissors") && (computerselection === "Paper")){
            playerWin ++ ;
            return scissorsbeatPaper;
            console.log()
            return scissorsbeatPaper;
        } else  (console.log("Invalid value"));
    
    //function to format /capatilize the input
function capatilize(playerselection) {  
    let allLowercase = playerselection.toLowerCase();
       //console.log(firstLetterCap);
        return allLowercase; 
    
    }



    game();