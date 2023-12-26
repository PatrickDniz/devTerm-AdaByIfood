class Game {
  constructor(word) {
    this.word = word.toUpperCase();
    this.limit = this.word.length;
    this.attempt = 0;
    this.maxAttempt = 8;
    this.attempDiv = document.querySelector(".game_bottom__clue--attemps strong");
    this.input = document.querySelector('.game_middle__board--input');
    this.button = document.querySelector('.game_middle__board--button');
    this.next = document.querySelector(".game_top__next");
  }

  nextWord(res) {
    let historic = JSON.parse(localStorage.getItem('historic')) || [];
    historic.push({ word: this.word, attempts: this.attempt, result: res });
    localStorage.setItem('historic', JSON.stringify(historic));
    this.attempt = this.maxAttempt;
    this.next.style.display = "block";
  }

  validWord() {
    const guessedWord = this.input.value.toUpperCase();
    if(guessedWord.length == this.limit){
      if(this.attempt <= this.maxAttempt){
        this.attempt++;
        if (this.word === guessedWord) {
          this.nextWord('victory');
        }

        const stringAux = this.word.split('');
        const arrayAux = [];
        for (let i = 0; i < this.word.length; i++) {
          if (this.word[i] == guessedWord[i]){
            arrayAux[i] = 'correct';
            stringAux.splice(i, 1 , "");
          }
        }
        for (let i = 0; i < this.word.length; i++) {
          if(!arrayAux[i]){
            if(stringAux.find(item => item == guessedWord[i])){
              arrayAux[i] = 'attention';
              stringAux.splice(stringAux.indexOf(this.word[i]), 1 , "");
            }
          }
        }
        const result = document.querySelector('.game_bottom__results');
        const resultItem = document.createElement('div');
        for (let i = 0; i < this.word.length; i++) {
          const letter = document.createElement('div');
          letter.textContent = guessedWord[i];
          !!arrayAux[i] ? letter.classList.add(arrayAux[i]) : letter.classList.add('error');
          resultItem.appendChild(letter);
        }
        result.appendChild(resultItem);
        this.attempDiv.innerHTML = this.maxAttempt - this.attempt;
      }
    } else {
      console.log("digite uma palavra valida");
    }
  }

  start() {
    this.button.addEventListener('click', () => {
      this.validWord();
    });

    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.validWord();
      }
    });
  }
}

export default Game;
