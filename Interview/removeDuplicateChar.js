//Remove the duplicate character from strings
//inp = "Java"
//op Jav

let input = "java"
let op=[]
for(i of input.split("")){
    if(!op.includes(i)){
        op.push(i)
    }
}

console.log(op.join(''))