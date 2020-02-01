// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse (whatever){
    return whatever.split('').reverse().join('')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord (words){
    let lengthArr =[]
     let split1 = words.split(' ')
      for ( let i in split1){
          lengthArr.push(split1[i].length)
      }
       for ( let i in split1){
           if (split1[i].length === Math.max(...lengthArr)){
               return split1[i]
           }
       }
      
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer (cleaner){
    let aftercleaning = []
    let newArr = cleaner.split(' ')
    //return cleaner.replace(/darn/g, "").replace(/heck/g, "")
     for ( let i in newArr){
       if (newArr[i] !== 'heck' && newArr[i] !== 'darn' && newArr[i] !== 'crappy'){
           aftercleaning.push(newArr[i])
       }
    }
     return aftercleaning.join(' ')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

        function capitalizeAll (sentence){
            var afterCapi = []
            var arr = sentence.split(' ')
              for ( let i= 0 ; i < arr.length ; i++){
                 afterCapi.push(arr[i].slice(0,1).toUpperCase()+arr[i].slice(1))
            }
            return afterCapi.join(' ')
            
        }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

// function split (a , b){
//    // return a.replace(/\b/g , ',')
//    let newArr = [] 
//    for ( let i = 0; i < a.length ; i++ ){
//        if (a[i] === b){
//            newArr.push('')      
//        }else{
//          newArr.push(a[i])
//        }
//    }
//    return newArr
// }

 function split (a, b) {
     if ( b.length > 1){
         b = b.slice(1)
     }

    var stringArray = [''];
    var j = 0;
    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) == b) {
            stringArray.push('')
            j++;
        } else {
     stringArray[j] += a.charAt(i);
        
    }
    
}
return stringArray.filter(x => x !== '')
 }