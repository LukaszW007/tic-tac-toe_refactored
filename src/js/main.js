import {currentState} from "./winner_check";

let xSpots = [],
    oSpots = [],
    winner = '',
    currentPlayer = 'X';
const btnNewGame = document.getElementsByClassName('new-game')[0];

const currentPlayerToSpan = (currentPlayer) => {
    let playerName = document.getElementsByClassName('player-name');
    playerName[0].innerHTML = currentPlayer;
};

const newGame = () => {
    xSpots = [];
    oSpots = [];
    winner = '';
    currentPlayer = 'X';
    currentPlayerToSpan(currentPlayer);
    document.querySelectorAll('td').forEach(e => e.innerHTML ='');
    document.getElementsByClassName('order')[0].style.visibility = 'visible';
    document.getElementsByClassName('board')[0].style.visibility = 'visible';
    document.getElementsByClassName('winner')[0].style.visibility = 'hidden';
};

const nextTurn = () => {
    if (currentPlayer === 'X') {
        currentPlayer = "O";
        currentPlayerToSpan(currentPlayer);
    } else {
        currentPlayer = 'X';
        currentPlayerToSpan(currentPlayer);
    }
};

/*const clickHandler = () => {
    console.log(`value of the clicked cell is ${this.className}`);
    console.log("clicked")
};*/

currentPlayerToSpan(currentPlayer);

document.querySelectorAll('td')
    .forEach(e => e.addEventListener("click", () => {
        console.log(`value of the clicked cell is ${e.className}`);
        e.innerHTML = currentPlayer;
        currentState(e.className);
        nextTurn();
    }));

btnNewGame.addEventListener('click', newGame);

export {xSpots, oSpots, winner, currentPlayer, newGame};
