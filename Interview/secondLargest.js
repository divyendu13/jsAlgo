//function to return the second largest number from array

let largest=0
let secLargest=0

function secondLargest(inp){
    for(i of inp){
        if(i>largest){
            secLargest = largest
            largest=i
            
        }
        else if(i<largest && i>secLargest){
            secLargest=i
        }
    }
    return secLargest
}

console.log(secondLargest([5,6,7,8,3,4,9]))