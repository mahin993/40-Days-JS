/*
 There are 4 Types of Scope in JavaScript:
  1) Global Scope
  2) Function Scope
  3) Block Scope
  4) Module Scope


  1) Global Scope: 
   - Variables declared outside of any function or block scope are in the global scope.

   - "var" in the global scope is get added to the window object but if create it using "let" or "const" it doesn't get added to the window object

 */

   let name = "Mahin";

   function greetings(){
    console.log("Hello", name);
   }

   greetings();
   console.log(name);

   {
    console.log("inside block", name)
   }


   /*
   2) Function Scope:
    - Variables declared inside a function are ony accessible within that function.
   */
  function toDo(){
    var task = "Learning 40 days of JS"
    console.log(task);
  }

  toDo();

  // console.log(task); // ReferenceError: task is not defined
  

  /*
3) Block Scope: 
 - Variables declared using "let" and "const" inside {} and cannot be accessed outside the block.
 - "var" is always Function Scope. So, "var" can be accessible outside of Block.
 - "let" and "const" are always Block Scope. So, "let" and "const" cannot be accessible outside of Block.
  */
 
 {
  var count = 10; // "var" is always Function Scope. So, "var" can be accessible outside of Block.
  let count2 = 20; // "let" and "const" are always Block Scope. So, "let" and "const" cannot be accessible outside of Block.
  // console.log(count2);
  
 }
//  console.log(count);
//  console.log(count2); // ReferenceError: count2 is not defined


/*

 /*
Scope Chain:
 - When JavaScript access a variable, JavaScript first search in the nearest scope whether the variable is available and the accessible. If the variable is not available or accessible it will go one more level higher, it moves outward.
 
let globalVar = "I am a Global Variable";

function outer(){
  let outerVar = "I am an Outer Variable";

  function inner(){
    let innerVar = "I am an Inner Variable";

    console.log(innerVar); // I am an Inner Variable
    console.log(outerVar); // I am an Outer Variable
    console.log(globalVar); // I am a Global Variable
  }
  inner();

}

outer();

*/

var count = 10;

function outer(){
  var count = 20;

  function inner(){
    var count = 30;
    // console.log(count); // 30
  }

  inner();
  // console.log(count); // 20
  
}

outer();

// console.log(count); // 10
