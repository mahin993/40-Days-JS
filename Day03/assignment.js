/*
Tasks 3:

1. Odd or Even?
 Take a number and find if the number is an odd or even number.
 Print the number and result in the console.

2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.
 Manage age as a variable.
 Check if the age is eligible for a driving license and print it on the console accordingly.

3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.
 You get 12,300 rupees as your monthly salary.
 You get a 20% bonus on your annual salary.
 How much money do you make per annum as a CTC?

4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!
 Create a color variable.
 Based on the color variable's value print in the console if a traveler needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
 
5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.
 Create a units variable. Based on this value you will calculate the total electricity bill for a months.
 If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
 If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

 6. Leap Year Checker
Is 2025 a Leap Year?
 Take year as input.
 Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

7. Max of Three Numbers
Find the max number from the lot.
 Take three numbers and assign them to variables p, q, and r.
 Now find the maximum of these three numbers using the comparison operators.

8. Bitwise Doubling
A tricky one for you
 Create a variable count and assign a value, say, 5.
 Now use the Bitwise shift operator to make the number double.
 Print it on the console.

*/
//==============================================================================================

/*
1. Odd or Even?
 Take a number and find if the number is an odd or even number.
 Print the number and result in the console.
 */
let number = 6;
result = number % 2 === 0 ? "even" : "odd";
// console.log(result);


/*
2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving license is 18 years.

 Manage age as a variable.
 Check if the age is eligible for a driving license and print it on the console accordingly.
*/

let age = 10;
let eligibleAge = age >= 18 ? "Eligible for Driving License" : "Not Eligible For Driving License";
// console.log(eligibleAge);

/*
3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.
 You get 12,300 rupees as your monthly salary.
 You get a 20% bonus on your annual salary.
 How much money do you make per annum as a CTC?
 */

 const monthlySalary = 12300;
 const annualSalary = monthlySalary * 12;
//  console.log(annualSalary);
 const bonus = annualSalary * 0.20;
 const CTC = annualSalary + bonus;
//  console.log(CTC);
 

/*
4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!
 Create a color variable.
 Based on the color variable's value print in the console if a traveler needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
*/

const color = "Green";
const action = (color === "Red") ? "STOP" : (color === "Green") ? "Go" : "Invalid Color";
// console.log(action);

// Another Method
if(color === "Red"){
  // console.log("STOP");
} else if(color === "Green"){
  // console.log("GO");
} else{
  // console.log("Invalid color");
}

/*
5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.
 Create a units variable. Based on this value you will calculate the total electricity bill for a months.
 If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
 If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
*/

const units = 50;
const perUnitCost = 150;
const monthlyPayment = parseInt(units * perUnitCost);
// console.log(`Monthly Payment: ${monthlyPayment} "rupees`);

let annualPayment = parseInt(monthlyPayment * 12);
const discount20 = annualPayment * 0.20;
annualPayment -= discount20;
// console.log(`Annual Payment after 20% discount: ${annualPayment} rupees`);


/*
6. Leap Year Checker
Is 2025 a Leap Year?
 Take year as input.
 Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
*/
const year = 2025;
if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
  // console.log(`${year} is a leap year.`);
} else{
  // console.log(`${year} is not a leap year.`);
}

/*
7. Max of Three Numbers
Find the max number from the lot.
 Take three numbers and assign them to variables p, q, and r.
 Now find the maximum of these three numbers using the comparison operators.
*/

let p = 10, q = 20, r = 30;
let maxNum = (p > q && p > r) ? p : (q > p && q > r) ? q : r;
// console.log(maxNum);

/*
8. Bitwise Doubling
A tricky one for you
 Create a variable count and assign a value, say, 5.
 Now use the Bitwise shift operator to make the number double.
 Print it on the console.
*/
let count = 5;
console.log(count << 1);









