/**
 * Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 */

//let s = "paper", t = "title"
let s="bbbaaaba" , t = "aaabbbba"
var isomorphic = function(s,t){
    if(s.length!=t.length) return false
    let map1=new Map()
    let map2=new Map()

for(i of s){
    map1.set(i,(map1.get(i) || 0) + 1)
}

for(i of t){
    map2.set(i,(map2.get(i) || 0) +1)
}
console.log(map1)
console.log(map2)
let ary1=[]
map1.forEach((value) => {
   ary1.push(value)
})
let ary2=[]
map2.forEach((value) => {
   ary2.push(value)
})

console.log(ary1)
console.log(ary2)
return ary1.toString()==ary2.toString() ? true : false
}

console.log(isomorphic(s,t))