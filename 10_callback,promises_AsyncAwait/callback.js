function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumcallback){
    sumcallback(a,b);

}
//call back are those function which is passed as an argument is known as call back function 
//those function which is passed as argument in a function are called as call back function ....
//call back function in not passed with parenthesis()...

calculator(1,2,(a,b)=>{
    console.log(a+b);
});

// callback HELL -> Nested callback stacked below one another forming a pyramid structure (pyramid of doom)
// this style of programing becomes difficult to understand & manages

function getData(dataId,getnxtData) {
    setTimeout(()=>{
        console.log("data",dataId);
        if(getnxtData){
            getnxtData();
        }
        
    },2000);
    
}

//callback hell  
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});

// getData(124);
// getData(125);

// for solving or making it easy we use promises.....



