let s = "divyendu"

function longStr(str){
    let start=0
    let end=0
    let max=1
    let map = new Map()
    while(end<str.length){
        addToMap(map,str.charAt(end))
        while(start<end && !isValid(map)){
            deleteFromMap(map,str.charAt(start))
            start++
        }

        let length = end-start+1
        max = Math.max(length,max)
        end++
    }
    return max
}

function addToMap(map,ch){
    if(!map.has(ch)){
        map.set(ch,1)
    }
    else{
        map.set(ch, map.get(ch)+1)
    }
}

function deleteFromMap(map,ch){
    map.set(ch,map.get(ch)-1)
}

function isValid(map){
    let valid = true
    map.forEach((val,key) =>{
        if(val>1) valid=false
    })
    return valid
}

console.log(longStr(s)) 