/*
Tasks 4:

1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:
Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.

5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April born are Aries, April and May born are Taurus, and so on. Do not use if-else.

6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:
All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs every time manually to see if the output changes correctly.

*/
//==============================================================================================

/*
2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
 */
let amount = 750;
const withdraw = (amount > 0 && amount % 100 === 0) ? "Withdraw Successful" : "Invalid Amount";
// console.log(withdraw);

/*
3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
*/
let num1 = 10, num2 = 30;
let result;
let operator = "+";
switch(operator){
  case "+":
    result = num1 + num2;
    break;
  
  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    result = num1 / num2;
    break;
    
  default:
    // console.log("Invalid Operator");
}

// console.log(result);

/*
4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:
Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.
*/
let age = 61;
if(age < 18){
  // console.log("The ticket price is $3");
} else if(age <= 60){
  // console.log("The ticket price is $10");
} else if(age > 60){
  // console.log("The ticket price is $8");
} else {
  // console.log("Invalid age")
}


/*
5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April born are Aries, April and May born are Taurus, and so on. Do not use if-else.
*/
let birthMonth = "April";

switch(birthMonth){
  case "March":
  case "April":
    console.log("Aries");
    break;

  case "April":
  case "May":
    console.log("Taurus")
    break;

    case "May":
    case "June":
      console.log("Gemini")
      break;
    
    default:
      console.log("Invalid Month")
}


/*
6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:
All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs every time manually to see if the output changes correctly.
*/
let side1 = 5;
let side2 = 6;
let side3 = 5;

if(side1 === side2 && side2 === side3){
  console.log("This is called Equilateral Triangle");
} else if(side1 === side2 || side2 === side3 || side1 === side3){
  console.log("This is called Isosceles Triangle");
} else {
  console.log("This is called Scalene Triangle")
}
