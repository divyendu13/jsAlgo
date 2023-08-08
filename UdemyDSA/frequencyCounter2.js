/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
 */

function sameFrequency(a,b){
        let obj1={}
        let obj2={}
        a=a.toString()
        b=b.toString()
        if(a.length != b.length){return false}
        for(let char of a){
            obj1[char] = ++obj1[char] || 1
        }

        for(let char of b){
            obj2[char] = ++obj2[char] || 1
        }

        let Obj1keys=Object.keys(obj1)
        for(let key in Obj1keys){
            if(obj1[key] !== obj2[key]){
                return false
            }
        }
       return true

}


console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false

