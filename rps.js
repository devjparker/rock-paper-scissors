let choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    //console.log(randomChoice);
    return randomChoice;
};

function playRound(playerSelection, computerSelection) {
    //let playerSelection = window.prompt("Type rock, paper, or scissors"); this is for the future
    let lowerPlayerSelection = playerSelection.toLowerCase();
    const tie = "It's a tie!";
    if (lowerPlayerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return tie;
        } else if (computerSelection == 'scissors') {
            return 'You win! Rock beats scissors!';
        } else if (computerSelection == 'paper') {
            return 'You lose! Paper beats rock!';
        } else {
            return 'How did I get here?';
        }
    } else if (lowerPlayerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You lose! Rock beats scissors!';
        } else if (computerSelection == 'scissors') {
            return tie;
        } else if (computerSelection == 'paper') {
            return 'You win! Scissors beats paper!';
        } else {
            return 'How did I get here?';
        }
    } else if (lowerPlayerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You win! Paper beats rock!';
        } else if (computerSelection == 'scissors') {
            return 'You lose! Scissors beats paper!';
        } else if (computerSelection == 'paper') {
            return tie;
        } else {
            return 'How did I get here?';
        }
    } else {
        return 'How did I get here?';
    }
}

function game() {
    
}

console.log(playRound('paper', 'rock'));
console.log(playRound('paper', 'scissors'));
console.log(playRound('paper', 'paper'));
console.log(playRound('rock', 'rock'));
console.log(playRound('rock', 'scissors'));
console.log(playRound('rock', 'paper'));
console.log(playRound('scissors', 'rock'));
console.log(playRound('scissors', 'scissors'));
console.log(playRound('scissors', 'paper'));


