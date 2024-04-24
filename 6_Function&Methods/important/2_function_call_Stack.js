//function call stack 
//as we know that stack is dataStructuere follow LIFo approach 

//having lot of functions 
//when a function call it traced in stack memeory
//when function return then traced function call is poped....

//why function known as first class citizen
//because - assign to variable
// - we  use it value 
//- return function
//- we use function dsa
//-we give some property

//assigning function
let greet= function(){
    console.log("greeting for the day")
}

// greet();

//
function greetMe(greet, fullName){
    console.log("hello", fullName)
    greet()
}
greetMe(greet,"utkarsh")


//returning function
function solve(number){
    return function(number){
        return number*number;
    }
}

let ans  = solve(5)   //ans is traeated as function
let finalAns = ans(10)   //final function 
console.log(finalAns)


//function in arrays 
const arr = [
    function(a,b)
    {
        return a+b
    },
    function(a,b)
    {
        return a-b
    },
    function(a,b)
    {
        return a*b
    }
]

let first = arr[0];
let second = arr[1]
let ans0  = first(5,10);
let ans1=second(10,5)
console.log(ans0)
console.log(ans1)


//using function in object
let obj = {
    age : 25,
    wt : 36,
    ht : 170,
    greet: ()=>{                //function in object
        console.log("hello")
    }

}
// console.log(obj.age)
obj.greet()



console.log(greeting);
var greeting = function () {     //var hoste the variable top of file 

    console.log("Nameste duniya ")
}