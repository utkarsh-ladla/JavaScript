let marks = [85,97,44,37,76,60];
let sum = 0;

for(val of marks){
    sum += val;
}

let avg = sum / marks.length;
console.log(sum/marks.length); 
console.log(`avg marks of the class = ${avg}`);


let item = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of item) {
//     console.log(`value of index ${i} = ${val}`);
//     let offer = val / 10;
//     item[i] = item[i] - offer;
//     console.log(`value after offer = ${item[i]}`);
//     i++;
// }

for(let i=0; i< item.length; i++){
    let offer = item[1] / 10;
    item[i] -= offer;
}

console.log(item);