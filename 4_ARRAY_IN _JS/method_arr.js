// built in methods in arrays 
// push- insert at end
// pop - remove last item
// shift - remove first item
// unshift - add first item 
// slice  - new part of array (from, to - 1)
// splice - change the array content insrt,replace (fromt ,remove element, insert content)
// map - taking every element and do process
// filter - filtering data on basic of functions 
// reduce - accumulator default first if initialize 0 and c urrent is in next of accumulator
// sort - sorited the element 
//for decending order we use ths numbers.sort((a, b) => b - a);
// .indexOf(); - giving the index of value 
// find



// let foodItems = ["potato","apple","banana","litchi","mango","papaya","guava"];

// foodItems.splice(1,0,"cake");

// // foodItems.map((number) => {
// //     return ""
// // })

// console.log(foodItems)


//map
// let arr = [10,20,30,33,40,50]
// let evenArr = arr.filter((number)=>{
//     if(number%2==0){
//         return true
//     }
//     else{
//         return false;
//     }
// })

// //reduce
// let ans = arr.reduce((acc,curr)=>{
//     return acc + curr;
// },0)//acc value 


//find 
// let find = arr.find(num => num > 30);
// console.log(find)

//important 
//foreach - travering in all over the arraqy
//lenght - finding the length of array
//we also use traditional for loops in javascripts

let arr = [10,20,30,40]

arr.forEach((value, index) => {
    console.log("Number", value , "Index" , index)
})

let len = arr.length;
console.log(len)