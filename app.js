    function computerplay () {
        const rock = "Rock";
        const paper = "Paper";
        const scissors = "Scissors";
        let getrandomvalue = math.random();
        //console.log(getrandomvalue);
        if (getrandomvalue <= 0.33) {
            //console.log(rock);
            return rock;
        } else if (getrandomvalue <= 0.66) {
            //console.log(paper);
            return paper;
        }else {
            //console.log(siccors);
            return scissors;
        }
    }

    function playround(firstlettercap, computerselection) {
        let tie = "It's a Tie! you selected " + firstlettercap + " and the computer selected " + computerselection + ".";
        let paperBeatrock = "you Win! you selected " + firstlettercap + " and the computer selected "