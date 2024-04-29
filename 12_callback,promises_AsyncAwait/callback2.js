
function printInfo(name,callback){
    console.log("print"+ name)
    //asyn
    setTimeout(()=>{
         callback("I am hero")        
    },5000)
}

//callback function
function displayMessage(mesg){
    console.log(mesg)
}

printInfo("utkarsh",displayMessage)