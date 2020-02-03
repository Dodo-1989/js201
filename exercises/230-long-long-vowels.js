// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'
function longLongVowels (str){
    const vowels = ['a', 'e', 'i', 'o', 'u']
     var arr1 = str.split('')
      var repeatVowels = []
      var indx = ""
      for ( let i = 0 ; i < arr1.length; i++){
           for ( let j = 0 ; j < vowels.length ; j++){
              if (arr1[i] === vowels[j]){
                  repeatVowels.push(arr1[i])
                   indx =+ arr1.indexOf(arr1[i])
                   
               }   
            }
        }
               if ( repeatVowels.length > 1){
                return (arr1.slice(0, indx)+arr1[indx].repeat(4)+arr1.slice(indx + 1)).replace(/,/g, '')
               }
              return str
}