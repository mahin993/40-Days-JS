console.log("Day 02");

// Variables: Variables are used to store data in JavaScript.

// syntax of variable:
// let/const storage_name = value


// - 'var': Function-scoped, can be redeclared (not recommended)
// - 'let': Blocked-scoped, can be reassigned
// - 'const': Blocked-scoped, **cannot** be reassigned

const address = "Bangladesh"
console.log(address)


console.log(address)

console.log();


/*
- **Primitive Data Types: **
- `String` - Text values (`"Hello"`)
- `Number` - Numeric values (`25`, `3.14`)
- `Boolean` - True/False (`true`, `false`)
- `Undefined` - A variable declared but not assigned (`let x`)
- `Null` - Represent "nothing" (`let y = null;`)
- `BigInt` - Large identifiers (`BigInt (12345678901234567890)`)
- `Symbol` - Unique identifiers (`Symbol("id")`)

- **Non-Primitive (Reference) Data Types: **
- `Object` - Collection of key-value pairs
- `Array` - Ordered list of values
- `Function` - Code that can be executed
*/

let student = {
  name: "Alice",
  age: 22,
  isEnrolled: true
};
console.log(student.name);
