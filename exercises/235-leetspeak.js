// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"

//....................................................

//=====> First Approach

// const conversions = {a:4, e:3,g:6, i:1, o:0, s:5, t:7}
// function leetspeak (str){
//     var newStr = str.toLowerCase()
//     var newArr = []
//     var beforConver = newStr.split('')
    
//      for ( let i = 0 ; i <= beforConver.length ; i ++){
//          for ( let j = 0 ; j <= Object.keys(conversions).length ; j++){
//               if (beforConver[i] === Object.keys(conversions)[j]) {
//                    newArr.push((conversions[beforConver[i]]))
                  
//              }
            
//              }
             
//              newArr.push(beforConver[i])           
                            
//   }
      
//     return newArr.join('').replace(/[aegiost]/g, '')
// }

//...........................................................................

//==============> Second Approach

// function leetspeak (str){
//     var oldArr = str.toLowerCase().split('')
//     var newArr1 = []
//     for ( let i = 0 ; i <= oldArr.length ; i ++){
//         if (oldArr[i] === 'a'){
//             newArr1.push(4)
//         }
//         else if (oldArr[i] === 'e'){
//             newArr1.push(3)
//         }
//         else if (oldArr[i] === 'g'){
//             newArr1.push(6)
//         }
//         else if (oldArr[i] === 'i'){
//             newArr1.push(1)
//         }
//         else if (oldArr[i] === 'o'){
//             newArr1.push(0)
//         }
//         else if (oldArr[i] === 's'){
//             newArr1.push(5)
//         }
//         else if (oldArr[i] === 't'){
//             newArr1.push(7)
//         }
//         else {
//             newArr1.push(oldArr[i])
//         }
//     }
//    return newArr1.join('').replace(/[aegiost]/g, '')
// }

//........................................................................

//========> Third

// const conversions3 = {'a':4, 'e':3, 'g':6, 'i':1, 'o':0, 's':5, 't':7}

// function leetspeak (str){
//    return  str.toLowerCase().replace(/[aegiost]/g, letter => conversions3[letter] )
// }

//.................................................................

//=====> Last Approach, short but looks weired!?!!!
function leetspeak (str){
    return str.toLowerCase()
    .replace(/a/g, '4')
    .replace(/e/g, '3')
    .replace(/g/g, '6')
    .replace(/i/g, '1')
    .replace(/o/g, '0')
    .replace(/s/g, '5')
    .replace(/t/g, '7')
}