var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

elements.map(function (element) {
    return element.length;
});


elements.map(   () => {return element.length}   );

elements.map(element => {
    return element.length;
}); 


elements.map(element => element.length+234); 


elements.map(({
    length
}) => length); 




let sort=function(a,b,fieldName){
(a[fieldName]>b[fieldName])
}

let obj={
    name:"vasya",
    lastname:"pupkin"
}
let str="lastname";
obj[str]