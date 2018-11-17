const Adagrams = {
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

randomKeys() {
  let result = []
  for (let i = 0; i < 10; i++) {
    let keys = Object.keys(Adagrams.letters);
    let curr = keys[Math.floor(Math.random()*keys.length)];
      result.push(curr);
      Adagrams.letters[curr] -= 1;
      if (Adagrams.letters[curr] < 1) {
        console.log('this is current:',curr);
        delete Adagrams.letters[curr]
      }
  }
  console.log('this is all that is left in the hash of letters:',Adagrams.letters);

    return result;
  }
}


console.log(Adagrams.randomKeys());

  // letters[letter] -= 1
  // if letters[letter] < 0
  // letters.delete(letter)
  // if !letters[letter] console.log("not available");
  // drawLetters(letters) {
  //   let letters = `${"A".repeat(9) + "B".repeat(2) + "C".repeat(2) + "D".repeat(4) + "E".repeat(12) + "F".repeat(2) + "G".repeat(3) + "H".repeat(2) + "D".repeat(4) + "E".repeat(12) + "F".repeat(2) + "G".repeat(3) + "H".repeat(2) + "I".repeat(9) + "J".repeat(1) + "K".repeat(1) + "L".repeat(4) + "M".repeat(2) + "N".repeat(6) + "O".repeat(8) + "P".repeat(2) + "Q".repeat(1) + "R".repeat(6) + "S".repeat(4) + "T".repeat(6) + "U".repeat(4) + "V".repeat(2) + "W".repeat(2) + "Y".repeat(2) + "Z".repeat(1)`.split('');
//
// for(let i = 0; i < 10; i++) {
//     console.log(letters[Math.floor(Math.random())])
//   }
// },


//   usesAvailableLetters(input, letters_in_hand)
//
//   let input = input.split("")
//
//   let tru_fals = {}
//
//   input.forEach(element)
//     if (letters_in_hand.includes(element))
//       tru_fals << letters_in_hand.delete_at(letters_in_hand.index(let))

//
// };


// Do not remove this line or your tests will break!
// export default Adagrams;
