'use strict';

var winArray1 = [1, 5, 9],
    winArray2 = [3, 5, 7],
    winArray3 = [2, 5, 8],
    winArray4 = [4, 5, 6],
    winArray5 = [1, 2, 3],
    winArray6 = [1, 4, 7],
    winArray7 = [3, 6, 9],
    winArray8 = [7, 8, 9];

var xSpots = [],
    oSpots = [],
    winner = '',
    currentPlayer = 'X';

var btnNewGame = document.getElementsByClassName('new-game')[0];

var currentPlayerToSpan = function currentPlayerToSpan(currentPlayer) {
    var playerName = document.getElementsByClassName('player-name');
    playerName[0].innerHTML = currentPlayer;
};

var newGame = function newGame() {
    xSpots = [];
    oSpots = [];
    winner = '';
    currentPlayer = 'X';
    currentPlayerToSpan(currentPlayer);
    document.querySelectorAll('td').forEach(function (e) {
        return e.innerHTML = '';
    });
    document.getElementsByClassName('order')[0].style.visibility = 'visible';
    document.getElementsByClassName('board')[0].style.visibility = 'visible';
    document.getElementsByClassName('winner')[0].style.visibility = 'hidden';
};

var nextTurn = function nextTurn() {
    if (currentPlayer === 'X') {
        currentPlayer = "O";
        currentPlayerToSpan(currentPlayer);
    } else {
        currentPlayer = 'X';
        currentPlayerToSpan(currentPlayer);
    }
};

currentPlayerToSpan(currentPlayer);

var currentStateUpdate = function currentStateUpdate(playerName, playerSpots, spotNumber) {
    playerSpots.push(spotNumber);
    console.log(playerSpots + ': ' + xSpots);
    checkWinner(playerName, playerSpots);
};

var currentState = function currentState(spotNumber) {
    if (xSpots.length === 5) newGame();
    if (currentPlayer === 'X' && !xSpots.includes(spotNumber)) {
        currentStateUpdate('X', xSpots, spotNumber);
    } else if (currentPlayer === 'O' && !oSpots.includes(spotNumber)) {
        currentStateUpdate('O', oSpots, spotNumber);
    }
};

var winningRules = function winningRules(chosenSpots, winArray) {
    var counter = 0;
    chosenSpots.forEach(function (value) {
        if (winArray.includes(parseInt(value))) {
            counter = counter + 1;
        }
    });
    if (counter === 3) {
        return true;
    }
};

var checkWinner = function checkWinner(player, spot) {
    console.log('spot: ' + spot);
    if (winningRules(spot, winArray1) || winningRules(spot, winArray2) || winningRules(spot, winArray3) || winningRules(spot, winArray4) || winningRules(spot, winArray5) || winningRules(spot, winArray6) || winningRules(spot, winArray7) || winningRules(spot, winArray8)) {
        console.log(player + ' is the winner');
        var winnerName = document.getElementsByClassName('winner-name');
        winnerName[0].innerHTML = currentPlayer;
        document.getElementsByClassName('order')[0].style.visibility = 'hidden';
        document.getElementsByClassName('board')[0].style.visibility = 'hidden';
        document.getElementsByClassName('winner')[0].style.visibility = 'visible';
        console.log("Winner is: " + winner);
        addToWinnersList(player);
    }
};

var clickHandler = function clickHandler(e) {
    console.log('value of the clicked cell is ' + e.target.className);
    e.target.innerHTML = currentPlayer;
    currentState(e.target.className);
    nextTurn();
};

var addToWinnersList = function addToWinnersList(winner) {
    var listOfWinners = document.getElementsByClassName("winners-list")[0];
    var winnersListElement = document.createElement('li');
    winnersListElement.appendChild(document.createTextNode("Winner is " + winner));
    listOfWinners.appendChild(winnersListElement);
};

document.querySelectorAll('td').forEach(function (e) {
    return e.addEventListener("click", clickHandler);
});

btnNewGame.addEventListener('click', newGame);
