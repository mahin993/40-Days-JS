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


// Array Method

// concat method
const array1 = [1,2,3]
const array2 = [4,5,6]

const merged = array1.concat(array2)
console.log(merged);


// Join Method: The join method joins all the elements of an array by a separator like (comma, space, colon). Without any separator, as default join will be separate comma (,) comma.
const alphabet = ["a", "b", "c", "d", "e"]
const joined = alphabet.join(); // separate by (,) comma
const joined2 = alphabet.join(" <=> "); // separate by (<=>)
console.log(joined); // a,b,c,d,e

console.log([].join()); // return "" (empty string)


// fill() Method
const colors = ["red", "blue", "green", "white", "black"]
colors.fill("pink", 1, 3)
console.log(colors); // ['red', 'pink', 'pink', 'white', 'black']


// Sort Method: Sorts elements as strings by default, and the default sorting order is ascending
// To sort numbers correctly, use a compare function or comparator function.
const numbers = [4, 2, 10, 1];
numbers.sort();
console.log(numbers); // [1, 10, 2, 4] (not correct for numbers)

numbers.sort(function(a, b){
  return a === b ? 0 : a > b ? 1 : -1; // ascending order
  return a === b ? 0 : a > b ? -1 : 1; // descending order
});
console.log(numbers); // [1, 2, 4, 10]


const array3 = [1, 2, 3, 4, 5, 6, 7];
array3.copyWithin(0, 4);
console.log(array3); // [5, 6, 7, 4, 5, 6, 7]


const items = [
  { type: "fruit", name: "apple" },
  { type: "veg", name: "carrot" },
  { type: "fruit", name: "banana" }
];

const grouped = Object.groupBy(items, ({name}) => name);
console.log(grouped);


const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];


const groupedByType = Object.groupBy(inventory, ({type}) => type)
console.log(groupedByType);

const groupedByQuantityMoreThan20 = Object.groupBy(inventory, ({quantity}) => {
  return quantity >= 20 ? "Quantity More Than 20" : "Quantity Less Than 20";
})



// toReversed() Method
{
  const items = [1, 2, 3, 4, 5]
  const reversed = items.toReversed()
  console.log(reversed);
  console.log(items);
}

// toSpliced() method
const months = ["January", "March", "April", "May"]
const months2 = months.toSpliced(1, 0, "February")
console.log(months2); // // ["January", "February", "March", "April", "May"]
console.log(months); // ["January", "March", "April", "May"]


// with() Method
// syntax: array.with(index, value) 
// If index is negative value like (-1, -2 etc), then counting from the end
{
  const numbers = [1, 2, 3, 4, 5, 6]
  const newArray = numbers.with(3, 7)
  console.log(numbers);
  console.log(newArray);

  const anotherArray = numbers.with(-2, 8)
  console.log(anotherArray); // // [1, 2, 3, 7, 8, 6] Counting from the last
}