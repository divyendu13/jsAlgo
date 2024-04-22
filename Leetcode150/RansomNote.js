/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed
 *  by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 */

var canConstruct = function(ransomNote, magazine) {
    let obj1= new Map()
    let obj2= new Map()
    for(i of ransomNote){
        obj1.set(i,(obj1.get(i) || 0) +1)
    }
    for(i of magazine){
       obj2.set(i,(obj2.get(i) || 0) +1)
    }
    obj1.forEach((value,key)=>{
        
        if(obj2.has(key) && obj2.get(key)>=value){
            obj1.delete(key)
        }
      })
    return obj1.size==0 ? true : false

};

console.log(canConstruct('aa','aaaaaaab'))