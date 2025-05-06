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




// Array Like
const arr_like = {0: "I", 1: "am", 2: "array-like", length: 3};
console.log(arr_like)
console.log(arr_like[2]); // array-like
console.log(arr_like.length); // 3

console.log(`Is arr_like is an array ? ${Array.isArray(arr_like)}`); // false
console.log(`Is arr_like is an object? ${arr_like instanceof Object}`); // true


// How to Convert to Real Array:

// Method 1:
function checkArgs(){
  console.log("Array Like Args: ", arguments);
  const argArr = [...arguments]
  console.log("Converted Array Args: ", argArr);
  argArr.forEach((element) =>{
    console.log(element);
  })
}

checkArgs(1, 2, 3, 4, 5)


// Method 2:
const liList = document.getElementsByTagName('li');
console.log(liList);
const collectionArray = Array.from(liList);
console.log("Converted Collection Array: ", collectionArray);
collectionArray.forEach((element)=>{
  console.log(element);
})


// Array.fromAsync()
const collectionPromise = Array.fromAsync(document.getElementsByTagName('li'))
console.log("Converted Array: ", collectionPromise);
// collectionPromise.then((value) => console.log(value));


const ret = Array.fromAsync({
  0: Promise.resolve('TapaScript'),
  1: Promise.resolve('Google'),
  2: Promise.resolve('Apple'),
  length: 3
}).then((value)=>console.log(value))

console.log(ret);



// Array.of(): Array.of() is a static method that creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
const a = new Array(2, 3, 4); // [2, 3, 4]
const b = [5, 6, 7]; // [5, 6, 7]

const c = Array.of(2, true, 'test', {"name" : "Alex"}, [1,2,3]);
console.log(c);



/************************************************************************************** */

// Array Iterator Method

const customers = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    gender: "Male",
    married: true,
    age: 32,
    expense: 1200,
    purchased: ["shampoo", "Toys", "Book"]
  },
  {
    id: 2,
    first_name: "Emma",
    last_name: "Smith",
    gender: "Female",
    married: true,
    age: 27,
    expense: 850,
    purchased: ["Stick", "Blade"]
  },
  {
    id: 3,
    first_name: "Akira",
    last_name: "Tanaka",
    gender: "Male",
    married: false,
    age: 22,
    expense: 1540,
    purchased: ["Lipstick", "Nail Polish", "Bag", "Book"]
  },
  {
    id: 4,
    first_name: "Sophia",
    last_name: "Lee",
    gender: "Female",
    married: true,
    age: 82,
    expense: 430,
    purchased: ["Book"]
  },
  {
    id: 5,
    first_name: "Carlos",
    last_name: "Garcia",
    gender: "Male",
    married: false,
    age: 7,
    expense: 970,
    purchased: ["Toys"]
  },
  {
    id: 6,
    first_name: "Aisha",
    last_name: "Khan",
    gender: "Female",
    married: true,
    age: 29,
    expense: 780,
    purchased: ["Toys", "Stick"]
  }
];

// 1. filter()
// Get 'Senior Citizens' by filtering out other customers
const seniorCustomers = customers.filter((customer) => {
  return customer.age >= 60
})

console.log("Senior Customers List: ", seniorCustomers);
console.log(seniorCustomers);



// 2. map()
// Transform to add title and full name
const customersWithFullName = customers.map((customer) => {
  let title = "";
  if(customer.gender === "Male"){
    title = "Mr."
  } else if(customer.gender === "Female" && customer.married){
    title = "Mrs."
  } else{
    title = "Miss."
  }
  
  customer['full_name'] = `${title} ${customer.first_name} ${customer.last_name}`
  return customer
})
console.log(customersWithFullName);



// 3. reduce(): 
// The average age of the Customers who have purchased the Item 'Book'.

// arr.reduce(reducer(accumulator, currentValue, indexedDB, array), initialValue);
// A reducer function is a function which is also called as callback function to be called on each element of the array.

// const ret2 = reducer(accumulator, currentValue, indexedDB, array){
//   // do something with accumulator and currentValue
//   // you get a result
//   // you return that result
// }

const arr = [1, 2, 3, 4, 5, 6, 7]
const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

let count = 0;
const total = customers.reduce((accumulator, customer) => {
  if(customer.purchased.includes("Book")){
    accumulator += customer.age;
    count++;
  }
  return accumulator;
}, 0);

const average = Math.floor(total/count)
console.log(`Customer average age Purchased Book: ${average}`);



// 4. reduceRight(): 
let number = [100, 40, 15];
const subsResult = number.reduceRight((accumulator, currentValue) => {
  return accumulator - currentValue;
})

console.log(subsResult);


// 5. some()
// Do you have a Young Customer (age less than 10 years)
const hasYoungCustomer = customers.some((customer) => {
  return customer.age < 10;
})

console.log("Has young Customer (Age < 10): ", hasYoungCustomer);


// 6. every()
// Every customer is married
const isAllMarried = customers.every((customer) => {
  return customer.married;
})

console.log("All Customer Married ?", isAllMarried);


// 7. find()
// Find the youngest customer
const foundYoungCustomer = customers.find((customer) => {
  return customer.age < 10;
})

console.log("Found Young Customer (Age < 10): ", foundYoungCustomer);


// 8. findIndex()
const youngCustomerIndex = customers.findIndex((customer) => {
  return customer.age < 10;
})

console.log("Found Young Customer Index: ", youngCustomerIndex);


// 9. findLastIndex()
const nums = [1, 2, 3, 4, 5];
console.log(nums.findLastIndex(n => n % 2 === 1)); // 4



// 14. Array Method Chaining
// Use Case: Get the total amount spent by Married Customers

// filter()
// map()
// reduce()

// const marriedCustomers = customers.filter((customer) => {
//   return customer.married;
// });
// const expenseMapped = marriedCustomers.map((marriedCustomer) => {
//   return marriedCustomer.expense;
// });
// const totalExpense = expenseMapped.reduce((accumulator, expense) => {
//   return accumulator + expense;
// }, 0);
// console.log("Total expense of Married Customers in USD: ", totalExpense);

const totalExpense = customers.filter((customer) => {
  return customer.married;
})
.map((marriedCustomer) => {
  return marriedCustomer.expense;
})
.reduce((accumulator, expense) => {
  return accumulator + expense;
}, 0);

console.log("Total expense of Married Customers in USD: ", totalExpense);


{
//  10. forEach()
  const arr = [1, 2, 3, 4, 6];
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  })
  console.log("Sum using forEach:", sum);
}

{
  // 11. entries()
  const arr = [1, 2, 3, 4, 5, 6];
  const arrItr = arr.entries();
  // console.log("Array Iterator", arrItr.next().value); //  [0, 1]
  for(const [index, value] of arrItr){
    console.log(index, value);
  }
}

{
  // 12. values()
  const arr = [1, 2, 3, 4, 5, 6];
  const arrItr = arr.values();
  for(const value of arrItr){
    console.log(value);
  }

}



{
  // 13. flatMap()
  const arr = [1, 2, 3, 4, 5, 6];
  console.log("Simple map:", arr.map(item => item * 2)); // [1, 2, 3, 4, 5, 6]
  console.log("Simple flatmap:", arr.flatMap(item => item * 2)); // [1, 2, 3, 4, 5, 6]
  console.log("Complex Map", arr.map(item => [item * 2])); // [[1], [2], [3], [4], [5], [6]]
  console.log("Complex flatmap", arr.flatMap(item => [item * 2])); // [1, 2, 3, 4, 5, 6]
}
