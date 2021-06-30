function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5


function random(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random());
console.log(random(10, 100));

function f1(v1,v2=5,v3){}

var result=f1(5,undefined,6)