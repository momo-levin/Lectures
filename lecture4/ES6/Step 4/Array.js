let a1=[1,2,3,4,5,6,7,8,9];
let e1,e2,e3;

[e1,e2,e3]=a1;


console.log(e1,e2,e3);
let [e4, ...eo]=[e1,e2,e3];
console.log(e4);
console.log(eo);
let [,,,,e5,e6]=a1;
console.log(e5);
console.log(e6);
let [,,,,,,,,,ed=666]=a1;
console.log(ed);
let e7,e8;
[,,,,,,e7,e8]=a1;
console.log(e7,e8);


var a=5;
var b=6;
a=a+b;
b=a-b;
a=a-b;


[e7,e8]=[e8,e7];
console.log(e7,e8);