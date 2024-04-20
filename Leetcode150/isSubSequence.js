/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 */

let subSeq = function(s,t){
    let len=0
    let i=0
    while(i<t.length){
        if(s[len]==t[i]){
            len++
        }
        i++
    }
    if(len!=s.length) return false
    else return true
}

console.log(subSeq("abc","ahbgdc"))