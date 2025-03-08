/*
1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
*
* *
* * *
* * * *
* * * * *

2. Create Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30

3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.

5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.
Example:
Input: 6789
Output: 9876

6. Write your understanding on the differences between for, while, and do-while loop. Create their flow charts.
*/
//-------------ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

/*
1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
*
* *
* * *
* * * *
* * * * *

*/
for(i=1; i<=5; i++){
  let row = "";
  for(j=1; j<=i; j++){
    row += "*";
  }
  // console.log(row);
}


/*
2. Create Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
*/

let n = 3;
for(i=1; i<=10; i++){
  // console.log(`${n} x ${i} = ${n * i}`)
}


// 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.
let sum = 0;
for(i = 1; i <= 500; i++){
  if(i % 2 === 1){
    sum += i;
  }
}
// console.log(sum)

/*
4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.
*/
let num;
for(num = 1; num <= 20; num++){
  if(num === 3){
    continue;
  }
  // console.log(num);
}

/*
5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.
Example:
Input: 6789
Output: 9876
*/
// let number = 6789;
// let reverse = 0;
// while(number > 0){
//   let digit = number % 10;
//   reverse = reverse * 10 + digit;
//   number = Math.floor(number / 10);
// }
// console.log(reverse);

let number = 6789;
let reverse = 0;
while(number > 0){
  let digit = number % 10;
  reverse = (reverse * 10) + digit;
  number = Math.floor(number / 10)
}
console.log(reverse)