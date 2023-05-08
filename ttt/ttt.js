const squares = document.querySelectorAll(".row div"); //selecting all the divs
let player = "X"; //the first player
let h2 = document.querySelector("h2"); //targeting the h2 in html
h2.textContent = `It's ${player}'s turn.`; //add/changing the text in h2 tag
let turn = 1;
let isWinner = false;

console.log(squares);
for (square of squares) {
  //running through all the squares using for of loop
  // for (let i = 0; i < squares.length; i++) { //running through all the squares using for loop
  square.addEventListener("click", function (e) {
    if (!isWinner) {
      //each click on the squares
      if (!e.target.textContent) {
        //this !e.target.textContent is for the empty squares
        if (player == "X") {
          // if the player's turn is X
          e.target.textContent = "X"; // print X in the square
          if (checkWinner(player)) {
            // check if there is a player = 'X', if so, stop.
            alert(`${player} wins!`);
            return;
          }
          player = "O"; // otherwise print O
          h2.textContent = `It's ${player}'s turn.`; // this will change the turn's
        } else {
          e.target.textContent = "O"; // if player = x, or else print O
          if (checkWinner(player)) {
            // check if there is a player = 'O', if so, stop.
            alert(`${player} wins!`);
            return;
          }
          player = "X"; // otherwise print X
          h2.textContent = `It's ${player}'s turn.`; // this will change the turn's
        }
      }
    }
    if (turn === 9) {
      h2.textContent = "It's a tie!";
      return;
    }
    console.log(turn);
    turn++;
  });
}
//TODO: deep clonenode to clone the grid divs but without the eventListeners

function checkWinner(playerWin) {
  const winPoss = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  for (let i = 0; i < winPoss.length; i++) {
    if (
      squares[winPoss[i][0]].textContent == playerWin &&
      squares[winPoss[i][1]].textContent == playerWin &&
      squares[winPoss[i][2]].textContent == playerWin
    ) {
      isWinner = true;
      console.log("winner, winner, chicken SUPPER!"); // TODO: why does this matter where you put console.log. i.e. inbetween the ( & } on line 76????
      squares[winPoss[i][0]].style.backgroundColor = "green";
      squares[winPoss[i][1]].style.backgroundColor = "green";
      squares[winPoss[i][2]].style.backgroundColor = "green";
      h2.textContent = `${player} wins!`;
      return true;
    }
  }
  return false;
}

function resetBoard() {
  squares.forEach((square) => {
    square.innerHTML = "";
    square.className = "";
    square.style.backgroundColor = ""; // you need this to take away the colour squares
  });
  player = "x";
  isWinner = false;
  turn = 1;
  h2.textContent = `Player ${player.toUpperCase()}'s turn`;
}
