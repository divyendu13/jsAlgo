//Global Execution Context 
//Call Stack
//Async func does not stay in call stack
//if the async func returns something and call stack is currently not empty , it puts it into Message Queue
//When call stack gets empty, JS checks for Message Queue
//JS engine creates the execution context in the call stack for the call back func and executes it
//this process is called Event Loop

function print1(){
    const number=1
    console.log(number)
}

function print2(){
    function number2(){
        return 2
    }

    const number=number2()
    console.log(number)
}

function print3(){
    const fs = require('fs')
    // fs.readFile('D:\\repos\\jsAlgo\\Promises\\readFile.txt','utf-8',function(err,number3){
    //     console.log(number3)
    // })
    const number3 = fs.readFileSync('D:\\repos\\jsAlgo\\Promises\\readFile.txt',{encoding:'utf-8'})
    console.log(number3)
}

function print4(){
    const number4=4
    console.log(number4)
}

print1()
print2()
print3()
print4()

