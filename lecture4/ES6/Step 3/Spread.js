function foo(x, y, z,f) {
 
    console.log(x, y, z);
}

let arr = [1, 2, 3,4,5,6,7,8,9];
foo(...arr); // 1 2 3

//foo(1, 2, 3,4,5,6,7,8,9);