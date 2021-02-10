/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// `Start Button` returns random phrase game

document.querySelector('#btn__reset').addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

// Listen to clicks for the onscreen keyboard, pass to handleInteraction()

document.querySelector("#qwerty").addEventListener('click', (event) => {
  if (event.target.className === "key") {
    game.handleInteraction(event.target);
  }
});

/* Listen for user's physical keyboard
   selectAll `key` class set to button string values,
   button value = event `key` value & letter is enabled
   pass to handleInteraction() method */

document.addEventListener('keydown', event => {
  document.querySelectorAll('.key').forEach(button => {
    if (button.textContent === event.key && button.disabled === false) {
      game.handleInteraction(button);
    }
  });
});
