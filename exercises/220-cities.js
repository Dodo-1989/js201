// Write a function "coolCities" which takes an array of city Objects like such:
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// and returns a new array containing only those cities whose temperature is
// cooler than 70 degrees.
const cities1 = [
       { name: 'Los Angeles', temperature: 60.0},
       { name: 'Atlanta', temperature: 52.0 },
       { name: 'Detroit', temperature: 48.0 },
       { name: 'New York', temperature: 80.0 }
     ];

     function coolCities (arr){
       //  const tempOnly = []
         const cityNames = []
       //  const indxs = Object.keys(cities1)
          for ( let i in Object.keys(cities1)){
               if (cities1[i].temperature < 70){
                   cityNames.push(cities1[i])
               }
           }
        //    for ( let j in tempOnly){
        //        if (tempOnly[j] < 70){
        //            cityNames.push(cities1[j])
        //        }
            
          return cityNames
        }
    
    
    

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "cityNames" which takes an array of city objects like the
// above problem and returns an array of the cities names.
const cities = [
       { name: 'Los Angeles', temperature: 60.0},
       { name: 'Atlanta', temperature: 52.0 },
       { name: 'Detroit', temperature: 48.0 },
       { name: 'New York', temperature: 80.0 }
     ];

     function cityNames (arr){
         var arrNames = []
         const idx =  Object.keys(cities)
          for ( let i in idx){
              arrNames.push(cities[i].name)
          }
          return arrNames
     }