/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
 */
//let nums = [-1,-2,-3,-4,-5], target = -8
//let nums = [1,2,7,11,15], target = 8
let nums=[1,3,4,2] , target =6

let i
let obj={}

for(i=0;i<nums.length;i++){
    obj[nums[i]]=i
}
console.log(obj)

for(i=0;i<nums.length;i++){
    const n=target - nums[i]
    if(obj[n] && i!=obj[n]){
        console.log(`${obj[n]} and ${i}`)
        return
    }
}
//console.log(`${i} and ${j}`)
