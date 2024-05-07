/**
 * Input : nums1 = [1, 3, 3, 1], nums2 = [3, 3,2]
    Output: return [3, 3]
    Example 2: 
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [4,9]
 */
//let  nums1 = [1, 3,1], nums2 = [3,2]
let nums1 = [4,9,9,5], nums2 = [9,4,9,8,4]
let intersection = function(nums1,num2){
    let obj1={}
    let ary=[]

    for(i of nums1){
        obj1[i] = ++obj1[i] || 1
    }
    
    for(i of nums2){
        if(obj1[i]) {
            ary.push(i)
            obj1[i] -=1
        }
    }
    
    console.log(ary)
}

intersection(nums1,nums2)