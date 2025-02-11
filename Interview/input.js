const prompt = require('prompt-sync')();

const a = prompt('Enter first num ');
console.log(`this is ${a}`);

const b = prompt('Enter second num ');
console.log(`this is ${b}`);

console.log(`sum is ${Number(a) + Number(b)}`)

