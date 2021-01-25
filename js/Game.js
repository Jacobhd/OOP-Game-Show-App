/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //Create Game class methods for starting and ending the game, handling interaction,
 //getting a random phrase, checking for a win, and removing a life from the scoreboard



class Game {
  constructor (missed, phrases, activeProperties) {
    this.missed = missed;
    this.phrases = phrases;
    this.activePhrase = null;
  }
}

/*

missed: Used to track the number of missed guesses by the player. The initial
value is `0`, since no guesses have been made at the start of the game.

phrases: An array of Phrase objects to use with the game. For now, initialize the
property to an empty array. In the next step you'll work on initializing this
property with an array of Phrase objects.

This is the Phrase object that’s currently in play. The initial value is
`null`.

*/
