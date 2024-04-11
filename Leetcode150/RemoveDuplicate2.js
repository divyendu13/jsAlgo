/**
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place 
 * such that each unique element appears at most twice. The relative order of the elements should be 
 * kept the same.

Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums. More formally, 
if there are k elements after removing the duplicates, then the first k elements of nums should hold the 
final result. 
It does not matter what you leave beyond the first k elements.

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
 */


let nums = [1,1,1,2,2,3]
let index=2


for(let i=2;i<nums.length;i++){
    if(nums[i]!==nums[index-1] || nums[i]!==nums[index-2]){
        nums[index]=nums[i]
        index++
    }
}

console.log(nums)