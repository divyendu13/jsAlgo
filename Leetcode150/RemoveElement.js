/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 *  The order of the elements may be changed.
 *  Then return the number of elements in nums which are not equal to val.
 */

let  nums = [0,1,2,2,3,0,4,2], val = 2

let k=nums.length-1
let index=0

for(i=0;i<=k;i++){
    if(nums[i]!=val){
        nums[index]=nums[i]
        index++
    }
    
}
console.log(index)