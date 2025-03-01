console.log("Hello");

// Operator - Symbols:  + - * /
// Operands - x + y; Here x and y are the Operands.

/* Expression: The final output, which will be an one value. There are 2 Types of Expression: 
    1) Assignment Expression: x = 2
    2) Evaluating Expression: x = 3 + 4
*/

// let x = 3 + 4;

// Arithmetic Operator
let a = 2;
let b = 3;

console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5

// Exponential Operator
console.log(a ** b);

// Reminder Operator
console.log(a % b);

// Post-Increment
let count = 5
console.log(count++); // count = 5
console.log(count); // count = 6


// Pre-Increment
console.log(++count); // count = 7


// Assignment Operator:
let x = 10;



// Logical Operators
// && || ?? !

// operand1 && operand2: Here, if this first operand (operand1) can be converted to
/* 'false' then it will return the first operand (operand1), otherwise it will return the
second operand (operand2)
*/ 

console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("Cow" && "Horse"); // Horse