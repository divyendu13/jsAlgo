/**
 * Three states - Pending, Fullfilled, Reject.
 * Fullfilled and Reject are final state
 */

function sqNumber(num){
    const promise=new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(typeof num != 'number'){
                return reject(new Error('Argument of type number is expected'))
            }
            const result = num*num
            resolve(result)
        },1000)
    })
    return promise
}

sqNumber('5').then((value)=>{
    console.log("Success "+value)
},reason =>{
    console.log('Error '+ reason)
})