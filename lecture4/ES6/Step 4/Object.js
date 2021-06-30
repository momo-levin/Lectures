/* const human={
    name:'Egor',
    lastname:'Bugor',
    gender:'male',
    age:'21'
}
let {lastname,name}=human;


console.log(lastname);


let{name:pogremuha}=human;


console.log(pogremuha);

let{status:workerStatus='Faired!'}=human;

console.log(workerStatus);



let valueName='age';
let{[valueName]:smth}=human;
console.log(smth);


 */

/* arr=[ 'Tony', 'Stark',  1 , 45, 2, 5, 34, 9, 11] */
/* let [name,lastname,...others]=arr;
let sum=0;
others.forEach(element=>sum+=element);
console.log(sum);

 */

/* function User(name) {
    //this={};
    this.name = name;
    this.isAdmin = false;
    //return this;
}
let user = new User("Вася");
console.log(user.name); // Вася
console.log(user.isAdmin); // false */


console.log((Date.now() - Date.parse("1999-02-12T09:09:09.999"))/1000/3600/24/365);