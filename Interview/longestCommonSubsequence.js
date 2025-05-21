let str1="abcde"
let str2= "adfg"



// function himadriCode(str1,str2){
//     let match = true
// let ary1 = str1.split("")
// let ary2 = str2.split("")
//     for(let i=0;i<ary1.length-ary2.length+1;i++){
//         for(let j=0;j<ary2.length;j++){
//             if(ary1[i+j]!==ary2[j]){
//                 match = false
//                 break
//             }
//         }
//             if(match){
//                 return true
//             }
//         }
//         return false
    
// }

function himadriCode(arr, sequence) {

    for (let i = 0; i < arr.length - sequence.length + 1; i++) {
  
      let match = true;
  
      for (let j = 0; j < sequence.length; j++) {
  
        if (arr[i + j] !== sequence[j]) {
  
          match = false;
  
          break;
  
        }
  
      }
  
      if (match) {
  
        return true; // Sequence found
  
      }
  
    }
  
    return false; // Sequence not found
  
  }
  
  
  
  // Usage:
  

 let arr = str1.split("")
 let sequence = str2.split("") 

console.log(himadriCode(arr,sequence))


