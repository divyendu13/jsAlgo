//multiple pattern approach
//sorted array, find num whose sum is zero

function sumZero(inp){
        let out =[]
        let right=inp.length-1

        for(let i=0;i<right;i++){
            if(inp[i]+inp[right] ==0){
                out.push(inp[i])
                out.push(inp[right])
            }
            else
            right -=1
        }
        return out
}


console.log(sumZero([-3,-2,-1,0,1,2,3]))  //[-3,3]
console.log(sumZero([-2,0,1,3])) //undefined
console.log(sumZero([1,2,3]))  //undefined