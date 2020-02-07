// Write a function "recognizeEmployees" that takes two arguments:
// 1) an array of names of people to be recognized
// 2) an array of employees of the month
// Return an array telling everyone that they did a great job, except employees
// of the month did an outstanding job.
//
// Examples:
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan'])
// > ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']
//
// Hint: What is the best data structure for the employees of the month list?


function recognizeEmployees (arrNames, arrWinner){
 var greatJob = []
 var meeh = []
 if ( arrWinner.length < 2){
    for ( let i in arrNames){
        for ( let j = 0 ; j < arrWinner.length ; j++){
            if (arrNames[i] !== arrWinner[j] && arrNames[i] !== arrWinner[j+1]){
                greatJob.push(`Great job, ${arrNames[i]}!`)
                
            }else {
                greatJob.push(`Outstanding job, ${arrNames[i]}!`)
            }

           }
                            
        }
          
        }
        else {
            for ( let i in arrNames){
                for ( let j = 0 ; j < arrWinner.length-1 ; j++){
                    if (arrNames[i] !== arrWinner[j] && arrNames[i] !== arrWinner[j+1]){
                        greatJob.push(`Great job, ${arrNames[i]}!`)
                        
                    }else {
                        greatJob.push(`Outstanding job, ${arrNames[i]}!`)
                    }
        
                   }
                                    
                }       
        }
    console.log(meeh)
    return greatJob
}


//else{
  //  greatJob.push(`Great job, ${arrNames[i]}!`)
//}               
