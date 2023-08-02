let input = [2,7,11,15] 
let Target=23 

function twoSum(inp,target){
    //an empty array to store output
    let index = []
    let diff 
    //subtracting target from first element and checking remainder exist in array
    for (var i=0;i<inp.length;i++){
        diff = target - inp[i];
        let j=inp.indexOf(diff)
        if(j>0 && j!=i){
            index.push(inp.indexOf(diff))
            index.push(i)
            if(index.length==2){break;}
        }
    }
    if(index.length==2){
        return index
    }
    else
    return "no match found"
    
}

console.log(twoSum(input,Target))