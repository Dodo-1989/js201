// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

//=====================================>First Approach , a little long!!!
// function gcd (num1, num2){
//     var divisor1 = []
//     var divisor2 = []
//     var divi1And2 = []
//     var lastArr = []
//      for (let i = 1 ; i <= num1 ; i ++ ){
//           if ( num1 % i === 0){
//              divisor1.push(i)
//          }  
//      }
//          for ( let j = 1 ; j <= num2 ; j ++){
//              if ( num2 % j === 0){
//                divisor2.push(j)
//          }
//      }
//           for ( let c in divisor1 ){
//               if(!divi1And2.includes(divisor1[c])){
//                divi1And2.push(divisor1[c])
//            }
//        }
//             for ( let d in divisor2){
//                if (!divi1And2.includes(divisor2[d])){
//                   divi1And2.push(divisor2[d]);
//             } 
//         }
//            for ( let i in divi1And2){
//              if (num1 > num2 && num2 % divi1And2[i] === 0 ){
//                lastArr.push(divi1And2[i]);
//          }
//          else if ( num2 > num1 && num1 % divi1And2[i] === 0){
//              lastArr.push(divi1And2[i]);
//          }
//         }
//         var sortingArr = lastArr.sort(function(a,b) { return a - b});
//         let las =  sortingArr.pop() 
//         return num1 % las === 0 && num2 % las === 0 ? las : sortingArr[sortingArr.length-1]
     
// }


//=====> Another Approach, listing all the commone factorials and then getting the highest number!!

// function gcd(n1 , n2){
//     var fac = []

//     if ( n1 < n2 ){
//         for ( let i = 0 ; i <= n1; i++){
//             if (n1 % i === 0 && n2 % i === 0){
//                 fac.push(i)
//             }
//         }
//     }
//     else if ( n2 < n1){
//         for ( let j = 0; j <= n2; j++){
//             if (n2 % j === 0 && n1 % j === 0){
//                 fac.push(j)
//           }
//      }

// }
// return Math.max(...fac)

// }

//===================================================>Last Appraoch!! Starting from the highest to the lowest using reverse loop!
 function gcd (n1, n2){

   if ( n1 < n2){
    for ( let i = n1; i >=0 ; i--){
        if ( n1 % i === 0 && n2 % i === 0){
            return i 
              }
                         
    }
       
 }
    else if ( n2 < n1){
        for ( let i = n2; i >=0 ; i--){
            if ( n2 % i === 0 && n1 % i === 0){
                return i
                  }
                  
                     
        }
       
    }
   
 }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

function factors (num){
    var arrFac = []
    for ( let i = 0 ; i <= num ; i ++){
        num % i === 0 ? arrFac.push(i): arrFac.push('')

    }
    return arrFac.filter(x => x !== '')
}