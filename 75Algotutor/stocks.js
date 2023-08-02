const inp1 = [7,1,5,6,3,4]

function maxProf(Prices){
    let days=Prices.length
    let min=Math.min(...Prices)
    let maxProf =0
    let Prof
     
     for(var i=0;i<days-1;i++){  
       Prof=Prices[i+1]-min
       if(Prof>maxProf){
         maxProf=Prof
       }
     }
     return maxProf
}

console.log(maxProf(inp1))