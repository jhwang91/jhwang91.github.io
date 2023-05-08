// 1. make html with card div button, input, container (holding div - card)
// 2. js - query select the all elements in html , body, button etc
// 3. addeventlistener click function on button
// 4. use randomnumber function - math.floor to make the O in the cards (check casino ex)
// 5. and then loop randnum = 0, else x
// 6. make cards - createelement(div) create class name 'card' - css it up
// 7. one more eventlistener for the div(cards)
// 8. inside loop - few conditional statements - if (winner)/ if (!winner)

let h1 = document.querySelector("h1"); // targeting the h1 in html
h1.textContent = "You wanna play a game?"; // add/changing the text in h1 tag
let h4 = document.querySelector("h4");
let input = document.querySelector("input");
let button = document.querySelector("button");
let container = document.querySelector("#container"); // reminder '#'

button.addEventListener("click", function (e) {
  let inputValue = input.value; // this will read the value in the input when you click show more.
  console.log(inputValue);
  addCard(inputValue);
});

// add the 'enter' button TARGETING the input
input.addEventListener("keypress", function (e) {
  let inputValue = input.value;
  console.log(inputValue); // this will read the value in the input when you click show more.
  addCard(inputValue);
});
//make a function to randomise the 'O' in the set of cards (function taken from casino game lesson)
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber);

// creating a function for adding cards - IIFE // set winner, tries and call randnum function( set to new variable name 'randNum')
const addCard = (numCards) => {
  winner = false;
  go = 0;
  let randNum = randomNumber(0, numCards - 1); //'numCards-1 cos -1 for the 'O' card
  container.innerHTML = ""; // clears the cards in the container
  h4.textContent = "Let's play!";
  // make a loop to create the cards
  for (let i = 0; i < numCards; i++) {
    // console.log("sup");
    let text = i === randNum ? "O" : "X";
    let card = document.createElement("div"); //creating card variable and add class into html
    card.classList.add("flipCard");
    card.innerHTML = `<div class="flip-card-inner"><div class="flip-card-front"></div><div class="flip-card-back">${text}</div></div>`;
    // this creates an inner card which is the 'mid-flip', front side, and the back side which has the X or O
    container.appendChild(card);
    console.log(card);
    // creating the click on the card
    card.addEventListener("click", function (e) {
      if (winner) return; // if won, stop
      if (card.classList.contains("clicked")) return; // if the class contains 'clicked' cannot click again
      card.classList.add("clicked"); // add a class onto html 'clicked'
      go++;
      console.log(card);
      // if 'O' in the card
      let tries = go == 1 ? "try" : "tries"; // if the winning try is 1 = try, if >1 = tries

      if (card.textContent == "O") {
        winner = true; //if true it'll stop (the clicking)
        h4.textContent = `You won in ${go} ${tries}`;
      } else {
        h4.textContent = `Ooof, so close! Click again!`;
      }
    });
  }
};
let winner;
