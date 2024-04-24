// create a new array of element that give true for a condition ?filter
//ex. all even number 

let arr = [1,2,3,4,5,6,7,8];

let evenNumber = arr.filter((val) => {
    return val%2 ===0;
});

console.log(evenNumber);