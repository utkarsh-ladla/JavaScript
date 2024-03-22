// let marks_student =97;
// let marks_student2= 82;

//create an object store marks..
/*let marks ={
    stud1: 97;
    stud2: 82;

}*/

//storing in arrays makrs ....
let name = []
let markss =[96,75,48,83,66];
let info =["rahul",86,"delhi"];// not prefer
console.log(markss);
console.log(markss.length)//property

let heroes=["ironman",'thor',"shaktiman",'spiderman'];
console.log(heroes);
console.log(typeof(heroes));//finding the type of somethingg;;

//printing in loops 
// loops ->iterable.....


    for(let i=0; i<heroes.length;i++){
        console.log(heroes[i]);
    }

    // for of 

    for(let hero of heroes){
        console.log(hero);
    }

    let cities =["delhi","pune","mumbai","begusarai"];
    for(let city of cities){
        console.log(city.toUpperCase());  //with upppercase ....

    }
