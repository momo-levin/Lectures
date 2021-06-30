console.log(v1);
let v1=5;
let v1;
console.log(v1);
v1=5;



function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined