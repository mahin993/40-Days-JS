/*
Assignment Tasks:

1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit

2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1

5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using parameter and argument.

8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.

9. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {
    f1();
}
f2();
10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
*/

// =============================================================================================

/*
1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit
*/
function celsiusToFahrenheit(celsius){
  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

let fahrenheit = celsiusToFahrenheit(10);
// console.log(`The Fahrenheit is ${fahrenheit}`)


/*
2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.
*/
function findMax(num1, num2){
  if(num1 > num2){
    return num1;
  }
  return num2;
}

let num1 = 10, num2 = 20;
let maxNumber = findMax(num1, num2);
// console.log(`The larger number between ${num1} and ${num2} is: ${maxNumber}`)


/*
3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.
*/

/*
function isPalindrome(str){
  let left = 0;
  let right = str.length - 1;
  while(left < right){
    if(str[left] !== str[right]){
      return false
    }
    left++
    right--
  }
  return true
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))


function isPalindrome2(num){
  let original = num;
  let reversed = 0;

  while(num > 0){
    let lastDigit = num % 10;
    reversed = (reversed * 10) + lastDigit;
    num = Math.floor(num / 10)
  }

  return original === reversed;
}

console.log(isPalindrome2(121))
*/

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1

  while(left < right){
    if(str[left] !== str[right]){
      return false
    }
    left++;
    right--;
  }
  return true;
}

// console.log(isPalindrome("madam"))


const isPalindrome2 = (num) => {
  const original = num;
  let reversed = 0;
  while(num > 0){
   const lastDigit = num % 10;
   reversed = (reversed * 10) + lastDigit;
   num = Math.floor(num / 10);
  }

  return original === reversed;
}

// console.log(isPalindrome2(121))


/*
4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1
*/
function factorial(n){
  if(n === 0 || n === 1){
    return 1;
  }
  return n * factorial(n - 1)
}

// console.log(factorial(5))



/*
5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
*/
const countVowels = (str) => {
  let alphabet = str.toLowerCase().split("");
  let vowels = "aeiou";
  let count = 0;
  for(i=0; i<alphabet.length; i++){
    if(vowels.includes(alphabet[i])){
      count++;
    }
  }
  return count;
}
// console.log(countVowels("HELLO"))


/*
7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using parameter and argument.
*/
(function(greetings){
  console.log(`Hello, ${greetings}`)
})("JavaScript");

/*
8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.
*/
function greet(name, callback){
  callback(name);
}

function sayHello(name){
  console.log(`Hello, ${name}`)
}

greet("Jhon", sayHello)










