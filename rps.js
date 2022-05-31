let choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    //console.log(randomChoice);
    return randomChoice;
};

function playRound(playerSelection, computerSelection) {
    //let playerSelection = window.prompt("Type rock, paper, or scissors"); this is for the future
    let lowerPlayerSelection = playerSelection.toLowerCase();
    switch (lowerPlayerSelection === 'rock') {
        case computerSelection == 'rock':
            console.log('It\'s a tie!');
            break;
        case computerSelection == 'scissors':
            console.log('You win, rock beats scissors!');
            break;
        case computerSelection == 'paper':
            console.log('You lose, paper beats rock!');
            break;
        default:
            console.log('I don\'t know how we got here');
            break;
    }

    switch (lowerPlayerSelection === 'scissors') {
        case computerSelection == 'scissors':
            console.log('It\'s a tie!');
            break;
        case computerSelection == 'paper':
            console.log('You win, scissors beats paper!');
            break;
        case computerSelection == 'rock':
            console.log('You lose, rock beats scissors!');
            break;
        default:
            console.log('I don\'t know how we got here');
            break;
    }

    switch (lowerPlayerSelection === 'paper') {
        case computerSelection == 'paper':
            console.log('It\'s a tie!');
            break;
        case computerSelection == 'rock':
            console.log('You win, paper beats rock!');
            break;
        case computerSelection == 'scissors':
            console.log('You lose, scissors beats paper!');
            break;
        default:
            console.log('I don\'t know how we got here');
            break;
    }
}

playRound('paper', 'rock');
/*playRound('paper', 'scissors');
playRound('paper', 'paper');
playRound('rock', 'rock');
playRound('rock', 'scissors');
playRound('rock', 'paper');
playRound('scissors', 'rock');
playRound('scissors', 'scissors');
playRound('scissors', 'paper');*/


