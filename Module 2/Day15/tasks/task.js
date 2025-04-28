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