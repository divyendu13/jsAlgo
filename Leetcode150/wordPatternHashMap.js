var wordPatternHM = function(pattern, s) {
    try {
        if(typeof s != 'string'){
            throw "Invalid input type"
        }
        let patternHash = new Map()
        s=s.split(" ")
    
    if(pattern.length != s.length) return false
    for(let i=0;i<pattern.length;i++){
        if(patternHash.has(s[i]) && patternHash.get(pattern[i]) != s[i]){
            return false
        }
        else{
            
            patternHash.set(pattern[i],s[i])
        }
    
        
    }
    console.log(patternHash)
    
return true
    } catch (error) {
        return error

    }

}

let pattern = "abba"
let s =  "dog dog dog dog"
console.log(wordPatternHM(pattern,s))
