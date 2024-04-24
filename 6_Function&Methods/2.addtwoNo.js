//funtion adding two numbers

// function sum(a,b){
//     console.log(a+b);

// }
// sum(1,2);
// sum(2,3);

function sum(a,b){
    //local variable -> only in function scope..
    s = a + b;
    return s;    

}

//arrow function...(modern js)
const arrowSum = (a,b) => {
    console.log(a+b);
};

//arrow function of multiplication 
const arrowMul = (a,b) => {
    console.log(a*b);
}

const printHello = () => {
    console.log("hello");
}
sum(1,2);
sum(2,3);
arrowSum(1,2);
arrowMul(4,6);
printHello();








