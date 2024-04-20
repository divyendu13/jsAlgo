/**
 * A phrase is a palindrome if, after converting
 *  all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
 */
let s = "A man, a plan, a canal: Panama"

let palindrome = function(s){
    let ns=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    console.log(ns)
    let left=0
    let right=ns.length-1
    for(i=0;i<ns.length/2;i++){
        if(ns[left]!=ns[right]){
            return false
        }
        left++
        right--
    }
    return true
}

console.log(palindrome(s))
console.log(palindrome("race a car"))