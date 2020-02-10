// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
//  ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
//   ticTacToe([
//    ['O', 'X', 'O'],
//    ['O', 'X', null],
//    [null, 'X', null]
//    ])
// 'X'
// ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
 //null




// function ticTacToe (ticTacToeInput){
//     var indxRelatedToO = []
//     var indxRelatedToX = []
//     var allArrJoinTogether  = ticTacToeInput.join().replace(/""/g, 'N').split(',')
    
    
//       for ( let i = 0 ; i < allArrJoinTogether.length ; i++){
//           var firstItem = allArrJoinTogether[i]
//             var firstOcurranceX = allArrJoinTogether.indexOf('X')
//             var firstOcurranceO = allArrJoinTogether.indexOf('O')
//               if ( firstItem === "O"){
//                   indxRelatedToO.push(allArrJoinTogether.indexOf('O',(firstOcurranceO + i)))
//           }
//               else if ( firstItem === "X"){ 
//                   if (!indxRelatedToX.includes(firstOcurranceX)){
//                       indxRelatedToX.push(firstOcurranceX)
//                   }
//                    if (allArrJoinTogether.indexOf('X',(firstOcurranceX + i)) !== -1){
//                  indxRelatedToX.push(allArrJoinTogether.indexOf('X',(firstOcurranceX + i)))
//                   }
//            }

//         }
//                // ====After extracting the indxs of the Os and Xs, we compare them to winngArrangment


//                 for ( let i in wininngArrangment){
//                     var item = wininngArrangment[i]
//                     if (item.join() === indxRelatedToO.join()){
//                         return 'O'
//                     }
//                      else if (item.join() === indxRelatedToX.join()){
//                          return 'X'
//                      }
                     
//                 }

//                 return 'null'
    
   
//     }
    
// if you take a tic tac toe board and arrange it in a straight line
// and represent that as an array, then the following sequences represent
// all of the winning conditions
// ie: top row wins, diagonal wins, etc
const wininngArrangment = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
  function ticTacToe (ticTacToeInput) {
    const TicTacToeObj = {}
      var  objectKeys = 1
  
    for (let row of ticTacToeInput) {
      for (let letter of row) {
        TicTacToeObj[objectKeys] = letter
        objectKeys++
      }
    }
    for (let item of wininngArrangment) {
      var maybeAWinnerArr = [TicTacToeObj[item[0]], TicTacToeObj[item[1]], TicTacToeObj[item[2]]] //= = newArr constructed based on the current Object
      var eleminateIdenticals = [...new Set(maybeAWinnerArr)] //= ==> Used "Set" to create a new Arr ( based on maybeAwinnerArr) with only unique elements.
  
      console.log(maybeAWinnerArr)
      console.log(eleminateIdenticals)
      if (eleminateIdenticals.length === 1) { //= We have a winner only if the length of eleminateIdentical === 0, in this case it will return the winner, otherwise
        return eleminateIdenticals[0] // it will continue until the loop finished and it return null.
      }
    }
    console.log(TicTacToeObj)
    return null
  }
    









    
