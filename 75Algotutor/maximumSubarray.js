//int array nums, find the subarray with the largest sum and return its sum
let ary = [-2,1,-3,4,-1,2,1,-5,4]
//output = 6 , [4,-1,2,1]

function maxSubArray(ary){
    let total=0
    let max =ary[0]
    for(let i=0;i<ary.length;i++){
        total +=ary[i]
        max=Math.max(total,max)
        if(total<0){total=0}
        
    }
    return max
}

console.log(maxSubArray(ary))

