/**Given a string s, check if it can be constructed by taking a substring of it and 
 * appending multiple copies of the substring together.
Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.
Example 2:

Input: s = "aba"
Output: false
Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice. */

let s = "a"

function repeat(s){
    if(s.length==1) return false
    let len=0
    let char=s[0]
    for(let i=1;i<s.length;i++){
        if(s[i]==char){
            len=i
            break
        }
    }
    
    let rc=s.substring(0,len)
        let i=0
   
        while(i<s.length){
           if(s.substring(i,len+i)!=rc) return false
            i +=len
        }
        return true

    
}

console.log(repeat(s))