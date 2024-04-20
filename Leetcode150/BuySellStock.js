let prices = [1,2]
let buyDay = 0
let sellDay = 1
let maxProfit=0

    while(sellDay<prices.length){
       
        if(prices[buyDay]<prices[sellDay]){
            let difference=prices[sellDay] - prices[buyDay]
            maxProfit = Math.max(difference,maxProfit)
            
        }
        else{
            buyDay=sellDay
        }
        sellDay++
    }

console.log(maxProfit)