/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.


Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

let nums = [2,2,1,1,1,2,2]
let obj={}
for(i of nums){
        obj[i] = ++obj[i] || 1
}
for(i in obj){
    if(obj[i]>nums.length/2){
        console.log(i)
    }
}
