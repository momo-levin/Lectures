function sum(x1, x2) {
    console.log(this);
    console.log('function sum(x1, x2)');
    return x1 + x2;
}

sum(1, 2);

var obj = {
    mult: function (x1, x2) {
        console.log(this);
        console.log('obj.mult: function (x1, x2)');
        return x1 * x2;
    }
}

obj.mult(1, 2);

var selfCallingfunction = (function () {
   
    var privateMethod = function () {
        console.log('privateMethod');
        console.log(this.a);
        console.log(this);
    }
    return {
        publicMethod: function () {
            var a=19;
            that=this;
            console.log('publicMethod');
            console.log(this);
            privateMethod();
            console.log('that');
            privateMethod.apply(that);
            console.log(this);
        },
        publicMethodCallPrivateMethod: privateMethod

    }
})();

//selfCallingfunction.privateMethod();
selfCallingfunction.publicMethod();
selfCallingfunction.publicMethodCallPrivateMethod();

var callingFunction=function(){
    console.log('callingFunction');
    console.log(this);
    console.log(arguments[0]+arguments[1]);
}

callingFunction(1,2);
callingFunction.call(obj,1,2)
callingFunction.apply(obj,[1,2])

