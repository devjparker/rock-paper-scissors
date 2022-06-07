let choices = ['rock', 'paper', 'scissors'];
let numWins = 0;
let winLoseTie = "nothing";

function computerPlay() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    //console.log(randomChoice);
    return randomChoice;
};

function playRound(playerSelection, computerSelection) {
    //let playerSelection = window.prompt("Type rock, paper, or scissors"); this is for the future
    let lowerPlayerSelection = playerSelection.toLowerCase();
    const tieMessage = "It's a tie!";
    if (lowerPlayerSelection == 'rock') {
        if (computerSelection == 'rock') {
            alert(tieMessage);
            winLoseTie = "tie";
            return winLoseTie;
        } else if (computerSelection == 'scissors') {
            alert('You win! Rock beats scissors!');
            numWins++;
            winLoseTie = "win";
            return winLoseTie;
        } else if (computerSelection == 'paper') {
            alert('You lose! Paper beats rock!');
            winLoseTie = "lose";
            return winLoseTie;
        } else {
            return 'How did I get here?';
        }
    } else if (lowerPlayerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            alert('You lose! Rock beats scissors!');
            winLoseTie = "lose";
            return winLoseTie;
        } else if (computerSelection == 'scissors') {
            alert(tieMessage);
            winLoseTie = "tie";
            return winLoseTie;
        } else if (computerSelection == 'paper') {
            alert('You win! Scissors beats paper!');
            numWins++;
            winLoseTie = "win";
            return winLoseTie;
        } else {
            return 'How did I get here?';
        }
    } else if (lowerPlayerSelection == 'paper') {
        if (computerSelection == 'rock') {
            alert('You win! Paper beats rock!');
            numWins++;
            winLoseTie = "win";
            return winLoseTie;
        } else if (computerSelection == 'scissors') {
            alert('You lose! Scissors beats paper!');
            winLoseTie = "lose";
            return winLoseTie;
        } else if (computerSelection == 'paper') {
            alert(tieMessage);
            winLoseTie = "tie";
            return winLoseTie;
        } else {
            return 'How did I get here?';
        }
    } else {
        return 'How did I get here?';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(prompt('Game on! \nRock, Paper, or Scissors?'), computerPlay());
        console.log('So far we have ' + numWins + ' wins');
        if (winLoseTie == "tie") {
            i--;
            winLoseTie == "";
        }
    }
    if (numWins > 2) {
        console.log('You win this game. Refresh to try again?');
        alert('You win, refresh to try again!');
    } else {
        console.log('We lost this round. Refresh to try again?');
        alert('You lost. Refresh to try again!');
    }
}

game();


