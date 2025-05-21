let A=[5,4,3,-1,-3]
let C = [1,3,6,4,1,2]
let D = [1,2,3]
let F = [3,4,1]
let G = [7,8,9,10] 
let H = [2,4,6,10,12]


function mis(M){
  let n=2
  let B = M.sort()
  for(i of B){
    if(i==n){
      n=n+2
    } 
}
return n
  
}

// console.log(mis(A))
// console.log(mis(C))
// console.log(mis(D))
console.log(mis(H))


//1,2,3,5,6,7
