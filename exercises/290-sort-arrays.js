// TIP: check out this reference for how to sort arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "alphaSort" that sorts an array of strings alphabetically.
//
// Examples:
// alphaSort(['b', 'a', 'c'])
// > ['a', 'b', 'c']

function alphaSort (arr){

   return arr.sort()

}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "strLengthSort" that sorts an array of strings by how long
// each string is. Put the shortest strings first.
//
// Examples:
// strLengthSort(['Apple', 'Banana', 'Cherry'])
// > ['Apple', 'Cherry', 'Banana']
///===========================================> Fisrt Approach, using their length. (This Approach arrange the string in order according to their length, 
//but it fails the test becuase , the ones who are identical in length suppose to take the same order as the orignial array )
// function strLengthSort(arr){
//     var leng = []
//     var sorted = []
//      for ( let i in arr){
//          leng.push(arr[i].length)
//      }
//       leng.sort(function(a,b){
//           return a - b
//       })
//       for ( let j = leng.length ; j >= 0 ; j--){
//          for ( let i = 0 ; i < arr.length ; i++){
//                if ( leng[j] === arr[i].length && !sorted.includes(arr[i])){
//                    sorted.unshift(arr[i])
//                }
//             }
//        }
//        console.log(leng)
//        return sorted
       
// }

//.......................................................
function strLengthSort(arr){
    var leng = []
    var sorted = []
     for ( let i in arr){
         leng.push(arr[i].length)
     }
      leng.sort(function(a,b){
          return a - b
      })
      for ( let j = 0 ; j <= leng.length ; j++){
         for ( let i = 0 ; i < arr.length ; i++){
               if ( leng[j] === arr[i].length && !sorted.includes(arr[i])){
                   sorted.push(arr[i])
               }
            }
       }
       console.log(leng)
       return sorted
       
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumSort". Given an array of array of numbers like:
// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
//
// Sort the array by the sum of each inner array. For the above example, the
// respective sums for each inner array is 8, 20, and 9.
//
// Example:
//  sumSort([
//  [9, 1, 9],
//  [2],
//  [4, 5]
// ])
// > [[2], [4, 5], [9, 1, 9]]


function sumSort (initialArr){
    var sortedArr = []
    var individualAdditionsOfArr = []
    for ( let indx in initialArr){
        sum = 0
        for ( let innerIndx in initialArr[indx]){
          sum +=initialArr[indx][innerIndx]
        }
        individualAdditionsOfArr.push(sum)   

    }
    individualAdditionsOfArr.sort(function(a,b){ return a-b})
        
            for ( let index in individualAdditionsOfArr){
                for ( let indx in initialArr){
                    sum = 0
                    for ( let innerIndx in initialArr[indx]){
                      sum +=initialArr[indx][innerIndx]
                    }
                    if ( individualAdditionsOfArr[index] === sum){
                        sortedArr.push(initialArr[indx])
                    }
            
                }
                 
        }


    return sortedArr
}