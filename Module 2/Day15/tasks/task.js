// T-001: Create an array of 5 elements using the Array Constructor.
const arr = new Array(20, 25, 35, 45, 55)
// console.log(arr);
for(let i = 0; i <= arr.length - 1; i++){
  // console.log(`Index ${i}: ${arr[i]}`);
}

//  T-002: Create an array of 3 empty slots.
const empArr = new Array(3)
// console.log(empArr);

const nestedArr = [10,20,30, [4,5,6], [7,8,9]]
const addStarts = nestedArr.unshift(8)
console.log(addStarts);
console.log(nestedArr);

const addEnds = nestedArr.push(100)
console.log(addEnds);
console.log(nestedArr);

const delFirst = nestedArr.shift()
console.log(delFirst);
console.log(nestedArr);

const delLast = nestedArr.pop()
console.log(delLast);
console.log(nestedArr);

const [first, second, third, , fourth, fifth=8] = nestedArr
console.log(first, second, third, fourth, fifth);

// T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const favoriteFruits = [ '🍎', '🍌', '🍇', '🍉', '🍓', '🍍', '🥭', '🍒', '🍑', '🍋' ]
const [, , , , , sixth] = favoriteFruits
console.log(sixth);

// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [tomato, banana, ...restElements] = favoriteFruits
console.log(restElements);

// T-009: Clone an Array(Shallow cloning)
const favoriteFruitsCopy = [...favoriteFruits]
console.log(favoriteFruitsCopy);
console.log(favoriteFruitsCopy === favoriteFruits);

//  T-010: Empty an array using its length property
const nums = [23, 45, 67, 44]
nums.length = 0
console.log(nums);

// T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
const numbers = [1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<=numbers.length; i++){
  if(numbers[i] === 5){
    numbers.length = 6
    break;
  }
}
console.log(numbers);


// T-014: What happens when you concatenate two empty arrays?
{
  const arr1 = []
  const arr2 = []

  const result = arr1.concat(arr2)
  console.log(result); // []
}

// T-015: How can you check if a value is partially matching with any of the elements of an Array??
const fruits = ["apple", "banana", "pineapple", "grape"];
const isPartialMatch = fruits.some(fruit => fruit.includes("app"))
console.log(isPartialMatch); // true


// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
{
  const fruits = ["banana", "apple", "pineapple", "grape"];
  const sorted = fruits.toSorted((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1; // Ascending
    return a === b ? 0 : a > b ? -1 : 1; // Descending
  })
  console.log(sorted); //  ['pineapple', 'grape', 'banana', 'apple']
  console.log(fruits); // ['banana', 'apple', 'pineapple', 'grape']
}

// T-019: Give a practical usages of the .fill() method
{
  const nums = [1, 2, 3, 4]
const filled = nums.fill("one", 2, 3)
console.log(filled);
}