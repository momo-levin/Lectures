function Person(name, lastname, age) {
    //создание пустого объекта
    fullName = [name, lastname];
    age = age;
    this.toString = function () {
        var person = "";
        fullName.map(function (value,t) {

            person += value + " ";
        });
        return person + age + ' years old';
    }
}


var egor = new Person('Egor', '1', 21);
console.log(egor);
console.log(egor.toString());
console.log(egor.age);
//console.log(egor);


Person.call(this,[]);
Person.apply(this,a,b,c);