//accepts a sorted array, count the unique values in the array

function cUv(inp){
    let count=0
    let pre=1
    for(let i=0; i<inp.length;i++){
        if(inp[i+1]!=inp[i]){
            count++
        }
    }
    return count
}

console.log(cUv([1,1,1,1,1,2])) //2
console.log(cUv([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(cUv([])) //0
console.log(cUv([-2,-1,-1,0,1,2])) //5