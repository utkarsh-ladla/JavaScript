// whaen a web page is loaded, the browser creates a dOcument Object Model(DOM) of the page 

// console.log->ued for print 
//document is model or representation of html code which is derived in js

// console.dir(document);

//DOM or js is used to change dyanamically not change in sever code 
//dynamic manipulation 

// .. we write script tag below body tag because it help to load htm documnet otherwise it show null

let heading = document.getElementById("heading"); //
console.dir(heading);

// let 

let headings = document.getElementsByClassName("myClass");
console.dir(headings);

//get element by tag name 

let para = document.getElementsByTagName("p");
console.dir(para);


//Query Selector
//we can pass id,class ,tags
//for first item
let firstElement = document.querySelector("p");
console.dir(firstElement);

// for all item in document
let allElement = document.querySelectorAll(".myclass");
console.dir(allElement);

//properties
// ->Tag name = return tage for element nodes   
//innerText : return the text content of the element and all its children
//innerHTML : return the plain text or html content in the element
//textContene : return textual content even for hidden element

//firstchild and last child attributes
//childern this attributes is used for navigation 








