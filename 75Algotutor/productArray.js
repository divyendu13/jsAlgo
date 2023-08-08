let inp = [1,2,3,4]

function prod(inp){
  let output=[...Array(inp.length)].fill(1)
  function recurse(n,temp=1){
  
  if(n===inp.length-1){
    output[n]=temp
    console.log(inp[n])
     return inp[n]
  }
  
  const multiplier = recurse(n+1,temp*inp[n])
  console.log("multiplier "+multiplier)
  output[n]=temp*multiplier
  return multiplier * inp[n]
}

recurse(0,1)
return output
}

console.log(prod(inp))