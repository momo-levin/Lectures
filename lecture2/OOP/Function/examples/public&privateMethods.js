function wait() {
    var finaly = Date.now() + 5000;

    while (finaly > Date.now) {}
    console.log('sholom');
}


function Worker(name, lastname, age) {


    this.fullName = [name, lastname];
    this.age = age;
    var tenSecond = 10000;
    cry = function () {
        setTimeout(wait, 0);
        console.log('cry-cry-cry');
        setTimeout(function () {
            console.log('Finishing crying');
        }, 0);
    }
    this.layOff = function () {
        console.log('Begin crying');
        //setTimeout(cry, 0);
        cry();

    }
    this.random = function () {
        return Math.round(Math.random() * 5000)
    }

}
//console.log(logString);
var worker1 = new Worker('Ivan', 'Ivanov', 31);

worker1.layOff();