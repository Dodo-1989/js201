// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Complete the removeZAnimals function as described below:

function removeZAnimals () {
  // 1) declare an array with some strings
  const animals = ["alligator", "zebra", "crocodile", "giraffe"]

  // create an empty array (we will fill this with strings from the previous array)
  let animalsWithoutZ = []

  // 2) loop through "animals"
 
  //  for ( let j = 0 ; j < animals[i].length ; j++){
  //    if (!anima)
   
  // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name
  //    contains the letter "z"
  //    HINT: remember you can search within a string

  // 4) return "animalsWithoutZ"
  for ( let i = 0 ; i < animals.length ; i++){
     if ( !animals[i].includes('z')){
        animalsWithoutZ.push(animals[i])
    }
   
  }
  return animalsWithoutZ
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeAnyWordWithZ" that takes 1 argument: an array of strings
// It should return a new array that has all of the items in the passed-in array minus
// any words that contain the letter 'z' or 'Z' (case-insensitive)

function removeAnyWordWithZ (arr){
  var newArrMinusZ = []
    for (let i = 0 ; i < arr.length ; i++){
      if (!arr[i].includes('z') && !arr[i].includes('Z')){
        newArrMinusZ.push(arr[i])
      }
        
    } 
    return newArrMinusZ
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeWordsWithChar" that takes 2 arguments:
// 1) an array of strings
// 2) a string of length 1 (ie: a single character)
// It should return a new array that has all of the items in the first argument
// except those that contain a character in the second argument (case-insensitive).
//
// Examples:
// removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
// removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']
  
 function removeWordsWithChar (arr, str){
   var newArr =[]
    for (let i in arr){
      if (!arr[i].includes(str.toLowerCase())){
        newArr.push(arr[i])
   }
  
 }
 return newArr
}