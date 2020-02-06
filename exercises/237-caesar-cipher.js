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
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//function cipher (string, shift){
// return string.toLowerCase().replace(/[a-z]/g, x => (alpha.indexOf(x) + shift) < 26? alpha[alpha.indexOf(x) + shift] : alpha[(alpha.indexOf(x) + shift)%26])
  
//}

//.........................................................................................
//================> Second Approach, longer but, easier to read.

 function cipher (string, shift){
    var cipherized = []
    var loweredCase = string.toLowerCase().split('');
    const regex = /[a-z]/g

    for ( let i in loweredCase){
         let shiftedIndx = alpha.indexOf(loweredCase[i]) + shift
          if ( shiftedIndx < 26){
           cipherized.push(loweredCase[i].replace(regex, alpha[shiftedIndx]))
    }
     else {
        cipherized.push(loweredCase[i].replace(regex, alpha[shiftedIndx % 26]))
    }
}
       return cipherized.join('')
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
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//function decipher (string, shift){
// return string.toLowerCase().replace(/[a-z]/g, x => (alpha.indexOf(x) - shift) < 0? alpha[(alpha.indexOf(x) - shift) + 26] : alpha[alpha.indexOf(x) - shift])
//}

//================================================> Second Approach :)
function decipher (str, shif){
    var decipherized = []
    var loweredCase = str.toLowerCase().split('');
    const regex1 = /[a-z]/g

    for ( let i in loweredCase){
         let shiftedIndx = alpha.indexOf(loweredCase[i]) - shif
          if ( shiftedIndx < 0){
            decipherized.push(loweredCase[i].replace(regex1, alpha[shiftedIndx + 26]))
           
    }
     else {
        decipherized.push(loweredCase[i].replace(regex1, alpha[shiftedIndx]))
    }
}
       return decipherized.join('')
 }
