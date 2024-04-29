//compile time error
//syntax error 


//runtime error
//reference error 


//error handling 
//try and catch(most used)
try {
    console.log(x)         //if error come then catch execute
    //a                     //if error come then others line is not going to execute

    //b                      
} catch (error) {
    //define what happen when error come 
    //eg
    //retry error
    //fallback mechanism
    //logging
    //custom error
    console.log("I am inside catch block b")
    console.log("your errpr is here",error)
}
finally{
    console.log("I am finally block i run every time")
}

//finally block 
//this will run every time






