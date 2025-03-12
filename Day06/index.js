// Definition or Declaration of a Function
function printMe(){
    // console.log("printing...")
}

// call or Invoke a Function
printMe()


// Expression of a Function
let printMe2 = function(){
    // console.log("Printing 2 ...");
}

printMe2()

/*
 Parameters & Arguments

Parameter: The input that you pass to a function is called Parameter.
The input that we pass to a function while declaring or defining function is call Parameters.

Arguments: When we invoke or call this particular function and that time passing the actual value of Parameters (a, b) is call Arguments.

*/
function sum(a, b){
    const result = a + b;
    // console.log(result);
    return result;
}

let result = sum(5, 6);
// console.log(result);

function double(x){
    return x * 2;
}

// console.log(double(result));


// Default Parameter: 
// Default Parameter means a Parameter, which is having a default value.
function calc(a, b=0){ // b=0 is a default parameter
    return 2 * (a + b);
}

let result2 = calc(2);
// console.log(result2);


// Rest Parameter
function calculateThis(x, y, ...rest){
    // console.log(x, y, rest);
}

calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9);

// The rest parameter can never be the first parameter


// Nested Function
function outer(){
    // console.log("Outer");

    return function inner(){
        // console.log("Inner");
    }

    // inner()
}

let resFunc = outer()
// console.log(resFunc())


// Callback Function
/*
function foo(func){
    console.log("Foo")
    func()
}

foo(function(){
    console.log("buz")
})
*/

// Callback function on the basis of condition
const toCallBuz = true;
function foo(func){
    // console.log("foo")
    
    if (toCallBuz){
        func();
    }
}

foo(function(){
    // console.log("buz")
})



// Pure Function: Pure Function is a function that returns or provide the same output and the same input
let greetingMsg = "Hello"
function greetings(name){
    return `${greetingMsg} ${name}`
}
// console.log(greetings("Good Morning"))
// console.log(greetings("Good Morning"))

// greetingMsg = "hello,"
// console.log(greetings("Good Morning"))
// console.log(greetings("Good Morning"))
// console.log(greetings("Good Morning"))



// Higher Order Function
function getCamera(camera){
    camera()
}

getCamera(function(){
    // console.log("Sony")
})

function returnFunc(){
    return function(){
        // console.log("Hello")
    }
}

const retFun = returnFunc();
// console.log(retFun())


// Arrow Function
let greetMe = () => {
    console.log("Hello")
}
let greetMe2 = () => console.log("Hello2")

// greetMe()
// greetMe2()



// Anonymous Function: Anonymous Function is a function that does not have a required name



// IIFE (Immediately Invoked Function Expression): IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined. It is commonly used to create a private scope and avoid polluting the global namespace.

(function() {
    // console.log("IIFE");
})();

// IIFE in Arrow Function
((count) => {
    // console.log("This is an IIFE using arrow function", count);
})(1);


/*
// Function Execution Stack (Call Stack)
The Call Stack in JavaScript is a data structure that keeps track of function calls in the order they need to be executed. It follows the LIFO (Last In, First Out) principle.

How the Call Stack Works
When a function is called, it is added to the top of the stack.
When a function completes execution, it is removed from the top of the stack.
The process continues until the stack is empty.
*/
const first = () => {
    // console.log("First Function");
}

const second = () => {
    // console.log("Second Function");
    first();
}

const third = () => {
    // console.log("Third Function");
    second();
}

third();



// Recursion: Recursion is about a function is calling by itself.
// Recursion is when a function calls itself to solve a problem. It keeps calling itself with smaller parts of the problem until it reaches a stopping point, called the base case.

function fetchWater(count){
    console.log("Fetching water......", count);
    if(count === 0){ // Base case or Business case: stop when count is 0
        console.log("No more water is left to fetch...")
        return
    }
    fetchWater(count - 1)
}

fetchWater(10)


