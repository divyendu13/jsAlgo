/**
 * input = [-2,1,-3,4,-1,2,1,-5,4]
 * op = 6
 * 
 */

function maxSubarray(nums){
    let maxSoFar = nums[0]
    let currentSum = nums[0]

    for(let i=1;i<nums.length;i++){
        if(currentSum<0) currentSum=0
        currentSum += nums[i]
        maxSoFar = Math.max(currentSum,maxSoFar)
    }
    return maxSoFar
}

console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))