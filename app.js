    function computerplay () {
        let rock = "Rock";
        let paper = "Paper";
        let scissors = "Scissors";
        let getrandomvalue = math.random();
        //console.log(getrandomvalue);
        if (getrandomvalue <= 0.33) {
            //console.log(rock);
            return rock;
        } else if (getrandomvalue <= 0.66) {
            //console.log(paper);
            return paper;
            