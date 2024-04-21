//color changing and code copy in clipboard....

const getColor = () =>{
    //color code are hexcode
    const randomNumber = Math.floor(Math.random() * 1677215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color_code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode);   //it is in clipboard and easily paste anywhere...

}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
);


getColor(); //intital call



