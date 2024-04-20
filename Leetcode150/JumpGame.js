/**
 * You are given an integer array nums. You are initially positioned at the array's first index, 
 * and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 */


//let nums = [1,2]
function jump(nums) {
  let targetnumIndex = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (targetnumIndex <= i + nums[i]) {
      targetnumIndex = i;
    }
  }

  if (targetnumIndex == 0) return true;
  else return false;
}

console.log(jump([2, 3, 1, 1, 4]))