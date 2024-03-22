//create 3 div with common class name - "box " Access them 
//& add some unique text to each of them 

let divs =document.querySelectorAll(".box");

// divs[0].innerText = "new value 1";
// divs[1].innerText = "new value 2";
// divs[2].innerText = "new value 3";

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}








