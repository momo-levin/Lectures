var start,finish;
function Machine(fuelPer100km, ownerName) {
    this.fuel = 0;
    var fuelPer100 = fuelPer100km;

    this.getMaxLength=function () {
        console.log(this);
        
       start =Date.now();
       
        return this.fuel / fuelPer100;

    }

    function onReady() {
        console.log("Let's continue!");
      finish =Date.now();
      
console.log((finish-start)/1000);
    }

    this.run = function () {

        setTimeout(onReady, this.getMaxLength()*100);

    };

}

var machine = new Machine(7, 'Ivan');
machine.fuel = 70;

machine.run();
console.log(start);
console.log(finish);

