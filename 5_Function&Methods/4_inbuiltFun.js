//forEach loop in arrays
//it is a method  -> function which is assosiate with object like two upper case is apply on obj(string)

// arr.forEach(callBackFunction)
//function in js are also passed as argument and return as value

function abc(){
    console.log("hello");
}

//A callback is a function passed as an argument to another function ....
function myfun(abc){
    return abc;
}

// IN foreach method function to execute or each element in  the array

let arr=[1,2,3,4,5];  //also applied in string 

// arr.forEach(function printVal(val){//each value at each index

//     console.log(val);
// });

arr.forEach((val)=> {    //parameter ued val, idx, arr in forEach
    console.log(val);
})

// what is higher order function 
//those function use function or method as parameter or return function 



