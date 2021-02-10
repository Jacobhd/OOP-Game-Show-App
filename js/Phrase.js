/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* Handles letter/space interface classes and matches */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // Sets <li> for each character, appends to `phrase` div `<ul>`

  addPhraseToDisplay() {
    const phraseDiv = document.querySelector('#phrase ul');
    for (let i = 0; i < this.phrase.length; i += 1) {
      let placeHolder = document.createElement('li');
      let letter = this.phrase[i];
      if (letter === ' ') { // filter character classes
        placeHolder.className = 'space';
      } else {
        placeHolder.className = `hide letter ${letter}`;
      }
      placeHolder.textContent = letter;
      phraseDiv.appendChild(placeHolder);
    }
  };

  // Checks phrase for passed letter

  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  // Displays matching letters on screen, set `.show` class

  showMatchedLetter(letter) {
    const li = document.querySelectorAll('#phrase li');
    li.forEach(matched => {
      if (matched.textContent === letter) {
        matched.setAttribute('class', 'show');
      }
    });
  }

} // end `Phrase` class
