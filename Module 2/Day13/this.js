// Global

// this keyword and window object
// console.log(this); // window object


// object
// function


// Inside of an Object - Implicit Binding
// When invoke a method on an object the context of "this" or the value of "this" is bound to the object on which we have invoked the method


// "use strict";
const person = {
  id: 12345,
  firstName: "Alex",
  lastName: "Doe",

  returnThis: function(){
    return this;
  },

  getFullName: function(){
    return `${this.firstName} ${this.lastName}`
  }
}

// console.log(person.firstName);
// console.log("This inside the employee object: ", person.returnThis());

// console.log(`Constructed full name using this keyword ${person.getFullName()}`);

const tom = {
  name: "Tom",
  age: 7
}

const jerry = {
  name: "Jerry",
  age: 3
}

function greetMe(obj){
  obj.logMessage = function(){
    // console.log(`${this.name} is ${this.age} years old!`);
  }

  // console.log(obj);
}

greetMe(tom)
tom.logMessage()

greetMe(jerry)
jerry.logMessage()



//  Inside Function
function sayName(){
  console.log("this inside a function", this); // window object
}

// sayName()

function sayName() {
  console.log(this); // undefined
}
// sayName();


// "this" inside nested functions

function outer(a){
  // console.log("this inside an outer function", this); // window obj

  return function inner(b){
    // console.log("this inside an inner function", this); // window obj
  }
}

const outerResult = outer(); // Call outer()
// console.log(outerResult()); // Call inner()



// "this" inside the arrow function
// 
const getFood = () => this;
// console.log("this inside the arrow function defined in global scope", getFood());



const food = {
  name: "mango",
  color: "yellow",

  // getDesc: function() {
  //   return `${this.name} is ${this.color}`
  // }
  getDesc: function(){
    return () => `${this.name} is ${this.color}`
  }
} 

const descFunc = food.getDesc()
console.log(descFunc());

