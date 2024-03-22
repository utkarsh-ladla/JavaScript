// perform some operation and reduce the array to a single CSSMathValue. it return that ingle value 
//arr.reduce((previous , current) =>
const arr = [1,2,3,4];

const sum = arr.reduce((res,curr)=>{
    return res+curr;
});

console.log(sum);

//largest element 

const largest = arr.reduce((res,curr) => {
    return res > curr ? res : curr;
})

console.log(largest);//4