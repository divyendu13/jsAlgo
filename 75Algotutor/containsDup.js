function conDup(inp){
    let obj ={}
    for(let num of inp){
        obj[num] = ++obj[num] || 1
    }
    let objKeys = Object.keys(obj)
    for(let ob of objKeys){
        if(obj[ob]>1){
            return true
        }
        else 
        return false
    }
    
}

console.log(conDup([1,2,3,1]))
console.log(conDup([1,2,3,4]))
console.log(conDup([1,2,2,3,3,4,4,1]))