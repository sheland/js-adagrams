const Adagrams = {        //similar to Ruby module
  letters: {
    "A" : 9,
    "B": 2,
    "C": 2,
    "D": 4,
    "E": 12,
    "F": 2,
    "G": 3,
    "H": 2,
    "I": 9,
    "J": 1,
    "K": 1,
    "L": 4,
    "M": 2,
    "N": 6,
    "O": 8,
    "P": 2,
    "Q": 1,
    "R": 6,
    "S": 4,
    "T": 6,
    "U": 4,
    "V": 2,
    "W": 2,
    "X": 1,
    "Y": 2,
    "Z": 1,
  },

  drawLetters() {
    const result = []
    for (let i = 0; i < 10; i++) {
      const keys = Object.keys(Adagrams.letters);
      const curr = keys[Math.floor(Math.random()*keys.length)];
        result.push(curr);
        Adagrams.letters[curr] -= 1;
        if (Adagrams.letters[curr] < 1) {
          delete Adagrams.letters[curr]
        }
    }
    // console.log('this is all that is left in the hash of letters:',Adagrams.letters);

    return result;
  },

// console.log(Adagrams.randomKeys());

  usesAvailableLetters(word, drawn) {
    let input_array = word.toUpperCase().split('');
    let letters_hand = drawn;
    // let tru_false = [];

    for (let letter of input_array) {
      if (letters_hand.includes(letter)) { //if hand includes player's word
        letters_hand.splice(letters_hand.indexOf(letter), + 1); //remove letter by index position
      } else {
        return false
      }
    }
    return true;
    //
    // if (tru_false.includes(false)) {
    //   return false
    // } else {
    //   return true
    // }
  },

  scoreWord(word) {
    let scoreHash = {
      "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
      "D": 2, "G": 2,
      "B": 3, "C": 3, "M": 3, "P": 3,
      "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,
      "K": 5,
      "J": 8, "X": 8,
      "Q": 10, "Z": 10};

    let words = word.toUpperCase().split('');
    let scores = words.map(function (char) { //array
      return scoreHash[char];
    });

    let totalScore = scores.reduce(function (sum, score) { //add score
      return sum + score;
      }, 0);

    if (word.length > 6 ) { //if length is > 6, add additional points
      totalScore += 8;
    }

    return totalScore;
  },

  highestScoreFrom(words) {
    let bestWord = 'adagramswavefour';
    let bestScore = 0;


      for(const word of words) {
        const wordScore = this.scoreWord(word); //obtain points from scoreWord method

        if (wordScore > bestScore) {
          bestScore = wordScore;
          bestWord = word;
      } else if (wordScore == bestScore && bestWord.length != word.length) { //if same points & different length
          if (word.length == 10 || (word.length < bestWord.length && bestWord.length != 10)) { //if length is 10 OR length less than bestword's length AND its length is not 10
          bestScore = wordScore;
          bestWord = word;
        }
      }
    }
      return {
       word: bestWord,
       score: bestScore
    }
   }


};

// console.log(Adagrams.usesAvailableLetters());


  // usesAvailableLetters(input, letters_in_hand) {
  // //
  //   const letters = input.split('');
  //   const letters_in_hand = Adagrams.randomKeys();
  //   const tru_fals = [];
  //
  //   for (let letter of letters) {
  //     if (letters_in_hand.includes(letter)) {
  //       tru_false.push(letter) && delete letters_in_hand[letter]
  //     } else {
  //       tru_false.push("false");
  //     }
  //   }
  //
  //   if (tru_fals.includes("false")) {
  //     return false
  //   } else {
  //     return true
  //   }
  // },

// Do not remove this line or your tests will break!
export default Adagrams;
