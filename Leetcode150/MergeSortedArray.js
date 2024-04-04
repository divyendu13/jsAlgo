/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 */


let nums1= [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3
let nums3=[]

for(let i=0;i<m+n;i++){
    if(i<n){
        if(nums1[i]>nums2[i] || nums1[i]==nums2[i]){
            // nums1[i+1]=nums1[i]
            // nums1[i]=nums2[i]
            
           nums3.push(nums2[i])
           nums3.push(nums1[i])
        }
        else if(nums1[i]<nums2[i]){
            //nums1[i+1]=nums2[i]
            nums3.push(nums1[i])
            nums3.push(nums2[i])
        }
    }
}



console.log(nums3)