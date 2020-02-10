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

// You can solve this with TWO loops. They are not nested.
// Consider the hint on line 17
// 


function recognizeEmployees (names, namesOfTheMonth) {
    var justForComparison = [] //= =========================>Ignore this Array
    var finalArrayOfTheEmployees = []
    const employeesOfTheMonthObj = {}
    var objectKeys = 1
    for (const names1 of namesOfTheMonth) {
      employeesOfTheMonthObj[objectKeys] = names1
      objectKeys++ //= ====================> Loop through the emplyees of the month and construct an Object based on the input.
    }
  
    for (const indx of Object.keys(employeesOfTheMonthObj)) {
      const elementInEmployeesOfTheMonth = employeesOfTheMonthObj[indx]
      for (const indxes in names) {
        const elementInNames = names[indxes]
        if (elementInEmployeesOfTheMonth === elementInNames) {
          finalArrayOfTheEmployees.push(`Outstanding job, ${elementInNames}!`) //= =========================> Comparing between the Object we constructed and the names
          justForComparison.push(elementInNames) // of all the Employees and determine which one are idenical, and push the
        } // required text to finalArrayOfTheEmployees.
      }
    }
    for (const indx in names) {
      const elementInNames = names[indx]
      if (!justForComparison.includes(elementInNames)) {
        finalArrayOfTheEmployees.unshift(`Great job, ${elementInNames}!`)  //====> Any name that is not included in justForComparison
      }                                                                 // would be given Great job
    }
  
    console.log(justForComparison)
    return finalArrayOfTheEmployees
  }
  