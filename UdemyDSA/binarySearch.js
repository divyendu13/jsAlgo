let nums=[1,3,5,6]
let start=0
let end=nums.length-1
let middle = Math.floor((start+end)/2)
console.log(middle)
let elem=5
while(nums[middle]!=elem && start<=end){
    if(elem<nums[middle]){
        end=middle-1
    }
    else start=middle+1
    middle=Math.floor((end+start)/2)
}
console.log(middle+1)