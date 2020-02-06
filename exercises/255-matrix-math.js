// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

 function matrixAdd (array1, array2){
     var arr1 = []
     var arr2 = []
     var sum = 0
      for ( let i = 0 ; i < array1.length ; i ++ ){ 
          arr1.push(array1[i])
          arr1.push(array2[i])
          i++
          arr2.push(array1[i])
          arr2.push(array2[i])
          }
           
              
          
           

      
      return [[arr1[0][0] + arr1[1][0], arr1[0][1] + arr1[1][1]],[arr2[0][0] + arr2[1][0], arr2[0][1] + arr2[1][1]]]
 }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]


////=================> First Approach
function matrixMultiply (array1, array2){
    
    var fistOperation = (array1[0][0] * array2[0][0]) + (array1[0][1] * array2[1][0] )
    var secondOperation = (array1[0][0] * array2[0][1]) + (array1[0][1] * array2[1][1])
    var thirdOperation =  (array1[1][0] * array2[0][0]) + (array1[1][1] * array2[1][0])
    var lastOperation  = (array1[1][0] * array2[0][1]) + (array1[1][1] * array2[1][1])

    return [[fistOperation, secondOperation], [thirdOperation, lastOperation]]
}