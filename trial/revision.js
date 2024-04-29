
function greet(name,callback){
    console.log("I am " + name)
    callback()
}

//callback function
function wellcome(){
    console.log("welcome to my page ")
}

greet('utkarsh', wellcome)