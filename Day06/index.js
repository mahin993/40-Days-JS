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
function foo(func){
    console.log("foo");

    func();
}

let func = function(){
    console.log("buz");
}

foo(func);
