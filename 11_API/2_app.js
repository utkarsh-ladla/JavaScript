const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelector(".dropdown select");

for(code in countryList){
    console.log(code,countryList[code]);
}

for(let select of dropdowns){
    for(currcode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value =currCode;
        select.append(newOption);
    }
}
