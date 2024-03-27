//A js object is an entity having state and behavior(properties and method)
//js object have a special property called prototype
// we can set prototype using --prto--

const student = {
    //createing student in direct way
    fullname :"Utkarsh Ladla",
    marks : 94.4,

    //implementing methods in code 
    printMarks: function(){
        console.log("marks = ",this.marks);
        //using this keyword means that object only ......
    }

 //every object which is created in js then it is special property name as prototype 
 //prototype is a type of object...  IN prototype their are several methods and functions ....
 //type of array-IN js array is a type of object ....




};

//making own prototype 
const employee={
    calTax(){
        console.log("tax rate is 10 %");
    }
};
const karanArjun = {
    salary: 50000,
    calTax(){
    console.log("Ttax rate is 10 %");
}
};

karanArjun.__proto__ = employee;   // used to add user defined prototype in object 

//reference of object.....
//if the method/function are defined in object as well as add in prototype then the class function is first preference.....




