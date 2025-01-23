// ====================
// 6.5 Variables in JavaScript
// ====================

// Variables are used to store data that can be used and manipulated throughout a program.
// In JavaScript, variables can be declared using `var`, `let`, or `const`.

// --------------------
// 1. `var` (Function-scoped)
// --------------------
// `var` is the oldest way to declare variables in JavaScript.
// Variables declared with `var` are function-scoped, meaning they are only accessible within the function they are declared in.
// If declared outside a function, they are globally scoped.

var greeting = "Hello, World!"; // Declare a variable using `var`
console.log(greeting); // Output: Hello, World!

// `var` allows redeclaration and reassignment:
var greeting = "Hi there!"; // Redeclare the same variable
console.log(greeting); // Output: Hi there!

greeting = "How are you?"; // Reassign the variable
console.log(greeting); // Output: How are you?

// --------------------
// 2. `let` (Block-scoped)
// --------------------
// `let` is a modern way to declare variables introduced in ES6 (ES2015).
// Variables declared with `let` are block-scoped, meaning they are only accessible within the block (e.g., inside `{}`) they are declared in.

let count = 10; // Declare a variable using `let`
console.log(count); // Output: 10

// `let` allows reassignment but not redeclaration within the same scope:
count = 20; // Reassign the variable
console.log(count); // Output: 20

// let count = 30; // This would throw an error: SyntaxError: Identifier 'count' has already been declared

// Block-scoping example:
if (true) {
  let blockScoped = "I am inside a block";
  console.log(blockScoped); // Output: I am inside a block
}
// console.log(blockScoped); // This would throw an error: ReferenceError: blockScoped is not defined

// --------------------
// 3. `const` (Block-scoped, Immutable)
// --------------------
// `const` is also introduced in ES6 and is used to declare variables that cannot be reassigned.
// Variables declared with `const` are block-scoped and must be initialized at the time of declaration.

const PI = 3.14159; // Declare a constant variable
console.log(PI); // Output: 3.14159

// `const` does not allow reassignment:
// PI = 3.14; // This would throw an error: TypeError: Assignment to constant variable.

// `const` also does not allow redeclaration:
// const PI = 3.14; // This would throw an error: SyntaxError: Identifier 'PI' has already been declared

// Note: For objects and arrays, `const` only prevents reassignment of the variable itself, not the contents of the object or array.
const person = {
  name: "Alice",
  age: 25,
};
person.age = 26; // This is allowed
console.log(person); // Output: { name: 'Alice', age: 26 }

// person = {}; // This would throw an error: TypeError: Assignment to constant variable.

// --------------------
// Variable Naming Rules
// --------------------
// 1. Variable names can contain letters, digits, underscores (_), and dollar signs ($).
// 2. Variable names must begin with a letter, underscore, or dollar sign (not a digit).
// 3. Variable names are case-sensitive (e.g., `myVar` and `myvar` are different).
// 4. Reserved keywords (e.g., `let`, `const`, `function`) cannot be used as variable names.

// Example of valid variable names:
let myVariable = "Valid";
let _myVariable = "Valid";
let $myVariable = "Valid";
let myVariable2 = "Valid";

// Example of invalid variable names:
// let 2myVariable = "Invalid"; // Error: Cannot start with a digit
// let my-Variable = "Invalid"; // Error: Hyphens are not allowed
// let let = "Invalid"; // Error: Reserved keyword

// --------------------
// Best Practices
// --------------------
// 1. Use `const` by default, and only use `let` if you need to reassign the variable.
// 2. Avoid using `var` unless you have a specific reason (e.g., supporting older browsers).
// 3. Use meaningful and descriptive variable names to improve code readability.
// 4. Follow a consistent naming convention, such as camelCase (e.g., `myVariableName`).

// Example of good practices:
const userName = "JohnDoe"; // Use `const` for values that won't change
let score = 100; // Use `let` for values that may change
console.log(userName, score); // Output: JohnDoe 100
