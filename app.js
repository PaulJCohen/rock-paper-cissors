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