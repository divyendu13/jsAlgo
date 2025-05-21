let s = "I have joined zoom"
let n = []
let op=[]

for(i of s){
  if(i!=" "){
    n.push(i)
  }
}

for(let i=0;i<s.length;i++){
  if(s[i]==" "){
    op[i] = " "
  }
  else{
    op[i]=n.pop()
  }
}

console.log(n)
console.log(op.join(""))