//taking attributes of element 

let div =document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttributes)

console.log(div.style);
div.style.backgroundColor = "green";  //same as css but used in js 
div.style.fontSize="26px";

//inserting and deleting element 
//insert  
let newBtn = document.createElement("button");
newBtn.innerText= "click me";
console.log(newBtn);

div.append(newBtn);   //append is used to add element in last node 
// div.prepend(newBtn);  //prepend is used to add element in starting ....
// div.before(newBtn);   //add before the node(outside)
// div.after(newBtn);    //adds after the node(outside)

let newHeading = document.createElement("h3");
newHeading.innerHTML = "<i> HI, i am new!</i>";

document.querySelector("body").prepend(newHeading);

//delete node
//node.remove()   remove the node....

let para = document.querySelector("p");
para.remove();

newHeading.remove();