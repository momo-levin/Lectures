

function Worker(name, lastname, age) {
    var context=this;
    var length=100;
    this.fullName = [name, lastname];
    this.age = age;

    this.getAge = function () {
        if (age != undefined) {
            return this.age;
        } else console.log('Value is not defined');
    }

    this.setAge = function (value) {
        if (0 < age <= length) {
            this.age = value;
        } else console.log('Value is out of range');
    }


    this.toString = function () {
        var person = "";
        context.fullName.map(function (value) {
            person += value + " ";
        });
        return person + this.age + ' years old';
    }
    logString='Was created new person. It was ';
    console.log(logString+toString()+".");

  

}
//console.log(logString);
var worker1 = new Worker('Ivan', 'Ivanov', 31);

console.log(worker1.getAge());
worker1.setAge(32);
console.log(worker1.toString());

var worker2 = new Worker('Bugor');

console.log(worker2.getAge());
worker2.setAge(32);
console.log(worker2.toString());


