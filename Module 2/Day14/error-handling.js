/*
 What are we going to learn today ?
1) Different types of Error in JavaScript
2) try...catch syntax and flow
3) Real-World use cases with try...catch
4) Throwing Error
5) Rethrowing Error
6) The try...catch..finally
7) Creating Custom Error
8) Self Assignment Operator
 */


// parsing error --
// runtime error --

try {
  // logic or code
} catch (err){
  // handle error
}

/**
 * 1. Code inside try gets executed.
 * 2. If no error in the try block, the catch block will be ignore and will not be executed.
 * 3. If there in an error in the try block, the execution of thr try block will be suspended and the control will move to the catch block. In the catch block you can find the error details and do the needful.
 */

try{
  console.log("Execution starts here");
  abc;

  console.log("Execution ends here");
} catch(err){
  console.error("An error has occured", err);
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
