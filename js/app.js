/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*          Pseudocode / Instructions         */

// Create a new instance of the `Game` class and add event listeners for the
// start button and onscreen keyboard buttons

let game;

const start = document.querySelector('#btn__reset');
const keyboardButtons = document.querySelector("#qwerty");

start.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

keyboardButtons.addEventListener("keydown", event => {});




/*          Testing Code         */
//-----------------------------------//

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//-----------------------------------//



//-----------------------------------//
