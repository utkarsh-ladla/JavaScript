//promises is for"eventual" completion of task.It is an object in js.
//it is a solution to callback hell;

// let promise = new promise((resolve,reject)=>{})


let promise = new Promise((resolve, reject) => {
    console.log("i am a promise");
    // resolve(123);
    // resolve("success");
    // reject("some error occured");   //showing userdefined error 

});

function getData(dataId,getnxtData) {
    return Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            if(getnxtData){
                getnxtData();
            }
            
        },2000);
    });
   
    
}

//A js promise object can be 
//->pending :the result is undefined 
//->resolved : the result is a value 
//-> Rejected: the result is an error object...

// promise has state(pending,fulfilled)& some (result fgor resolve & error for reject)....

//using promises 
//.the() & .catch()
//promise.then((res)=>{})
//promise.catch((sol)=>{})....

const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        resolve("success");
    });
};
let promise = getPromise();
promise.then(()=>{
    console.log("promise fullfilled");
})