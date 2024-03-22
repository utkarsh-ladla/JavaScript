//create a new aray with the reult of some operation. 
//The value its callback returns are used to form new array

//arr.map(callbackFnx(value,index,array))

let arr=[1,2,3,4,5];

arr.map((val) =>{
    console.log(val);
});

let newArr = arr.map((val) => {
    return val*2;
})

console.log(newArr);

