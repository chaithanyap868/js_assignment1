var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter your first no '));
let b= parseInt(readlineSync.question('enter your second no '));
let modulus= a%b
console.log("modulus of ",a," and ",b,"=",modulus)