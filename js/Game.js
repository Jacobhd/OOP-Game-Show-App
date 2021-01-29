/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // Create Game class methods for starting and ending the game, handling interaction,
 // getting a random phrase, checking for a win, and removing a life from the scoreboard

class Game {
  constructor () {
    this.missed = 0;
    this.phrase = this.createPhrases();
    this.activePhrase = null;
  }
  // Creates phrases and returns an array of objects to be used in game
  createPhrases() {
    const phrase = [
      new Phrase('Live long and prosper'),
      new Phrase('Things are only imposible until theyre not'),
      new Phrase('Theres still much to do still so much to learn'),
      new Phrase('Change is the essential process of all existence'),
      new Phrase('To boldly go where no one has gone before')];
    return phrase;
  }
  // Selects random phrase from phrases property, returns Phrase object to be used
  getRandomPhrase() {
    return this.phrase[Math.floor(Math.random() * this.phrase.length)];
  }
  // Begins game by hiding start screen, selecting a random phrase and displaying it to user
  startGame() {
    const overlay = document.querySelector('#overlay'); // selectElement method?
    overlay.style.display = 'none'; // Hides the start screen when clicked
    this.activePhrase = this.getRandomPhrase(); // returns randomPhrase as activePhrase
    this.activePhrase.addPhraseToDisplay();
  }
  // Handles user interaction and functionality of app
  handleInteraction() {

  }
  // Checks for winning move - returns boolean true if won, false if game wasn't won
  // Checks if player has revealed all of the letters in the active phrase
  checkForWin() {
    const show = document.querySelectorAll(".show");
    const letters = document.querySelectorAll(".letter");
    if (show.length === letters.length) {
      return true;
    } else {
      return false;
    }
  }
  // Increases value of 'missed' property, removes a life from scoreboard
  // Checks if player has remaining lives and ends game if not.
  removeLife() {
    //variable to store image
    //this.missed +1
    // if = 5 gameOver()
  }
  // Displays game over message
  // Applies `.start` CSS class with either `.win` or `.lose` CSS class
  gameOver(gameWon) { // boolean of Whether or not the user won the game
    //overlay.style.display = 'block';
    //displays original start screen with outcome of game
    //updates overlay with `h1` element friendly win or loss message
    //replaces overlay's `.start` CSS class with either `win` or `lose` CSS class
  }

}

/*

When user clicks onscreen button -
The clicked/chosen letter must be captured.
The clicked letter must be checked against the phrase for a match.
If there’s a match, the letter must be displayed on screen instead of the placeholder.
If there’s no match, the game must remove a life from the scoreboard.
The game should check if the player has won the game by revealing all of the letters in
  the phrase or if the game is lost because the player is out of lives.
If the game is won or lost, a message should be displayed on screen.

Create Game class methods for starting and ending the game, handling interaction,
getting a random phrase, checking for a win, and removing a life from the scoreboard

missed: Used to track the number of missed guesses by the player. The initial
value is `0`

startGame: hides start screen overlay, sets `activePhrase` property to random phrase
calls addPhraseToDisplay() on active phrase

getRandomPhrase: randomly retrieves one phrase from the 'phrases' array

handleInteraction: Checks if button clicked matches letter in phrase = correct or incorrect guess
disable selected letter's onscreen keyboard button
if phrase does not inclue guessed letter,
apply `wrong` class to selected letter's button and `removeLife()` is called
for correct letter guess, `chose` class added to selected button.
`showMatchedLetter()` is called on phrase, and call `checkForWin()`
If player has won the game, call gameOver() method

removeLife: Removes a life from the scoreboard (one of the `liveHeart.png` images
is replaced with a `lostHeart.png` image), increments the
`missed` property, and if the player has lost the game calls the `gameOver()` method

checkForWin: Checks if player has revealed all of the letters in the active phrase

gameOver: Displays final "win" or "loss" message by showing the original start screen
overlay styled with either the `win` or `lose` CSS class

*/
