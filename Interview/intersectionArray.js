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
    let obj2={}

    for(i of nums1){
        obj1[i] = ++obj1[i] || 1
    }
    
    for(i of nums2){
        obj2[i] = ++obj2[i] || 1
    }
    let ary=[]
    for(i in obj1){
        if(obj2[i]){
            // console.log(obj2[i])
            // console.log(i)
            let freq=Math.min(obj1[i],obj2[i])
            if(obj1[i]>1 ){
                for(j=0;j<freq;j++){
                    ary.push(i)
                }
            }
            else{
                ary.push(i)
            }
        }
    }
    
    console.log(ary)
}

intersection(nums1,nums2)