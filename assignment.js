var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter your no '));
let b= parseInt(readlineSync.question('enter another no '));
b=a
console.log("value of b after assignment",b)
let c= parseInt(readlineSync.question('enter your no '));
let d= parseInt(readlineSync.question('enter another no '));
d+=c
console.log("value of d after addition assignment",d)
let e= parseInt(readlineSync.question('enter your no '));
let f= parseInt(readlineSync.question('enter another no '));
f-=e
console.log("value of f after sub assignment",f)
let g= parseInt(readlineSync.question('enter your no '));
let h= parseInt(readlineSync.question('enter another no '));
h*=g
console.log("value of h after mul assignment",h)
let i= parseInt(readlineSync.question('enter your no '));
let j= parseInt(readlineSync.question('enter another no '));
j/=i
console.log("value of j after div assignment",j)
let l= parseInt(readlineSync.question('enter your no '));
let m= parseInt(readlineSync.question('enter another no '));
m%=l
console.log("value of m after mod assignment",m)
let n= parseInt(readlineSync.question('enter your no '));
let o= parseInt(readlineSync.question('enter another no '));
o **=n
console.log("value of o after  exp assignment",o)
