// Object

let user = {
  name: "Mahin",
  age: 30,
  "is admin": true
};

// console.log(user.name)
// console.log(user.age);

// add new property in particular object
user.isSeniorCitizen = false;
user["is_married"] = false;

// console.log(user)
// console.log(user.isSeniorCitizen)

// console.log(user["is admin"])
// console.log(user);

// Modify the current property value
user.age = 25
// console.log(user.age); // 25

// Delete the property
// delete user.age;
// delete user["is admin"]
// console.log(user);


// access property value dynamically or by using variable
const somekey = "age";
// console.log(user[somekey]); // age = 25



// access property name dynamically or by using variable
// let car = prompt("Which is your fav car ?")

let favCars = {
  // [car]: 5,
}

// console.log(favCars);


//  Constructor Function 
// Note that, Constructor Function name will be start with a capital letter.
function Car(name, model){
  this.name = name;
  this.model = model;
}

const bmwCar = new Car("BMW", "X1");
// const audiCar = new Car("AUDI", "A8");
// console.log(bmwCar); // Car { name: 'BMW', model: 'X1' }
// console.log(audiCar); // Car { name: 'AUDI', model: 'A8' }
// Constructor Function helps out to create different instances from blueprint that you use to create different instances


// console.log(bmwCar instanceof Car);



// Create Object using "Object" keyword
const person = Object();
person.name = "Alpha";
person.age = 76;
person["is_married"] = true;

// console.log(person);
// console.log(person);

// Factory Function:
function createUser(name, age){
  return {
    // Object Shorthand: Object shorthand is a short way to write objects in JavaScript when the property name and variable name are the same.
    name, // name: name
    age, // age: age
    greet(){
      // console.log(this.name);
      
    }
  }
}

const user1 = createUser("Mahin", 32)
// console.log(user1);
user1.greet()

const user2 = createUser("Tuhin", 25)
// console.log(user2);


// Nested Object
let profile = {
  name: "Mahin",
  company: "Meitec",
  message: function(){
    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "Chandpur",
    thana: "Kachua",
    post_code: 3630,
    state: "Chittagong",
    country: "Bangladesh",
    greeting: function(){
      console.log(`Welcome to ${this.country}`);
    },
  },
  salary: 20000,
}

// console.log(profile.name);
// console.log(profile.company);

// profile.message();

// console.log(profile.address.city);
// console.log(profile.address.greeting());
// profile.address.greeting()

// console.log(profile.salary);
if(!profile.salary){
  // console.log("Salary Doesn't exist");
}

// "in" operator to check the property is exist in object or not
// console.log("salary" in profile) // false



//for……in loop

for(key in profile){
  // console.log(key);
  // console.log(profile[key]);
}

// console.log(Object.keys(profile));
// console.log(Object.values(profile));


// Object Reference
// const obj1 = {name: "mango"}; // XA01
// const obj2 = {name: "mango"}; // VB02

// console.log(obj1 === obj2); // false
// console.log(obj1 == obj2); // false


let obj1 = {name: "mango"}; // XA01
const obj2 = {name: "mango"}; // VB02

obj1 = obj2
// console.log(obj1 === obj2); // true
// console.log(obj1 == obj2); // true



// Static Method
// const target = {p:1, q:2};
// const source = {a:3, b:4};
// const returnedObj = Object.assign(target, source);
// console.log(returnedObj); // { p: 1, q: 2, a: 3, b: 4 }

const target = {p:1, a:2};
const source = {a:3, b:4};
const returnedObj = Object.assign(target, source);
// console.log(returnedObj); // { p: 1, a: 3, b: 4 }


const object1 = {user: "mahin"};
const object2 = Object.assign({}, object1);
// console.log(object2);
// console.log(object1 === object2); // false. Because, value same but both are Different memory locations




const obj3 = {
  a: 1,
  b: {c: 2}
}
const obj4 = Object.assign({}, obj3);
// console.log(obj4); // {a: 1, b: {c: 2}}
// obj4.b.c = 3;

// obj4.a = 100;

// console.log(obj4.a); // 100
// console.log(obj3.a); // 1

// console.log(obj4.b.c) // 3
// console.log(obj3.b.c) // 3




// Object.entries
const myObj = {
  name: "Mahin",
  age: 30
}

// console.log(Object.entries(myObj));

// console.log(Object.freeze(myObj));

// myObj.country = "Bangladesh"

// console.log(Object.freeze(myObj));

const entries = new Map([
  ["foo", "bar"],
  ["baz", 42]
])

console.log(Object.fromEntries(entries));