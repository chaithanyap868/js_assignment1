var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter your first no '));
let b= parseInt(readlineSync.question('enter your second no '));
let sum= a+b
console.log("sum of ",a," and ",b,"=",sum)