/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Pull random phrase, start/end game, handle interaction,
   replace life img on board, check end condition, reset game */

class Game {
  constructor () {
    this.missed = 0; // replace `liveHeart.png` with `lostHeart.png`
    this.phrase = this.createPhrases();
    this.activePhrase = null;
  }

  // Return array of objects

  createPhrases() {
    const phrase = [
      new Phrase('Engage'),
      new Phrase('Make it so'),
      new Phrase('Beam me up Scotty'),
      new Phrase('Live long and prosper'),
      new Phrase('To boldly go where no one has gone before')];
    return phrase;
  }

  // Randomly retrieve phrase

  getRandomPhrase() {
    return this.phrase[Math.floor(Math.random() * this.phrase.length)];
  }

  // Hide overlay, enable reset condition, display hidden phrase

  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    if (overlay.className === 'win' || overlay.className === 'lose') {
      this.gameReset();
    }
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /* User interaction/functionality of app. Set `chosen` class,
     display/disable letters, checkForWin(), removeLife() */

  handleInteraction(button) {
    let letter = button.textContent;
    if (this.activePhrase.checkLetter(letter)) {
      this.activePhrase.showMatchedLetter(letter);
      button.classList.add("chosen");
      button.setAttribute("disabled", true);

      if (this.checkForWin()) { this.gameOver(true); }

    } else {
      button.classList.add("wrong");
      button.setAttribute("disabled", true);
      this.removeLife();
    }
  }

  // Check if all letters revealed, return true/won false/lose

  checkForWin() {
    const hidden = document.querySelectorAll('.hide');
    return !hidden.length;
  }

  /* Remove life from board, game loss if none remaining
     increments 'missed' property, replacing images */
  removeLife() {
    const heart = document.querySelectorAll('.tries img');
    heart[this.missed].src = 'images/lostHeart.png';
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /* Update overlay with (boolean) outcome,
     `.start` class, displays game over message */

  gameOver(gameWon) {
    document.querySelector('#overlay').style.display = '';
    const gameOver = document.getElementById("game-over-message");
    if (gameWon === true) {
      overlay.className = "win";
      gameOver.innerHTML = "Great Job, You Won!";
    } else {
      overlay.className = "lose";
      gameOver.innerHTML = "Sorry, better luck next time!";
    }
  }

  /* Remove `li` elements from `phrase` div, reset `key` class,
     enable buttons, reset heart images/`missed` property */

  gameReset() {
    document.querySelector('#phrase ul').innerHTML = '';
    document.querySelectorAll('.key').forEach(key => {
      key.className = 'key';
      key.disabled = false;
    });
    const hearts = document.querySelectorAll('.tries img');
    hearts.forEach(heart => { // Reset heart images
      heart.src = 'images/liveHeart.png';
    });
    this.missed = 0;
  }

} // end `Game` class
