function computerPlay(max) {
    const result = Math.floor(Math.random() * max);

    if (result == 0) {
         let result = "rock";
        console.log("Computer chose rock!");
        return result;
    } else if (result == 1) {
        let result = "paper";
        console.log("Computer chose paper!");
        return result;
    } else {
        let result = "scissors";
        console.log("Computer chose scissors!");
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
//prompts the player to input a choice

const playerPick = playerSelection();
const computerPick = computerPlay(3);

function playRound(playerPick, computerPick) {
    if ((playerPick && computerPick) === ("rock" && "paper")) {
        return "Paper beats rock!";
    } else if ((playerPick && computerPick) === ("rock" && "scissors")) {
        return "Rock beats Paper!";
    } else if ((playerPick && computerPick) === ("paper" && "scissors")) {
        return "Scissors beats Paper!";
    } else {
        return "You both picked " + playerPick + "!";
    }
}
//takes input from the player and computer and declares a winner

const bodyMain = document.querySelector('body');
const resultsDiv = document.createElement('div');
resultsDiv.classList.add('results');
const resultsAnswer = document.createElement('h2');

bodyMain.appendChild(resultsDiv);
resultsDiv.appendChild(resultsAnswer);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    playRound(playerPick, computerPick);
});
