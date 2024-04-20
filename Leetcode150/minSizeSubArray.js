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
    let sum=0
    let subary=[]
    let j=1
    for(let i=0;i<nums.length;i++){
         sum=sum+nums[i]
         subary.push(nums[i])
         while(j<nums.length){
            sum=sum+nums[j]
            if(sum==target){
                subary.push(nums[j])
            }
            else{
                j++
            }
         }
    }
    return subary.length
}

console.log(minSubAry(7,[2,3,1,2,4,3]))