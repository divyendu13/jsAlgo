//sliding window example
//O(n) complexity
//function accepts an array and int n, return the max sum of n consecutive number in array

function maxSub(inp, k){
    let temp=0
    let max=0
    for(let i=0;i<k;i++){
        max +=inp[i]
    }
    temp=max
    for(let i=k;i<inp.length;i++){
        temp=temp - inp[i-k] + inp[i]
        //console.log(max)
        max=Math.max(max,temp)
    }
    return max   
}

console.log(maxSub([1,2,8,4,5,2,6,7,1],3))