// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

function max (arr){
     if ( arr.length === 0 ){
         return 0
     }
     //======================================>First Approach
    // arr.sort(function(a,b){return a - b})
    // return arr.pop()
    //============================> Second
   // return Math.max(...arr)
    //==========================> Last Approach 
   return  myMathMax(arr);
}

//===================================> My own version of Math.Max made from scratch:)
const myMathMax = (function  (arr) {
var max = 0
 for ( let i = 0 ; i < arr.length-1 ; i++){
     if ( arr[i] > arr[i+1]){
         max = arr[i]
         arr[i+1] = arr[i]
     }
     else{
         max = arr[i+1]        
     }
 }
 return max
 
})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

function sumNumbers (arr){
    let sum = 0;
    for (let i in arr){
        sum += arr[i]
    }
    return sum
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
 function positives (arr){
  var positiveNums = []
  var negativeNums = []
  for ( let i = 0 ; i < arr.length ; i ++){
      if ( arr[i] > 0){
          positiveNums.push(arr[i])
      }
      negativeNums.push(arr[i])
  }
  return positiveNums
 }



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

function evens (arr){
    var isEvenArr = []
    for ( let i in arr){
        arr[i] % 2 === 0? isEvenArr.push(arr[i]) : isEvenArr.push('')
    }
    return isEvenArr.filter(x => x !== '')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

 function odds (arr){
    var isOddArr = []
    for ( let i in arr){
        arr[i] % 2 !== 0? isOddArr.push(arr[i]) : isOddArr.push('')
    }
    return isOddArr.filter(x => x !== '')
}
 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers (arr){
    let onlyInteger = []
     for ( let j = 0 ; j < arr.length ; j++){
         Number.isInteger(arr[j])? onlyInteger.push(arr[j]) : arr[j];
     }
     return onlyInteger
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance (arr){
    var squared = []
     for ( let i in arr){
         squared.push(Math.pow(arr[i], 2))
     }
     return squared
}