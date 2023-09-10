    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    function computerplay () {
        let rock = "Rock";
        let paper = "Paper";
        let scissors = "Scissors";
        let getRandomValue = Math.random();
        //console.log(getrandomvalue);
        if (getRandomValue <= 0.33) {
            //console.log(rock);
            return rock;
        } else if (getRandomValue <= 0.66) {
            //console.log(paper);
            return paper;
        }else {
            //console.log(siccors);
            return scissors;
        }
    }

    function game() {
       
        let gameWinner = "";

        while (roundsPlayed < 5) {
            roundsPlayed++;
            const computerselection = computerplay();
           let playerselection = prompt("player, please type in your selections (Rock, Paper, or Scissors)!")
      
            console.log(playRound(capatilize(playerselection), computerselection));
            //comole.log(roundsPlayed);
            console.log("Player Win totals " + playerWin);
            console.log("computer win totals " + computerWin);
            }  
          }
    
            
    function playRound(firstLettercap, computerselection) {
        let tie = "It's a Tie! you selected " + firstLettercap + " and the computer selected " + computerselection + ".";
        let paperBeatrock = "you Win! you selected " + firstLettercap + " and the computer selected " + computerselection + ".";
        let scissorsBearockLoss = "You lose!  you selected " + firstLettercap + " and the computer selected " + computerselection + ".";
        let paperBeatrockLoss = "You lose!  you selected " + firstLettercap + " and the computer selected " + computerselection + ".";
        let rockBeatScisors = "you Win! you selected " + firstLettercap + " and the computer selected " + computerselection + ".";
        let rockScissorsloss = "You lose!  you selected " + firstLettercap + " and the computer selected " + computerselection + ".";
        let scissorsbeatPaper = "you Win! you selected " + firstLettercap + " and the computer selected " + computerselection + "."; 


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
        } else  (console.log("Invalid value"));
    


    if (playerWin > computerWin) {
  gameWinner = "Your a Top G!";
} else if (playerWin === computerWin) {
  gameWinner = "TIE!";
     } else {
    gameWinner = "computer  Wins!";
  }
  console.log("The Five game Winner is: " + gameWinner);
    }
    



    //function to format /capatilize the input
function capatilize(playerselection) {  
    let allLowercase = playerselection.toLowerCase();
       //console.log(firstLetterCap);
        return allLowercase; 
    
    }



    game();