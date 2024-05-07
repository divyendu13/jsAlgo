var wordPatternHM = function(pattern, s) {
    try {
        if(typeof s != 'string'){
            throw "Invalid input type"
        }
        let patternHash = {}
    let stringHash = {}
    s=s.split(" ")
    
    if(pattern.length != s.length) return false
    for(let i=0;i<pattern.length;i++){
        if((pattern[i] in patternHash && stringHash[s[i]] != pattern[i]) || (s[i] in stringHash && patternHash[pattern[i]] != s[i])){
            return false
        }
       else{
            patternHash[pattern[i]]=s[i]
            stringHash[s[i]]=pattern[i]
        }
        
    }
    console.log(patternHash)
    console.log(stringHash)
    
return true
    } catch (error) {
        return error

    }

}

let pattern = "abba"
let s =  123
console.log(wordPatternHM(pattern,s))
