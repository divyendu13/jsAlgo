function validAnagram(a,b){
   a=a.split("")
   b=b.split("")
   let obj={}
    if (a.length != b.length) { return false}
   for(let char of a){
    obj[char]=++obj[char] || 1
   }
   for(let char of b){
    if(!obj[char]){return false}
    else {obj[char]-=1}
   }
   
   return true
}

console.log(validAnagram('anagram','maganar'))