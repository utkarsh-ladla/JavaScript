// <!-- comments in js -> it is not execute line of code.. -->
// types - single line and multiple line ...
/*multiple 
line 
Comment*/

//operator in js - > help toperform some operation on data...
// a+b, where  a and b is operand and + is operator
//arthimetic operator -> +,-,*,/

let a=5;
let b=4;

console.log("a+b =",a+b);
console.log("a-b =", a-b );
console.log("a*b =", a*b );
console.log("a/b =", a/b );

//modulus operator -> remainder
console.log("a%b =", a%b );

//exponentiation -> power like a to power b...
console.log("a**b =", a**b );

//Unary operator
//increment -> "++" -> used for increment
a++;
console.log("a++ =", a );
//decrement -> "--"  post and pre...
console.log("--b =", --b );



//Asignment operator
let x = 5;
let y = 2;

x += 4;
console.log("x =",x); // 9

x -= 4;
console.log("x = " , x) //5

// comparison in javascript

//equal-to(==)
console.log("a == b",a == b); //false....
console.log("a != b",a!=b);//true 


//strict type of comparison "===" also check the data types...
console.log("a===b",a===b);
console.log("a!==b",a!==b);

//LOGICAL OPERATOR....
let cond1 = a>b ; //true 
let cond2 = a===5;//true 
console.log("a && b",cond1 && cond2);
console.log("a || b", cond1||cond2);

console.log("!(a<b)=" , !(a<b));

console/log();