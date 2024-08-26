

let s = "ADOBECODEBAN", t = "ABCC"

function minWindow(s,t){
        let obj1 = {}
        let obj2 = {}
        let l,r = 0
        let max=0
        for(i of t){
            obj1[i]= ++obj1[i] || 1
        }

        while(r<s.length){
            let c=s[r]
            if()
        }

        console.log(obj1)
        console.log(obj2)

       console.log(checkContains(obj1,obj2))

}

function checkContains(ob1,ob2){
    let flag = true
    for(i in ob1){
       
       if(ob2[i]<ob1[i]){
        flag= false
       }
    }
    return flag
}

minWindow(s,t)