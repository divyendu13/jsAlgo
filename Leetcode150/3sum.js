/**
 * Given an integer array nums, 
 * return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
 */

var threeSum = function(nums){
    nums.sort((a,b) => {return a-b})
   // console.log(nums)
    let arr=[]
    if(nums.length<3) return arr
    for(let i=0;i<nums.length-2;i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let left=i+1
        let right=nums.length-1
        while(left<right){
            let sum=nums[left]+nums[i]+nums[right]
            if(sum==0){
                arr.push([nums[left],nums[i],nums[right]])
                while(nums[left]==nums[left+1]) left++
                while(nums[right]==nums[right-1]) right--
                left++
                right--
            }
            if(sum>0){
                right--
            }
            if(sum<0){
                left++
            }

        }

    }
    return arr
}

// console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,0,0]))