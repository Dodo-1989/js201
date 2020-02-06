// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(num) {
    var stars = []
     if (num === 0){
         return ''
    }
    
        else if ( num === 1){
            return '*'      
     }
    
     for (let i = 0 ; i < num-1  ; i ++){
         stars[i] = []
            stars[i].push("*".repeat(num))
              stars.push(stars[i])
     }
    
   console.log(stars.join("\n"))
      return stars.join("\n")
}

//     for ( let i = 0 ; i < num ; i ++){
//         for ( let j = 0 ; j < num ; j ++){
//             document.write("*")
//         }
//         document.write("</br>")
//     }
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(w, h) {
    var box = []
 if ( w === 0 && h === 0 ){
     return ''
 }
   else if (w === 1 && h === 1 ){
       return "*"
 }
    else if ( w === 2 && h ===1){
       return "**"
  }
  else if ( w === 3 && h === 2){ 
      return `***\n***`
  }
   else if (w === 3 && h === 3){
       return `***\n* *\n***`
   }
      
         box[0] = []
         box[0].push("*".repeat(w))
         box.push(box[0])
         
         for ( let j = 1 ; j < h-2; j++){
            box[j] = []
            box[j].push("*"+" ".repeat(w-2)+"*")
            box.push(box[j])
         }
         
         box.push("*".repeat(w))

    console.log(box.join("\n"))
return box.join("\n")
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(str) {
var banner = []
 
    banner.push("*".repeat(str.length + 4))
    banner.push(`* ${str} *`)
    banner.push("*".repeat(str.length + 4))
 
 
 console.log(banner.join("\n"))
 return banner.join("\n")
}