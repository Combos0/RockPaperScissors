const bodyMain = document.querySelector('body');
const resultsDiv = document.createElement('div');
resultsDiv.classList.add('results');
const resultsAnswer = document.createElement('h2');
const resultsScore = document .createElement('h3');

bodyMain.appendChild(resultsDiv);
resultsDiv.appendChild(resultsAnswer);
resultsDiv.appendChild(resultsScore);

const playerROCK = document.querySelector('#ROCK');
const playerPAPER = document.querySelector('#PAPER');
const playerSCISSORS = document.querySelector('#SCISSORS');

let playerScore = 0;
let computerScore = 0;

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

};

//gets a random choice for the computer

playerROCK.addEventListener('click', () => {
    pickedRock();
    updatesScore();
    checksWinner();
});

playerPAPER.addEventListener('click', () => {
    pickedPaper();
    updatesScore();
    checksWinner();
});

playerSCISSORS.addEventListener('click', () => {
    pickedScissors();
    updatesScore();
    checksWinner();
});

function pickedRock() {
    switch (computerPlay(3)) {
        case "paper":
            resultsAnswer.textContent = 'Paper beats rock, You loose!';
            computerScore++
            break;
        case "scissors":
            resultsAnswer.textContent = 'Rock beats scissors, you win!';
            playerScore++;
            break;
        default:
            resultsAnswer.textContent = 'You tied with Rock!';
    };
};

function pickedPaper() {
    switch (computerPlay(3)) {
        case "scissors":
            resultsAnswer.textContent = 'Scissors beats paper, You loose!';
            computerScore++
            break;
        case "rock":
            resultsAnswer.textContent = 'paper beats rock, you win!';
            playerScore++;
            break;
        default:
            resultsAnswer.textContent = 'You tied with paper!';
    };
};

function pickedScissors() {
    switch (computerPlay(3)) {
        case "rock":
            resultsAnswer.textContent = 'Rock beats scissors, You loose!';
            computerScore++
            break;
        case "paper":
            resultsAnswer.textContent = 'scissors beats paper, you win!';
            playerScore++;
            break;
        default:
            resultsAnswer.textContent = 'You tied with scissors!';
    };
};

function updatesScore() {
    resultsScore.textContent = `${playerScore} : ${computerScore}`;
}

function checksWinner() {
    if (playerScore === 5) {
        resultsScore.textContent = 'You have beaten the computer!';
    } else if (computerScore === 5) {
        resultsScore.textContent = 'You lost to the computer!';
    };
};