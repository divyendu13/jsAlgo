/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 
 */

function areThereDuplicates(...inp) {
    // good luck. (supply any arguments you deem necessary.)
    let obj ={}
      for(let num of inp){
          obj[num] = ++obj[num] || 1
      }
      let objKeys = Object.keys(obj)
      for(let ob of objKeys){
        
          if(obj[ob]>1){
              return true
             
          }
      }
      return false
  }

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a','b','c','a'))



function areThereDuplicates2(...inp) {
    // good luck. (supply any arguments you deem necessary.)
    let collection = new Set(inp)
    if(collection.size != inp.length){
        return true
    }
    else return false
  }

console.log(areThereDuplicates2(1, 2, 3))
console.log(areThereDuplicates2(1, 2, 2))
console.log(areThereDuplicates2('a','b','c','a'))
