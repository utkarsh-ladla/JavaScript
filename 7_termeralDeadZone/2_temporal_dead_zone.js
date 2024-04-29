
try{
console.log(marks)      //let and const can't access before in declaration -hoisting 
}catch(error){
    console.error(error)
}
console.log("hello")    //temporal dead zone for marks not in reach    
console.log("hello2")   //temporal dead zone for marks not in reach
console.log("hello3")   //temporal dead zone for marks not in reach
let marks =100;
console.log(marks)



