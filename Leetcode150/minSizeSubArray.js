/**Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 */

function minSubAry(target,nums){
    let start=0
    let end=0
    let sum=0
    let minLen=Infinity

    while(start<nums.length){
        if(sum<target && end<nums.length){
            sum=sum+nums[end]
            end++
        }
        else if(sum>=target){
            minLen=Math.min(end-start,minLen)
            sum=sum-nums[start]
            start++
        }
        else{
            break
        }
    }
    return minLen

}

console.log(minSubAry(7,[2,3,1,2,4,3]))