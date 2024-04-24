let modebtn = document.querySelector("#btn");
let currMode = "light";
let body = document.querySelector("body");
modebtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    //   document.querySelector("body").style.backgroundColor = "black";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    body.classList.remove("dark");
    body.classList.add("light");
  }

  console.log(currMode);
});
