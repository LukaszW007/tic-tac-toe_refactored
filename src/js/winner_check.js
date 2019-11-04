import {xSpots, oSpots, winner, currentPlayer, newGame} from "./main";

let winArray1 = [1, 5, 9],
    winArray2 = [3, 5, 7],
    winArray3 = [2, 5, 8],
    winArray4 = [4, 5, 6],
    winArray5 = [1, 2, 3],
    winArray6 = [1, 4, 7],
    winArray7 = [3, 6, 9],
    winArray8 = [7, 8, 9];



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
    //console.log('spot: ' + spot);
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

export {currentState, checkWinner};

//Webpack-dev-server nie pozwala na wyswietlanie console.log'ow
//winner = player nie dziala, blad w kompilacji
//clickHandler funkcja w 42
//newGame() w currentState nie ustawia currentPlayer na X
