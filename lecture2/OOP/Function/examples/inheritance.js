function Person(name, age){
    
    name = name;
    age = age;
    this.getName = function(){
        return name;
    }
    this.getAge = function(){
        return age;
    }
}
var p=new Person(1,2,3,4,5,6,7,8,9);

function Student(course, group, name, age) {
    //var vars=[name,age];
    /*Person.apply(this,vars);//{}*/
    //Person.apply(this);
    Person.call(this,name,age)
    this.course = course;
    this.group = group;
}

function Worker(name, age){
   
    
    Person.call(this,name,age)
}

var student = new Student(1, 1,'vasya',5,'petrov');
console.log("555"+student.getName()+"555");
student.name = 'Peter';
student.age = 24;
console.log(student.name);//Peter
console.log(student.group);//1







function sum(a1,a2){
    var s=0;
    for(var i=0;i<arguments.length;i++){
        s+=arguments[i];
    }
    return s;
}
var p=sum(1,2,3,4,5,6,7,8,9);