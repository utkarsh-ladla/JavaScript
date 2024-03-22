// create a new button Element, Give it a text "click me", background color 
// of red & text xolor of white 
//Insert the button as the first element inside the body tag

 let newButton = document.createElement("button");
 
 newButton.innerText = "click me ";
 newButton.style.color = "white";
 newButton.style.backgroundColor = "blue";

 document.querySelector("body").prepend(newButton);

 
 