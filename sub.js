var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter your first no '));
let b= parseInt(readlineSync.question('enter your second no '));
let sub= a-b
console.log("sub of ",a," and ",b,"=",sub)