/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 */


//let nums1= [1,2,3,0,0,0]
let nums1 = [2,0]
let m = 1
//let nums2 = [2,5,6]
let nums2 =[1]
let n = 1
//let nums3=[]
let i=m-1
let j=n-1
let k=m+n-1

while(i>=0 && j>=0){
    if(nums1[i]>nums2[j]){
        nums1[k]=nums1[i]
        i--
        k--
    }
    else{
        nums1[k]=nums2[j]
        j--,k--
    }
    while(j>=0){
        nums1[k] = nums2[j];
        j--; k--;
    }
}


console.log(nums1)