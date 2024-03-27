// class is a program- code template for creating objects
//clascs 

class ToyotaCar{
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

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();