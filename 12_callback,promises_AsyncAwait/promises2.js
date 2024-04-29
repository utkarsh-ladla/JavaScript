const randomNUmbeerPromise = new promise((resolve, reject) => {
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve(randomValue);
    } else {
      reject(new Error("value is to small"));
    }
  }, 2000);
});

randomNUmbeerPromise
.then((result) => {
    console.log("promise fullfilled")
})
.catch(error=>{
    console.error("promese rejected")
})
