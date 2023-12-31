/**
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

    maxSubarraySum([100,200,300,400], 2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3], 3) // null
 */

    function maxSubarraySum(ary,size){
        let max=0
        let temp
        if(size>ary.length) return null
        for(let i=0;i<size;i++){
            max += ary[i]
        }
        temp=max
        for(let i=size;i<ary.length;i++){
            temp =  temp - ary[i-size] + ary[i]
            if(temp>max){
                max=temp
            }
        }
        return max
    }

    console.log(maxSubarraySum([100,200,300,400], 2)) //700
    console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
    console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
    console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
    console.log(maxSubarraySum([2,3], 3) )// null)