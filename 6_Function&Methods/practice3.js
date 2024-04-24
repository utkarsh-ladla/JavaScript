//we are given array of marks of student. filter out of the marks of student that scored 90
let marks = [66,77,98,88,90];

let marksabove90 = marks.filter((val)=>{
    return val >= 90;
})
console.log(marksabove90);