const endDate = "21 April 2024 10:00 PM";

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");
const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000; //mili sec - sec
  // console.log(end);
  // console.log(now);
  //   console.log(diff);
  if (diff < 0) return;
  input[0].value = Math.floor(diff / 3600 / 24); //converting into days
  input[1].value = Math.floor(diff / 3600) % 24; //converting into hours
  input[2].value = Math.floor((diff / 60) % 60); //converting into minutes..
  input[3].value = Math.floor(diff % 60);
};

clock();

setInterval(() => {
  clock();
}, 1000);

/* 1 day = 24 hrs
    1 hr = 60 min 
    60 min = 3600 sec
*/
