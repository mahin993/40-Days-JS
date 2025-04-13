/**
3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
 */

function addButton(){
  let clickCount = 0;
  document.getElementById("btn").addEventListener("click", () => {
    clickCount++;
    console.log("Button clicked ", clickCount)
  })
}

// addButton()



/*
4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
*/

function createMultiplier(multiplier){
  let number = multiplier;

  return function(inputNumber){
    number *= inputNumber
    console.log(number);
    
  }
}

let multiply = createMultiplier(3)
// multiply(5) // 15
// multiply(5) // 75


/**
6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functions.
 */

function counter(initialValue){
  let count = initialValue;

  return {
    "increment" : (amount) => {
      count += amount;
      console.log(`Incremented by ${amount}, Current count is ${count}`);
    },

    "decrement" : (amount) => {
      if(amount > count){
        console.warn("Cannot decrement below zero")
      } else {
        count -= amount;
        console.log(`Decremented by ${amount}, Current count is ${count}`);
      }
    },

    "reset" : () => {
      count = 0;
      console.log(`Counter has been reset. Current count is ${count}`);
      
    }
  }
}

let value = counter(5);
console.log(value.increment(3))
console.log(value.decrement(4))
console.log(value.reset())