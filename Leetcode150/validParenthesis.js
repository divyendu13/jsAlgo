/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

function validParenthesis(s){
    let arry=[]
    if(s.length%2!=0) return false
    for(i of s){
        if(i=='(' || i=='{' || i=='['){
            arry.push(i)
        }
        else if(arry[arry.length-1]=='(' && i==')'){
            arry.pop()
        }
        else if(arry[arry.length-1]=='{' && i=='}'){
            arry.pop()
        }
        else if(arry[arry.length-1]=='[' && i==']'){
            arry.pop()
        }
        else if(i=')' || i=='}' || i==']'){
            arry.push(i)
        }
    }
    if(arry.length==0) return true
    else return false
}


console.log(validParenthesis('[({})]'))
console.log(validParenthesis('()[]{}'))
console.log(validParenthesis('([}}])'))