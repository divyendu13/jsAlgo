// input [1,2,3] [4,1,9] - true
//input [1,2,3] [1,9] - false
//input [1,2,1] [4,4,1] - false

function same(a,b){
    let obj1 = {};
    let obj2 = {};
    if(a.length!=b.length) {return false}
    for(var num of a){
        obj1[num*num] = ++obj1[num*num] || 1
    }
    
    for(var num of b){
        obj2[num] = ++obj2[num] || 1
    }

    // if(JSON.stringify(obj1)===JSON.stringify(obj2)){ return true} //not true always when order is changed
    // else {return false}  
    //shallow comparison will always work. if need deep equality, use lodash _.isEqual
    const obj1keys = Object.keys(obj1)
    for(let objkey of obj1keys){
        if(obj1[objkey] !== obj2[objkey]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3],[4,1,9]))
console.log(same([1,2,3],[1,9]))
console.log(same([1,2,1],[4,4,1]))