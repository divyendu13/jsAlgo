let simplePath = function(path){
    let stck=[]
    let directory= path.split("/")
    for(const i of directory){
        if(i==='.' || !i) continue
        else if(i==='..'){
            if(stck.length>0){
                stck.pop()
            }
        }
        else{
            stck.push(i)
        }
        
    }
    return '/'+stck.join('/')
}

console.log(simplePath("/a/./b/../../c/"))

