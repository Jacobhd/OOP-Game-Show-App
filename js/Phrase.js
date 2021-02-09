/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Phrase class methods handle creation of phrases, letter/space interface, classes and matches

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // Creates a <li> for each letter and space, and appends it to `phrase` div `<ul>`
  addPhraseToDisplay() {
    const phraseDiv = document.querySelector('#phrase ul');
    for (let i = 0; i < this.phrase.length; i += 1) {
      let placeHolder = document.createElement('li');
      let letter = this.phrase[i]; // [i] = letters of phrase
      // sets class names to spaces and letters accordingly
      if (letter === ' ') {
        placeHolder.className = 'space';
      } else {
        placeHolder.className = `hide letter ${letter}`;
      }
      placeHolder.textContent = letter; // sets phrase spaces and letters as `li`
      phraseDiv.appendChild(placeHolder); // appends `li` to `ul` in `phrase` div
    }
  };

  // Checks if passed letter is in phrase
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  // Displays passed letter on screen after matches are found
  showMatchedLetter(letter) { // string value
    const li = document.querySelectorAll('#phrase li');
    li.forEach(matched => { // replace CSS class to .show for matching letters
      if (matched.textContent === letter) {
        matched.setAttribute('class', 'show');
      }
    });
  }

} // end `Phrase` class
