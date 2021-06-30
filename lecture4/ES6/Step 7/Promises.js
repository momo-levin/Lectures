var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "один");
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, "два");
});


Promise.race([p1, p2]).then(function (value) {
    console.log(value); //"два"
    //Оба вернули resolve, однако p2 вернул результат первым
});

Promise.all([p1, p2]).then((value) => console.log(JSON.stringify(value)));
let x = 0;
let y = 1;
var p1 = Promise.resolve(3);
var p2 = Promise.reject("Promise Reject");
var p3 = new Promise((resolve, reject) => {
    if (x > y) {
        setTimeout(resolve, 100, "foo");
    } else {
        Promise.reject('ай-ай-ай');
    }
});
Promise.race([p1, p2, p3]).then(values => console.log(values + "it's cool"),
    error => console.log(error + "it's not cool")
);

var p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, "три");
});
var p4 = new Promise(function (resolve, reject) {
    setTimeout(reject, 500, "четыре");
});
Promise.race([p3, p4]).then(function (value) {
    console.log(value); //"три"
    //p3 быстрее, поэтому выведется значение его resolve
}, function (reason) {
    //Не вызывается
});

var p5 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "пять");
});
var p6 = new Promise(function (resolve, reject) {
    setTimeout(reject, 100, "шесть");
});
Promise.race([p5, p6]).then(
    function (value) {
        //Не вызывается
    },
    function (reason) {
        console.log(reason); //"шесть"
        //p6 быстрее, выводится его rejects
    }
);




Promise.resolve("Success")
    .then(x => {
        console.log("THEN1", x);
    })
    .catch(x => {
        console.log("CATCH1", x);
    })
    .then(x => {
        console.log("THEN2", x);
    })
    .catch(x => {
        console.log("CATCH2", x);
    });
//THEN1 Success
//THEN2 undefined

Promise.reject("Fail")
    .then(x => {
        console.log("THEN1", x);
    })
    .catch(x => {
        console.log("CATCH1", x);
    })
    .then(x => {
        console.log("THEN2", x);
    })
    .catch(x => {
        console.log("CATCH2", x);
    });
//CATCH1 Fail
//THEN2 undefined

Promise.reject("Fail")
    .then(x => {
        console.log("THEN1", x);
    })
    .catch(x => {
        console.log("CATCH1", x);
        return Promise.reject("B");
    })
    .then(x => {
        console.log("THEN1", x);
    })
    .catch(x => {
        console.log("CATCH2", x);
    })
    .then(x => {
        console.log("THEN2", x);
    });
//CATCH1 Fail
//CATCH2 B
//THEN2 undefined