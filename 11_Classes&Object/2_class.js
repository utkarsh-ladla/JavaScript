// class is a program- code template for creating objects
//clascs 

class ToyotaCar{
    // constructor(){
    //     console.log("creating an object");
        
    // }
    constructor(brand,mileage){
        console.log("creating an object using parameterized constructor");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("car is starting" );
    }
    stop(){
        console.log("car is stop");
    }

    setBrand(brand){
        this.brand = brand;
    }


}

let fortuner = new ToyotaCar("fortuner",11);
console.log(fortuner);
let lexus = new ToyotaCar("lexus",12);
console.log(lexus);

