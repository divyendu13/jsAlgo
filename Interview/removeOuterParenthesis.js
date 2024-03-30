//Reduce string by removing outermost parentheses from each primitive substring

let  S = "(()())(())()" 
let Output= "()()" 
let countOpen=0
let countClose=0
let Op=""
let k=0

for(let i=0;i<S.length;i++){
    if(S[i] == "("){
        countOpen++
    }
    if(S[i] == ")"){
        countClose++
    }
    //console.log("At "+i+" "+countClose + " close nd open "+ countOpen)
    if(countOpen==countClose && countClose>0 && countOpen>0){
        Op=Op+S.slice(k+1,i)
        k=i+1
        countOpen=0
        countClose=0
    }
}
console.log(Op)