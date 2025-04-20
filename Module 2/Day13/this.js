// Global

// this keyword and window object
// console.log(this); // window object


// object
// function


// Inside of an Object - Implicit Binding
// When invoke a method on an object the context of "this" or the value of "this" is bound to the object on which we have invoked the method
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
    console.log(`${this.name} is ${this.age} years old!`);
  }

  console.log(obj);
}

greetMe(tom)
tom.logMessage()

greetMe(jerry)
jerry.logMessage()