let winArray1 = [1, 5, 9],
    winArray2 = [3, 5, 7],
    winArray3 = [2, 5, 8],
    winArray4 = [4, 5, 6],
    winArray5 = [1, 2, 3],
    winArray6 = [1, 4, 7],
    winArray7 = [3, 6, 9],
    winArray8 = [7, 8, 9];

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

currentPlayerToSpan(currentPlayer);

let currentState = (spotNumber) => {
    if (xSpots.length === 5) newGame();
    if (currentPlayer === 'X' && !xSpots.includes(spotNumber)) {
        xSpots.push(spotNumber);
        console.log('xSpots: ' + xSpots);
        checkWinner('X', xSpots);
    } else if (currentPlayer === 'O' && !oSpots.includes(spotNumber)) {
        oSpots.push(spotNumber);
        console.log('oSpots: ' + oSpots);
        checkWinner('O', oSpots);
    }
};

let winningRules = (chosenSpots, winArray) => {
    // console.log('chosenSpots: ' + chosenSpots);
    // console.log('winArray: ' + winArray);
    var counter = 0;
    chosenSpots.forEach(value => {
        if (winArray.includes(parseInt(value))) {
            counter = counter + 1;
        }
    });
    if (counter === 3){
        return true;
    }
};

let checkWinner = (player, spot) => {
    console.log('spot: ' + spot);
    if (winningRules(spot, winArray1) || winningRules(spot, winArray2) || winningRules(spot, winArray3) || winningRules(spot, winArray4) || winningRules(spot, winArray5) || winningRules(spot, winArray6) || winningRules(spot, winArray7) || winningRules(spot, winArray8)) {
        //winner = player;
        console.log(player + ' is the winner');
        let winnerName = document.getElementsByClassName('winner-name');
        winnerName[0].innerHTML = currentPlayer;
        document.getElementsByClassName('order')[0].style.visibility = 'hidden';
        document.getElementsByClassName('board')[0].style.visibility = 'hidden';
        document.getElementsByClassName('winner')[0].style.visibility = 'visible';
    }
};


const clickHandler = (e) => {
    console.log(`value of the clicked cell is ${e.target.className}`);
    e.target.innerHTML = currentPlayer;
    currentState(e.target.className);
    nextTurn();
};

document.querySelectorAll('td')
    .forEach(e => e.addEventListener("click", clickHandler));

btnNewGame.addEventListener('click', newGame);
