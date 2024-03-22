//the change in the state of an object is known as an event
//Event are fired to notify code of "interesting change " that may effect code explation
//these can arise from user interaction such as using a mouse or resizing a window eg battery low

// mouse event(click,double click ,etc)
//keyboard event(keypress,key up , keydown)
//form event(submit etc)
//print event & many more 

let btn1 = document.querySelector("#btn1");
btn1.onclick =() => {
    console.log('btn1 wa clicked');
    let a = 25;
    a++;
    console.log(a); 
}

let box = document.querySelector("div");
box.onmouseover = ()=>{
    console.log("you are inside div ");
}

//if we handle both inline event as well as handle in js document then priority is js Event
// if we write multiple handler on js event then last handler overrde all and execute...


//Event Object -> it is a special object that has detais about the event
//All event  handlers have access to the event object properties and method.

btn1.onclick =(e) =>{
    console.log(e);
    console.log(e.type);
    console,log(e.target);
    console.log(e.clientX,e.clientY);
    // similarly it apply in all event 

}


//Event listener -> an event listener is a function that waits for a specific event to occur,
//such as a user clicking a button or pressing a key, and then executes a block of code when the event occurs 

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click",()=>{
    console.log('button 2 was clicked - handler1');
})//e can also access event object with the help of event listener 
btn2.addEventListener("click",()=>{
    console.log('button 2 was clicked - handler2' );
})

const handler3 = () =>{
    console.log('button 2 was clicked - handler3');
};

btn2.addEventListener("click",handler3);

btn2.addEventListener("click",()=>{
    console.log('button 2 was clicked - handler4');
})

//removing Event Listener ->

btn2.removeEventListener("click",handler3);