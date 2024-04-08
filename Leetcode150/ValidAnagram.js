/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 typically using all the original letters exactly once.
 */

 /**
  * Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
  */

let s = "anagram"
let t = "nagaram"

const lookup={}

if(s.length!=t.length) return false

for(i of s){
    lookup[i]=++lookup[i] || 1
}


for(i of t){
    if(!lookup[i]) return false
    else 
    lookup[i] -=1
}
return true

console.log(lookup)