function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
} 

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 4000);
  });
}

console.log("getting data1.....");
let p1 = asyncFunc2();
p1.then((res) => {
    console.log("getting data2.....");
    let p2 = asyncFunc2();
    p2.then((res) => {
  });
});
//HERE FIRST DATA1 is execute then data2 is going to execute 
