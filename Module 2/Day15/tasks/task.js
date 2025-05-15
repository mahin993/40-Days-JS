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


/***************************************************************************************** */
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];



const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

// T-021: Can you filter employees who work in the "Engineering" department?
const {id:engineeringId} = departments.find(({name})=> name === "Engineering")
const employeeId = employees.filter(({departmentId})=> departmentId === engineeringId)
console.log(employeeId); 

//  T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const result = employees.map(({ name, departmentId }) => {
  const { name: deptName } = departments.find(({ id }) => id === departmentId);
  return `${name} (${deptName})`;
});

console.log(result);


// T-023: Find the highest salary among employees.
const highestSalaryEmployees = employees.reduce((max, employee)=> employee.salary > max ? employee.salary : max, 0)
console.log(highestSalaryEmployees);


// T-024: Check if there is at least one employee in the "Sales" department.
const salesDept = departments.find(dept => dept.name === "Sales")

const hasSalesEmployee = employees.some(employee => employee.departmentId === salesDept.id)
console.log("Is there at least one employee in sales?", hasSalesEmployee);

//  T-025: Write a function to filter employees earning more than 6000.
const earningMore6000 = employees.filter(employee => employee.salary > 6000)
console.log(earningMore6000);


// T-026: Create an array of employee names only.
const empName = employees.map(employee => employee.name)
console.log(empName);

// T-027: Calculate the total salary of all employees
const empTotalSalary = employees.reduce((accumulator, employee) => {
  return accumulator += employee.salary
}, 0)

console.log("Total Salary of Employees is: ", empTotalSalary);

// T-028: Is there any employee earning less than 5000?
const earningBelow5000 = employees.some(employee => employee.salary < 5000)
console.log("Is there any employee earning less than 5000?", earningBelow5000);

// T-029: Find the first employee who earns exactly 5100.
const salary5100 = employees.find(emp => emp.salary === 5100)
console.log("Employee who earns exactly 5100: ", salary5100);

// T-030: Find the last employee in the "HR" department.
const deptHR = departments.find(emp => emp.name === "HR");
const lastEmpHR = employees.findLast(employee => employee.departmentId === deptHR.id)
console.log(lastEmpHR);

//  T-031: Find the first employee in the "Marketing" department.
const deptMarketing = departments.find(emp => emp.name === "Marketing");
const firstEmpMarketing = employees.find(employee => employee.departmentId === deptMarketing.id)
console.log(firstEmpMarketing);

//  T-035: Log each employee's name and department name to the console.
employees.forEach(employee => {
  const departmentName = departments.find(dept => dept.id === employee.departmentId)?.name;
  console.log(`${employee.name} works in ${departmentName} department`);
});


//  T-036: Extract all employee names into a single array.
const employeeNames = employees.map(emp => emp.name)
console.log(employeeNames);


//  T-037: Increment each employee's salary by 10%
const incrementEmployeeSalary = employees.map(emp => {
  const increment10 = emp.salary * 0.1;
  const totalSalaryWithIncrement10 = emp.salary + increment10;
  return totalSalaryWithIncrement10;
})
console.log(incrementEmployeeSalary);

//  T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].


// T-039: Find the total salary of all employees working in the "Engineering" department.
const engineeringDept = departments.find(emp => emp.name === "Engineering");
const engEmployees = employees.filter(emp => emp.departmentId === engineeringDept.id);
const engEmployeesTotalSalary = engEmployees.reduce((sum, emp) => sum += emp.salary, 0)
console.log(`Total salary of all employees working in the engineering dept: ${engEmployeesTotalSalary}`);


