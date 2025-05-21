function atoi(s){
    let digits = [0,1,2,3,4,5,6,7,8,9]
    let op=""
    let flag
    for(j of s){
        let i=parseInt(j)
        if(j!==" "){
            if(j=="-"){
                flag='neg'
            }
            if(digits.includes(i)){
                if(i=="0"){
                    continue
                }
                else{
                    op=op+i
                }
                
            }
            else {
                if(isNaN(j) && j!="-" && j !="+"){
                    if(op=="") return 0
                    if(flag=='neg') return `-${op}`
                    else return op
                }
            }
        }
        if(j==" ") continue
        
    }
    if(flag=='neg') return `-${op}`
    else return op
}

console.log(atoi("42"))
console.log(atoi("  -042"))
console.log(atoi("1337c0d3"))
console.log(atoi("0-1"))
console.log(atoi("words and 987"))