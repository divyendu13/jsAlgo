//Reverse a String given that spaces remain at there places
//inp = this is a phone
//op = enoh pa s isiht

let inp = "I have joined zoom"
let op= ''
let j =[]

for(let i=0;i<inp.length;i++){
    if(inp.charAt(i)==' '){
       j.push(i)
    }
}
console.log(j)

for(let k=0;k<=inp.length;k++){
    if(inp.charAt(inp.length-k)!==' '){
        op=op+inp.charAt(inp.length-k)
    }
}

for(k of j){
   op=op.slice(0,k) + " " + op.slice(k)
}
console.log(op)




