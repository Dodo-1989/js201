// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'
//...............................................................................

//===================> First Approach, easy but hard to read :/
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//function cipher (string, shift){
// return string.toLowerCase().replace(/[a-z]/g, x => (alpha.indexOf(x) + shift) < 26? alpha[alpha.indexOf(x) + shift] : alpha[(alpha.indexOf(x) + shift)%26])
  
//}

//.........................................................................................
//================> Second Approach, longer but, easier to read.

 function cipher (string, shift){
    var afterCoding = []
    var loweredCase = string.toLowerCase().split('');
    const lettersAtoZ = /[a-z]/g

    for ( let indx in loweredCase){
         let shiftedIndx = alphabet.indexOf(loweredCase[indx]) + shift
          if ( shiftedIndx < 26){
            afterCoding.push(loweredCase[indx].replace(lettersAtoZ, alphabet[shiftedIndx]))
    }
     else {
        afterCoding.push(loweredCase[indx].replace(lettersAtoZ, alphabet[shiftedIndx % 26]))
    }
}
       return afterCoding.join('')
 }
//.................................................................................
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'
//.....................................................

//========================> First Approach
//function decipher (codedString, requiredShift){
// return codedString.toLowerCase().replace(/[a-z]/g, letter => (alphabet.indexOf(letter) - requiredShift) < 0? alphabet[(alphabet.indexOf(letter) - requiredShift) + 26] : alphabet[alphabet.indexOf(letter) - shift])
//}

//================================================> Second Approach :)
// ===> Declared above ===> const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function decipher (codedString, requiredShift) {
    const codedChars = codedString.toLowerCase().split('')
    const decodedChars = []
  
    for (const indx in codedChars) {
      const char = codedChars[indx]
      const indexOfCharInAlphabet = alphabet.indexOf(char)
      
      let newIdx = indexOfCharInAlphabet - requiredShift
      if (newIdx < 0) {
          newIdx = newIdx + alphabet.length
      }
      const  theLetterThatWeAreReplacing = /[a-z]/g;
      var replacementLetter = alphabet[newIdx]
      decodedChars.push(char.replace(theLetterThatWeAreReplacing, replacementLetter))
    }
    return decodedChars.join('')
  }
