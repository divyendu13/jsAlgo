var wordPattern = function(pattern, s) {
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

}

let pattern = "abba"
let s =  "dog cat cat dog"

console.log(wordPattern(pattern,s))