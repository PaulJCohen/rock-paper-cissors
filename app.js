    function computerplay () {
        const rock = "Rock";
        const paper = "Paper";
        const scissors = "Scissors";
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
        let roundPlayed = 0;
        let playerWin =0;
        let computerWin = 0;
        let gameWinner = "";

        while (roundPlayed < 5) {
            roundPlayed++;
            const computerselection = computerplay();
            playerselection = prompt("player, please type in your selections (Rock, Paper or scissors)!")
            console.log(playRound(capatilize(playerselection), computerselection));
            //comole.log(roundsPlayed);
            console.log("Player Win totals " + playerWin);
            console.log("computer win totals " computerWin);
            
            
    function playRound(firstlettercap, computerselection) {
        let tie = "It's a Tie! you selected " + firstlettercap + " and the computer selected " + computerselection + ".";
        let paperBeatrock = "you Win! you selected " + firstlettercap + " and the computer selected " + computerselection + ".";
        let scissorsBearockLoss = "You lose!  you selected " + firstlettercap + " and the computer selected " + computerselection + ".";
        let paperBeatrockLoss = "You lose!  you selected " + firstlettercap + " and the computer selected " + computerselection + ".";
        let rockBeatScisors = "you Win! you selected " + firstlettercap + " and the computer selected " + computerselection + ".";
        let rockScissorsloss = "You lose!  you selected " + firstlettercap + " and the computer selected " + computerselection + ".";
        let scissorsbeatPaper = "you Win! you selected " + firstlettercap + " and the computer selected " + computerselection + "."; 


        if (firstlettercap === computerselection) {
            return tie;
        } else if ((firstlettercap === "Paper" ) && (computerselection === "Rock")) {
            return paperBeatrock;
        }else if  ((firstlettercap === "Paper") && (computerselection ===  "scissors")) {
            return scissorsbeatPaperLoss;
        }else if ((firstlettercap === "rock")   && (computerselection === "Paper")) {
            return paperBeatrockLoss;
        }else if ((firstlettercap === "rock") && (computerselection === "scissors")) {
            return rockBeatScisors;        
        }else if ((firstlettercap === "scissors") && (computerselection === "rock")) {
            return rockBeatScisorsloss;
        } else {
            return scissorsbeatPaper;
        }
    }

    //function to format /capatilize the input
function capatilize(playerselection) {  
    let allLowercase = playerselection.toLowerCase();
       let firstlettercap = allLowercase.charAt (0).toLowerCase();
       //console.log(firstLetterCap);
        return firstlettercap; 
    }

    const playerselection = "rock";
    const computerselection = computerplay();
    console.log(playRound(capatilize(playerselection), computerselection));
    