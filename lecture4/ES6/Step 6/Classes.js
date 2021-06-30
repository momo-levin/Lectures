class Rectangle {
    constructor(height, width) {
      this.name = 'Rectangle';
      this.height = height;
      this.width = width;
    }
    sayName() {
      console.log('Hi, I am a ', this.name + '.');
    }
    get area() {
      return this.height * this.width;
    }
    set area(value) {
      this.height = this.width = Math.sqrt(value);
    }
  }
let r= new Rectangle(5,6);
console.log(r.area);
  
  class Square extends Rectangle {
    constructor(length) {
      this.height; // ReferenceError, super needs to be called first!
  
       super(length, length);
  
       this.name = 'Square';
    }
  }