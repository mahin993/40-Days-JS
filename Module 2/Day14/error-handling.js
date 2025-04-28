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
  // abc;

  console.log("Execution ends here");
} catch(err){
  console.error("An error has occured", err);
  // console.log(err.name);
  // console.log(err.message);
  // console.log(err.stack);
}





// Real-World Use Case
function divideNumbers(a, b){
  try{
    if(b === 0){
      const err = new Error("Division by zero in not allowed");
      throw err;
    }

    const result = a/b;
    console.log(`The result is ${result}`)

  } catch(error){
    console.error(`Got a math error and ${error.message}`)
  }
}

// divideNumbers(15, 5)
// divideNumbers(15, 0)

/********************************** */
const person = {
  name: "Mahin",
  address: {
    city: "Chandpur"
  }
}

function getPostalCode(user){
  try{
    console.log((user.address.country.postalCode));
  } catch(error){
    console.error(`Error accessing property ${error.message}`)
  }
}

// getPostalCode(person)



function validateNumber(age){
  try{
    if(isNaN(age)){
      throw new Error(`Invalid input. Age must be a number. Your input is ${age}`)
    }

    console.log(`Age is ${age}`);

  } catch(error){
    console.error(`Validation error. ${error.message}`)
  }
}

// validateNumber(10)






// try...catch using rethrow
function validateForm(formData){
  try{
    if(!formData.userName) throw new Error("Username is Mandatory");
    if(!formData.email.includes("@")) throw new Error("Format of email is invalid")
  } catch(error){
    console.error(`Validation issues found. ${error.message}`)
    throw error // rethrow
  }
}

try{
  // validateForm({userName: "mahin", email: "abcd"})
} catch(error){
  console.error(`Showing the error message creating by user. ${error.message}`)
}





// finally
function processInformation(information){
  try{
    console.log("Processing Information");
    if(!information) throw new Error("No information is available in process")
    console.log("Information processed");
    
  } catch(error){
    console.log(`Error: ${error.message}`);
  } finally{
    console.log(`Cleanup: closing database connection`);
  }
}

// processInformation()


// Custom Error
function ValidationError(message){
  this.name = "ValidationError"
  this.message = message;
  this.stack = new Error().stack;
}

// ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age){
  if(age < 60){
    throw new ValidationError("You are not a senior citizen")
  }
  return "You are a senior citizen"
}

try{
  const message = validateCitizen(60)
  console.log(message)
} catch(error){
  console.error(`${error.name}: ${error.message}`);
}


// Self Assignment Operator ?=

let x;
let y = 10;
x ?= 20; // x is undefined, so x becomes 20
y ?= 30; // y is already 10, so y remains 10

console.log(x); // Output: 20
console.log(y); // Output: 10
