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
// console.log(descFunc());



const user = {
  name: "mahin",
  age: 32,
  greetMe: function(){
    return () => `Hello, This is ${this.name} and he is ${this.age} years old`
  } 
}

const greet = user.greetMe()
// console.log(greet());


// Explicit Binding of "this" keyword
/* There are 3 methods of explicit binding
1) Call
2) Apply
3) Bind
*/

// 1) The Call Method
function greeting(language){
  // console.log(`${this.name} say hello in ${language}`);
}

const user1 = {
  name: "Mahin"
}

greeting.call(user1, "English")


function likes(hobby1, hobby2){
  console.log(`${this.name} likes ${hobby1} and ${hobby2}`);
}

const persons = {
  name: "Mahin"
}

// call
likes.call(persons, "Teaching", "Dancing")

// apply
likes.apply(persons, ["Teaching", "Dancing"])

// bind
const hobby = likes.bind(persons, "Teaching", "Dancing")
hobby()


const Cartoon = function(name, animal){
  this.name = name;
  this.animal = animal;
  this.log = function(){
    console.log(`${this.name} is a ${this.animal}`);
  }
}

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log()

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log()