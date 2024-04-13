//The Fetch APi provides an interface (sending / receiving) resource.
//It uses Request and Response object
//The fetch() method is used to fetch a resource (data)

// let promise = fetch(url,[option])
//API stand for Application Programming Interface

const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
// let Promise = fetch(URL);
// console.log(Promise);

const getFact = async () => {
  console.log("getting data");
  let Response = await fetch(URL);
  console.log(Response); //JSon

  let data = await Response.json();
  factPara.innerText = data[1].text;
  // console.log(data);

  // console.log(data[0].text);
};

// function getFact() {
//   fetch(URL)
//   .then((Response) => {
//     return Response.json();
//   }).then((data) => {
//     console.log(data);
//     factPara.innerText = data[1].text;
//   });
// }
btn.addEventListener("click", getFact);

//GET request -> only receive data

//Understanding Terms
//AJAX is Asynchronous js & XmL
//JSON is stand for javaScript object NOtation  //AJAJ
//JSON() method : returns a Promise that resolve with the result of parsing the responce body text
//as json (Input is JSON,output is JS object)   Response(JSOn) -> Js object

//we can use JSON methods for converting  JSOn to object usable data


//Requests & response 
//HTTP verbs ->GET POST
//Responce status code

//HTTP response Header also contain details about the response, such as content type, HTTP satus code etc...
