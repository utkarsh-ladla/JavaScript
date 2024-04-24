//asyn function always return a promise 
//async function myfunc(){....}
//await pause the execution of its surrounding async function untill the promise is settled...
// we only use await function in async function 

async function hello(){
    console.log("hello");
}

function api(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log("wheather report");
            resolve("succes");
        },2000)
    });
}
hello();

async function getWhetherData(){
    await api();//1st
    await api();//2nd
}


function getData(dataId, getnxtData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            if (getnxtData) {
                getnxtData();
            }
            resolve(dataId);
        }, 2000);
    });
}

async function getAlldata(){
    console.log("GETTING DATA 1....");
    await getData(1);
    console.log("GETTING DATA 2....");
    await getData(2);
    console.log("GETTING DATA 3....");
    await getData(3);
    console.log("GETTING DATA 4....");



}
getAlldata();
// getWhetherData();
// hello();
