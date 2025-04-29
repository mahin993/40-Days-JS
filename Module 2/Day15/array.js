/**
 * Array:
 * Index: The position of an element in the array is known as its index.
 * Index starts with 0
 * Index end with (length - 1)
 */

const two = new Array(4, 2)
// console.log(two);




// Rest and Spread Operator

// Rest Operator
const salad = ["🥬", "🥒", "🍅", "🥕", "🌽", "🫑", "🧅", "🫛"];
const [brokolly, cucumber, ...rest] = salad;
console.log(brokolly, cucumber);
console.log(rest);


// Spread Operator
const mySalad = ["🥬", "🥒", "🍅", "🥕", "🌽", "🫑", "🧅", "🫛"];
const mySaladCopy = [...mySalad]
console.log(mySaladCopy);



// How to Swap Values with Destructuring?
let first = 10;
let second = 20;

[first, second] = [second, first]
console.log(first);
console.log(second);

// How to Merge Array
const arr1 = [2, 4, 6];
const arr2 = [1, 3, 5];
const mergeArr = [...arr1, ...arr2];
console.log(mergeArr);

// ✅ The length property
const array = [11, 21, 73]
array.length = 7 // set array length
array.length = 0 // set array length as empty array
console.log(array);