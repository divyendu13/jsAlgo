//Global Execution Context 
//Call Stack
//Async func does not stay in call stack
//if the async func returns something and call stack is currently not empty , it puts it into Message Queue
//When call stack gets empty, JS checks for Message Queue
//JS engine creates the execution context in the call stack for the call back func and executes it
//this process is called Event Loop
