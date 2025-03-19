// Temporal Dead Zone (TDZ): TDZ is an area where you can't access a variable until it is initialized

// ReferenceError

{
  //  === name variable's TDZ started here
  //
  ///
  console.log(name); // ReferenceError
  //
  //
  //
  //
  let name = "Tom" // === name variable's TDZ ends here
}




//  Invoke or call a function, chase()
chase();

//  Declare a function, chase()
function chase(){
  console.log("Tom chases Jerry");

  // Invoke a function, caught();
  caught();
}

// Declare a function, caught()
function caught(){
  console.log("Tom caught Jerry: (")
}