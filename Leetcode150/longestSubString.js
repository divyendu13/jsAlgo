/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

function longestSubString(s){
    let longest=0
    let start=0
    let seen ={}

    for(i=0;i<s.length;i++){
        let char=s[i]
        if(seen[char]){
            start=Math.max(start,seen[char])
        }
        longest=Math.max(longest,i-start+1)
        seen[char]=i+1
    }
    
    return longest
}


console.log(longestSubString('dvdf'))