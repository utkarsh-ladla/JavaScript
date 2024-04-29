//variable hositing 
//Variable hoisting in JavaScript is a behavior where variable declarations (but not assignments) 
//are moved to the top of their containing scope during the compilation phase. This means that you
// // can use a variable before it's declared in your code without encountering an error.
// console.log(age)//run
// var age = 18;//age assign value 
// console.log(age)

//but its only in var keyword not applied in let and const  
//if we not declarded it fbefore use then it shoes errors
//function hosting 

//Function hosting, also known as hoisting, is a JavaScript mechanism where 
//function declarations are moved to the top of their containing scope during 
//the compilation phase, regardless of where the actual declaration appears in the code.

//but both in same scope 
// say()
sayName()

function sayName(){
    console.log("Utkarsh Ladla")
}

// //if we use function expression that mean putting it into variable then it not worings
// var sayName = function say() {
//     console.log("Utkarsh Ladla")
//     //shows reference error 
// }
// sayName()
// say()








