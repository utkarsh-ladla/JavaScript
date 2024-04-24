//asyn awai >> promise chain >> callback hell -> better chain

//syncin js 
//it means that the code runs in a particular sequence of instructions given in the program Each instructiopn waits for 
//for the previous instruction to compiler its execution.....

console.log("one");    // instruction 1
console.log("two");    //instruction 2
console.log("three");  //instruction 3

//Asynchronous
//Due to synchrounous programming. sometime imp instruction get blocked due to previous instruction, which causes a delay in the UI.
//Asynchronous code execution allows to execute next instruction immediately and doesnt block the flow
function hello(){
    console.log("hello");
}
setTimeout(hello,4000);  //how much time u want to execute in miliseconnd
//it runing parallel
setTimeout(()=>{
    console.log("hello");
},2000);

console.log("four");    
console.log("five");




