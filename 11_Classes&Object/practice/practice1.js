//we have to create a website for your college.
//create a clas User with 2 proprties name & email.it also has a method called viewData() that allows user to view website data.....
let Data ="website data";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data -> ", data);
    }
}

class Admin extends User{
    constructor(name,email){
    super(name,email);
    }
    editData(){
        Data = "some new value";
    }
}
// let student1 = new User("Utkarsh","abc.email.com");
// let student2 = new User("new","abcde.email.com");

// student1.viewData();
// student2.name;

let admin1 = new Admin("admin","admin@gmail.com");

