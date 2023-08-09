//int array nums, find the subarray with the largest product and return its product
let ary = [2,3,-2,4]
//output = 6 , [2,3]
let ary2 = [-2,0,-1]
//op 0

function maxProdarray(ary){
    let total=1
    let max =ary[0]
    for(let i=0;i<ary.length;i++){
        total *=ary[i]
        max=Math.max(total,max)
        if(total<0){total=1}
        
    }
    return max
}

console.log(maxProdarray(ary))
console.log(maxProdarray(ary2))

