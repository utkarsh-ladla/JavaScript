//create a function using the "function" keyword that
// takes a string as a string as an argument and return the number of vowels in the string
//aeiou

function vowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
      console.log(char);
    }
  }
  console.log(count);
}

vowels("apnacollege");


const countVow = (str) =>{

  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
      console.log(char);
    }
  }
  console.log(count);

}
countVow("abc");