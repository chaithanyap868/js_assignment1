var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter value of a '));
let b= parseInt(readlineSync.question('enter value of b  '));
let c=++a
console.log("value of c after pre incriment",c)
console.log("value of a after pre incriment",a)
let d=b++
console.log("value of d after post incriment",d)
console.log("value of b after post incriment",b)



