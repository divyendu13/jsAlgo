/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

let haystack = "a", needle = "a"

function occur(haystack,needle){
    let len = needle.length
    for(let i=0;i<=haystack.length-len;i++){
        let str=haystack.substring(i,len+i)
        console.log(str)
        if(str==needle){
            return i
        }

    }
    return -1

}

console.log(occur(haystack,needle))
