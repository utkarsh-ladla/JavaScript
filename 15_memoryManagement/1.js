//stack - it store the primitive datatype
            //variable store in it store value 
//heap - It store Non Primitive datatype
            //It uses the reference


let myName = "utkarsh"          //store in stack

let secondName = myName         //copy is passed here
secondName = 'sunny'
console.log(myName)
console.log(secondName)


let user = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user    
user2.email = "user2@gmail.com"

console.log(user.email)            //same reference 

console.log(user2.email)           //change in both 