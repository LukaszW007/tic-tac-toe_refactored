/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.newGame = exports.currentPlayer = exports.winner = exports.oSpots = exports.xSpots = undefined;\n\nvar _winner_check = __webpack_require__(2);\n\nvar xSpots = [],\n    oSpots = [],\n    winner = '',\n    currentPlayer = 'X';\nvar btnNewGame = document.getElementsByClassName('new-game')[0];\n\nvar currentPlayerToSpan = function currentPlayerToSpan(currentPlayer) {\n    var playerName = document.getElementsByClassName('player-name');\n    playerName[0].innerHTML = currentPlayer;\n};\n\nvar newGame = function newGame() {\n    exports.xSpots = xSpots = [];\n    exports.oSpots = oSpots = [];\n    exports.winner = winner = '';\n    exports.currentPlayer = currentPlayer = 'X';\n    currentPlayerToSpan(currentPlayer);\n    document.querySelectorAll('td').forEach(function (e) {\n        return e.innerHTML = '';\n    });\n    document.getElementsByClassName('order')[0].style.visibility = 'visible';\n    document.getElementsByClassName('board')[0].style.visibility = 'visible';\n    document.getElementsByClassName('winner')[0].style.visibility = 'hidden';\n};\n\nvar nextTurn = function nextTurn() {\n    if (currentPlayer === 'X') {\n        exports.currentPlayer = currentPlayer = \"O\";\n        currentPlayerToSpan(currentPlayer);\n    } else {\n        exports.currentPlayer = currentPlayer = 'X';\n        currentPlayerToSpan(currentPlayer);\n    }\n};\n\n/*const clickHandler = () => {\r\n    console.log(`value of the clicked cell is ${this.className}`);\r\n    console.log(\"clicked\")\r\n};*/\n\ncurrentPlayerToSpan(currentPlayer);\n\ndocument.querySelectorAll('td').forEach(function (e) {\n    return e.addEventListener(\"click\", function () {\n        console.log('value of the clicked cell is ' + e.className);\n        e.innerHTML = currentPlayer;\n        (0, _winner_check.currentState)(e.className);\n        nextTurn();\n    });\n});\n\nbtnNewGame.addEventListener('click', newGame);\n\nexports.xSpots = xSpots;\nexports.oSpots = oSpots;\nexports.winner = winner;\nexports.currentPlayer = currentPlayer;\nexports.newGame = newGame;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbWFpbi5qcz82OTFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VycmVudFN0YXRlfSBmcm9tIFwiLi93aW5uZXJfY2hlY2tcIjtcclxuXHJcbmxldCB4U3BvdHMgPSBbXSxcclxuICAgIG9TcG90cyA9IFtdLFxyXG4gICAgd2lubmVyID0gJycsXHJcbiAgICBjdXJyZW50UGxheWVyID0gJ1gnO1xyXG5jb25zdCBidG5OZXdHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3LWdhbWUnKVswXTtcclxuXHJcbmNvbnN0IGN1cnJlbnRQbGF5ZXJUb1NwYW4gPSAoY3VycmVudFBsYXllcikgPT4ge1xyXG4gICAgbGV0IHBsYXllck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5ZXItbmFtZScpO1xyXG4gICAgcGxheWVyTmFtZVswXS5pbm5lckhUTUwgPSBjdXJyZW50UGxheWVyO1xyXG59O1xyXG5cclxuY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcclxuICAgIHhTcG90cyA9IFtdO1xyXG4gICAgb1Nwb3RzID0gW107XHJcbiAgICB3aW5uZXIgPSAnJztcclxuICAgIGN1cnJlbnRQbGF5ZXIgPSAnWCc7XHJcbiAgICBjdXJyZW50UGxheWVyVG9TcGFuKGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGQnKS5mb3JFYWNoKGUgPT4gZS5pbm5lckhUTUwgPScnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29yZGVyJylbMF0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkJylbMF0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbm5lcicpWzBdLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxufTtcclxuXHJcbmNvbnN0IG5leHRUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdYJykge1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBcIk9cIjtcclxuICAgICAgICBjdXJyZW50UGxheWVyVG9TcGFuKGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ1gnO1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXJUb1NwYW4oY3VycmVudFBsYXllcik7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKmNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGB2YWx1ZSBvZiB0aGUgY2xpY2tlZCBjZWxsIGlzICR7dGhpcy5jbGFzc05hbWV9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIilcclxufTsqL1xyXG5cclxuY3VycmVudFBsYXllclRvU3BhbihjdXJyZW50UGxheWVyKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylcclxuICAgIC5mb3JFYWNoKGUgPT4gZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGB2YWx1ZSBvZiB0aGUgY2xpY2tlZCBjZWxsIGlzICR7ZS5jbGFzc05hbWV9YCk7XHJcbiAgICAgICAgZS5pbm5lckhUTUwgPSBjdXJyZW50UGxheWVyO1xyXG4gICAgICAgIGN1cnJlbnRTdGF0ZShlLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgbmV4dFR1cm4oKTtcclxuICAgIH0pKTtcclxuXHJcbmJ0bk5ld0dhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdHYW1lKTtcclxuXHJcbmV4cG9ydCB7eFNwb3RzLCBvU3BvdHMsIHdpbm5lciwgY3VycmVudFBsYXllciwgbmV3R2FtZX07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbWFpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.checkWinner = exports.currentState = undefined;\n\nvar _main = __webpack_require__(0);\n\nvar winArray1 = [1, 5, 9],\n    winArray2 = [3, 5, 7],\n    winArray3 = [2, 5, 8],\n    winArray4 = [4, 5, 6],\n    winArray5 = [1, 2, 3],\n    winArray6 = [1, 4, 7],\n    winArray7 = [3, 6, 9],\n    winArray8 = [7, 8, 9];\n\nvar currentState = function currentState(spotNumber) {\n    if (_main.xSpots.length === 5) (0, _main.newGame)();\n    if (_main.currentPlayer === 'X' && !_main.xSpots.includes(spotNumber)) {\n        _main.xSpots.push(spotNumber);\n        console.log('xSpots: ' + _main.xSpots);\n        checkWinner('X', _main.xSpots);\n    } else if (_main.currentPlayer === 'O' && !_main.oSpots.includes(spotNumber)) {\n        _main.oSpots.push(spotNumber);\n        console.log('oSpots: ' + _main.oSpots);\n        checkWinner('O', _main.oSpots);\n    }\n};\n\nvar winningRules = function winningRules(chosenSpots, winArray) {\n    // console.log('chosenSpots: ' + chosenSpots);\n    // console.log('winArray: ' + winArray);\n    var counter = 0;\n    chosenSpots.forEach(function (value) {\n        if (winArray.includes(parseInt(value))) {\n            counter = counter + 1;\n        }\n    });\n    if (counter === 3) {\n        return true;\n    }\n};\n\nvar checkWinner = function checkWinner(player, spot) {\n    //console.log('spot: ' + spot);\n    if (winningRules(spot, winArray1) || winningRules(spot, winArray2) || winningRules(spot, winArray3) || winningRules(spot, winArray4) || winningRules(spot, winArray5) || winningRules(spot, winArray6) || winningRules(spot, winArray7) || winningRules(spot, winArray8)) {\n        //winner = player;\n        console.log(player + ' is the winner');\n        var winnerName = document.getElementsByClassName('winner-name');\n        winnerName[0].innerHTML = _main.currentPlayer;\n        document.getElementsByClassName('order')[0].style.visibility = 'hidden';\n        document.getElementsByClassName('board')[0].style.visibility = 'hidden';\n        document.getElementsByClassName('winner')[0].style.visibility = 'visible';\n    }\n};\n\nexports.currentState = currentState;\nexports.checkWinner = checkWinner;\n\n//Webpack-dev-server nie pozwala na wyswietlanie console.log'ow\n//winner = player nie dziala, blad w kompilacji\n//clickHandler funkcja w 42\n//newGame() w currentState nie ustawia currentPlayer na X//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvd2lubmVyX2NoZWNrLmpzPzZhOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt4U3BvdHMsIG9TcG90cywgd2lubmVyLCBjdXJyZW50UGxheWVyLCBuZXdHYW1lfSBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5sZXQgd2luQXJyYXkxID0gWzEsIDUsIDldLFxyXG4gICAgd2luQXJyYXkyID0gWzMsIDUsIDddLFxyXG4gICAgd2luQXJyYXkzID0gWzIsIDUsIDhdLFxyXG4gICAgd2luQXJyYXk0ID0gWzQsIDUsIDZdLFxyXG4gICAgd2luQXJyYXk1ID0gWzEsIDIsIDNdLFxyXG4gICAgd2luQXJyYXk2ID0gWzEsIDQsIDddLFxyXG4gICAgd2luQXJyYXk3ID0gWzMsIDYsIDldLFxyXG4gICAgd2luQXJyYXk4ID0gWzcsIDgsIDldO1xyXG5cclxuXHJcblxyXG5sZXQgY3VycmVudFN0YXRlID0gKHNwb3ROdW1iZXIpID0+IHtcclxuICAgIGlmICh4U3BvdHMubGVuZ3RoID09PSA1KSBuZXdHYW1lKCk7XHJcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gJ1gnICYmICF4U3BvdHMuaW5jbHVkZXMoc3BvdE51bWJlcikpIHtcclxuICAgICAgICB4U3BvdHMucHVzaChzcG90TnVtYmVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZygneFNwb3RzOiAnICsgeFNwb3RzKTtcclxuICAgICAgICBjaGVja1dpbm5lcignWCcsIHhTcG90cyk7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdPJyAmJiAhb1Nwb3RzLmluY2x1ZGVzKHNwb3ROdW1iZXIpKSB7XHJcbiAgICAgICAgb1Nwb3RzLnB1c2goc3BvdE51bWJlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29TcG90czogJyArIG9TcG90cyk7XHJcbiAgICAgICAgY2hlY2tXaW5uZXIoJ08nLCBvU3BvdHMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubGV0IHdpbm5pbmdSdWxlcyA9IChjaG9zZW5TcG90cywgd2luQXJyYXkpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaG9zZW5TcG90czogJyArIGNob3NlblNwb3RzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd3aW5BcnJheTogJyArIHdpbkFycmF5KTtcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIGNob3NlblNwb3RzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh3aW5BcnJheS5pbmNsdWRlcyhwYXJzZUludCh2YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChjb3VudGVyID09PSAzKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmxldCBjaGVja1dpbm5lciA9IChwbGF5ZXIsIHNwb3QpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coJ3Nwb3Q6ICcgKyBzcG90KTtcclxuICAgIGlmICh3aW5uaW5nUnVsZXMoc3BvdCwgd2luQXJyYXkxKSB8fCB3aW5uaW5nUnVsZXMoc3BvdCwgd2luQXJyYXkyKSB8fCB3aW5uaW5nUnVsZXMoc3BvdCwgd2luQXJyYXkzKSB8fCB3aW5uaW5nUnVsZXMoc3BvdCwgd2luQXJyYXk0KSB8fCB3aW5uaW5nUnVsZXMoc3BvdCwgd2luQXJyYXk1KSB8fCB3aW5uaW5nUnVsZXMoc3BvdCwgd2luQXJyYXk2KSB8fCB3aW5uaW5nUnVsZXMoc3BvdCwgd2luQXJyYXk3KSB8fCB3aW5uaW5nUnVsZXMoc3BvdCwgd2luQXJyYXk4KSkge1xyXG4gICAgICAgIC8vd2lubmVyID0gcGxheWVyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllciArICcgaXMgdGhlIHdpbm5lcicpO1xyXG4gICAgICAgIGxldCB3aW5uZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2lubmVyLW5hbWUnKTtcclxuICAgICAgICB3aW5uZXJOYW1lWzBdLmlubmVySFRNTCA9IGN1cnJlbnRQbGF5ZXI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3JkZXInKVswXS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmQnKVswXS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2lubmVyJylbMF0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7Y3VycmVudFN0YXRlLCBjaGVja1dpbm5lcn07XHJcblxyXG4vL1dlYnBhY2stZGV2LXNlcnZlciBuaWUgcG96d2FsYSBuYSB3eXN3aWV0bGFuaWUgY29uc29sZS5sb2cnb3dcclxuLy93aW5uZXIgPSBwbGF5ZXIgbmllIGR6aWFsYSwgYmxhZCB3IGtvbXBpbGFjamlcclxuLy9jbGlja0hhbmRsZXIgZnVua2NqYSB3IDQyXHJcbi8vbmV3R2FtZSgpIHcgY3VycmVudFN0YXRlIG5pZSB1c3Rhd2lhIGN1cnJlbnRQbGF5ZXIgbmEgWFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3dpbm5lcl9jaGVjay5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);