//Print even length word from the string

let input = "Sky is blue and vast"
//op is blue vast

for(i of input.split(" ")){
    if(i.length%2==0){
        console.log(`${i}`)
    }
}