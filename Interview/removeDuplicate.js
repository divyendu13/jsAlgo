//Remove Dupliacte from Array

let inp = [2,3,4,5,6,2,2,2,4,4,6,9]

console.log(inp.sort((a,b)=>a < b ? -1 : 1))
let op=[]
let i,j=1

for(i=0;i<inp.length-1;i++){
    if(inp[i]==inp[j]){
        j+=1
    }
    if(inp[i]!=inp[j]){
        op.push(inp[i+1])
    } 
}
console.log(op)