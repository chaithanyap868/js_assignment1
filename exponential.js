var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter your first no '));
let b= parseInt(readlineSync.question('enter your second no '));
let exponential= a**b
console.log("exponential of ",a," and ",b,"=",exponential)