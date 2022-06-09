function computerPlay(max) {
    const result = Math.floor(Math.random() * max);

    if (result == 0) {
         let result = "rock";
        console.log("Computer chose rock");
        return result;
    } else if (result == 1) {
        let result = "paper";
        console.log("Computer chose paper");
        return result;
    } else {
        let result = "scissors";
        console.log("Computer chose scissors");
        return result;
    }

} 
//gets a random choice for the computer

function playerSelection() {
    let playerChoice = prompt("Lets play! Choose Rock, Paper, or Scissors.");
    console.log("You chose " + playerChoice + "!");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

const playerPick = playerSelection();
const computerPick = computerPlay(3);

function playRound(playerPick, computerPick) {
    if (playerPick === computerPick) {
        return "You both chose the same answer!";
    }
}


console.log(playRound(playerPick, computerPick));