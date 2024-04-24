//passing doqn properties & methods from parent class to child class 
//extending the properties ....

class parent{
    hello(){
        console.log("hello");
    }
}

class child extends parent{    //extends used forinheritance in js

}

class person{
    constructor(){
        console.log("enter paernt constructor");
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eating");
    }
    sleep(){
        console.log("sleeping");
    }
    work(){
        console.log("do nothing");
    }
}

class engineer extends person{
    //having same function of parent and child class then child class fun run and have priority
    //method overriding....
    constructor(name){
        super();   //to onvoke parent constructor
        this.branch = branch;
        this.name =name ;
        console.log("ext")

    }
    
    work(){
        super.eat();  //for using the method and peroperties ....
        console.log("coding");
    }
}
let hi = new child;
hi.hello();

let utkarsh= new engineer;
utkarsh.sleep();

let p1 = new person;
let e1 = new engineer;

// /super keyword -> The super keyword is used to call the constructor of its parent class to access the parent's properties and methods;
// it i necccessary to use super when we derived constructor in child class before this keyword as well as exit from constructor



