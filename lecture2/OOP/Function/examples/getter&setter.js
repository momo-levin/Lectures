function Person(name, lastname, age) {
    this.fullName = [name, lastname];
    age = age;

    this.getAge=function(){
        return age;
    }

    this.setAge=function(value){
        this.age=value;
    }

    this.toString = function () {
        var person = "";
        this.fullName.map(function (value) {
            person += value + " ";
        });
        return person + age + ' years old';
    }
}

var egor = new Person('Egor', '1', 21);

console.log(egor.toString());
console.log(egor.getAge());