console.log('hi!');
console.error('hi!');
alert('hi!');
var t=prompt('hi for who?');
console.log(t);

var sayHi=function (name){
    console.log('hi ' + name);
}
sayHi('Juja');

var a=5;
var computer;//visualization of bubbling with function declaration

switch(a){
    case 5: 
    computer = function (){
        console.log(5);
    }
    break;
    case 6:
    computer = function (){
        console.log(6);
    }
    break;
}

computer();//6
 
function Computer(){
    this.a=4;
    b=4;

}
var obj=new Computer();
console.log(obj.a);
console.log(obj.b);//undefind