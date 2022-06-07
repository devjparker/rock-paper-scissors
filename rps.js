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
            console.log(tie);
        } else if (computerSelection == 'scissors') {
            console.log('You win! Rock beats scissors!');
        } else if (computerSelection == 'paper') {
            console.log('You lose! Paper beats rock!');
        } else {
            console.log('How did I get here?');
        }
    } else if (lowerPlayerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('You lose! Rock beats scissors!');
        } else if (computerSelection == 'scissors') {
            console.log(tie);
        } else if (computerSelection == 'paper') {
            console.log('You win! Scissors beats paper!');
        } else {
            console.log('How did I get here?');
        }
    } else if (lowerPlayerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('You win! Paper beats rock!');
        } else if (computerSelection == 'scissors') {
            console.log('You lose! Scissors beats paper!');
        } else if (computerSelection == 'paper') {
            console.log(tie);
        } else {
            console.log('How did I get here?');
        }
    } else {
        console.log('How did I get here?');
    }
}

playRound('paper', 'rock');
playRound('paper', 'scissors');
playRound('paper', 'paper');
playRound('rock', 'rock');
playRound('rock', 'scissors');
playRound('rock', 'paper');
playRound('scissors', 'rock');
playRound('scissors', 'scissors');
playRound('scissors', 'paper');


