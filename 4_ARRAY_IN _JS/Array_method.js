//ARRAY METHOD OF JAVASCRIPT
//PUSH method -> add to end ....
//POP() method -> delete from end & return ....

let foodItems = ["potato","apple","banana"];

foodItems.push("paneer","burger","lichi"); //push method 

console.log(foodItems);

let deletedItem = foodItems.pop();
console.log("deleted" , deletedItem)

console.log(foodItems.toString());   //printing array in sstring ....


//concat method ..
let marvel_heroes = ["thor","ironman","spiderman"];
let dcHeros = ["superman" , "batman"];
let indianhero = ["shaktiman","krish"];
//it not change any individual array it just concat in new array....

let heroes = marvel_heroes.concat(dcHeros,indianhero);
console.log(heroes);


//unshift method ->used as push (in start)
marvel_heroes.unshift("Antman"); //add antman in start 

let value = marvel_heroes.shift(); //delete antman from start.....
console.log("deleted value",value);



//slice method -> sub array taking slice 
//last constraint in slice is not include (1 2);
console.log(marvel_heroes.slice(1, 3));
console.log(marvel_heroes.slice()); //it takes whole array
//it i also used to make copy of array

//splice method -> change in original array (add, remove, replace)

 let arr = [1,2,3,4,5,6,7];

 arr.splice(2,2,101,102); // adding element in array....
arr.splice(2,0,103);
 console.log(arr);

