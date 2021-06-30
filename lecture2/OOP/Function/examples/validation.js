function Person(name, lastname, age) {
    this.fullName = [name, lastname];
    this.age = age;

    this.getAge = function () {
        if (this.age != undefined) {
            return this.age;
        } else console.log('Value is not defined');
    }

    this.setAge = function (value) {
        if (0 < this.age <= 120) {
            this.age = value;
        } else console.log('Value is out of range');
    }


    this.toString = function () {
        var person = "";
        this.fullName.map(function (value) {
            person += value + " ";
        });
        return person + this.age + ' years old';
    }


    console.log('Was created new person. It was '+this.toString());
}

var worker1 = new Person('Ivan', 'Ivanov', 21);

console.log(worker1.getAge());
worker1.setAge(22);
console.log(worker1.toString());

var worker2 = new Person('Bugor');
console.log(worker2.toString());
console.log(worker2.getAge());
worker2.setAge(22);
console.log(worker2.toString());

