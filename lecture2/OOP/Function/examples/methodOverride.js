function Student(course, group) {
    Person.call(this);
    this.course = course;
    this.group = group;
    this.getAge = function () {
        return this.age + ' лет';
    }
}
var student = new Student(1, 1);
student.age = 30;
console.log(student.getAge()); //30 лет
