//inp = [{()}]
//stack Balanced
//inp = [{(}]

let stack=[]
let char
function isBalanced(inp){
   
    for(i of inp){
        if(i == '[' || i == '{' || i=='('){
            stack.push(i)
        }
        else if((char=='(' && i==')') || (char=='[' && i == ']') || (char=='{' && i == '}')){
            stack.pop(i)
        }
        char = stack[stack.length-1]
        // console.log(stack)
        // console.log(char)
    }
    
    if(stack.length==0){
        return "Balanced"
    }
    else
    return "Unbalanced"
}

console.log(isBalanced('[{()}]'))
console.log(isBalanced('[(])'))
