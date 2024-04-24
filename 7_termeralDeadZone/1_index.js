//global scope
//  variable create in global scope are posssible to use anywhere in file
var age =15;  

//function scoping 
//when we declare any variable in function then it is only used in that particular function 
//not used in outer of functions

function sayHello(){
    var fullname = "earth"
    console.log("hello duniya " , fullname)
}
sayHello();


//block scope
//var is not block scope that means it is also used in out side of block
//if we operate var above the declaration it hoisted but value is undefined
//let and const are block scope that means it is only access in respected block

console.log(height)         //undefined
{
    var height = 180

}
console.log(height)          //value 

