// ====================
// 7.6 ES6 and Modern JavaScript
// ====================

// ES6 (ECMAScript 2015) and beyond introduce many new features and improvements to JavaScript.
// They enhance code readability, make it easier to write complex applications, and help to stay up-to-date with modern web development practices.

// --------------------
// 1. let and const
// --------------------
// let and const are block-scoped variable declarations, offering improvements over var.
// let allows reassignment; const doesn't.

// Example:
let count = 10;
count = 20; // Allowed
const PI = 3.14;
// PI = 3.1415; // Error: Assignment to constant variable

// --------------------
// 2. Arrow Functions
// --------------------
// Arrow functions provide a shorter syntax for writing function expressions.
// They also have a different way of handling the this keyword.

// Example:
// Regular function
// function add(a, b) {
// return a + b;
// }

// Arrow function
const add = (a, b) => a + b;
const multiply = (a, b) => {
return a * b;
};
// Arrow function with no arguments
const logMessage = () => console.log("Hello");
console.log(add(5, 3));
logMessage();

// --------------------
// 3. Template Literals
// --------------------
// Template literals use backticks (``) and allow string interpolation using ${expression}.

// Example:
let name = "John";
let age = 30;
let message = Hello, my name is ${name} and I am ${age} years old.;
console.log(message);

// --------------------
// 4. Destructuring
// --------------------
// Destructuring allows you to unpack values from arrays and objects into distinct variables.

// Example: Array destructuring
let colors = ["red", "green", "blue"];
let [first, second] = colors;
console.log(first); // Output: red

// Example: Object destructuring
let person = {
name: "Alice",
age: 25,
};
let { name: fullName, age: years } = person;
console.log(fullName); // Output: Alice

// --------------------
// 5. Spread and Rest Operators
// --------------------
// - Spread operator (...) allows arrays and objects to be expanded.
// - Rest operator (...) collects parameters into an array.

// Example: Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Expands arr1, and adds more values
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Example: Rest operator
function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// --------------------
// 6. Classes
// --------------------
// ES6 introduces class syntax for creating objects and managing inheritance.

// Example:
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}
greet() {
return Hello, I am ${this.name}.;
}
}
let person1 = new Person("Bob", 28);
console.log(person1.greet()); // Output: Hello, I am Bob.

// --------------------
// 7. Modules
// --------------------
// Modules allow you to organize code into separate files and share variables, functions, and classes between files.

// Example: Named exports
// export const PI = 3.14159;
// export function add(a, b) {return a + b};

// Example: Named imports
// import { PI, add } from "./myModule.js";

// Example: Default exports
// export default function sayHello(name) {console.log(Hello ${name})}
// Example: Default imports
// import sayHello from "./myModule.js";

// --------------------
// Key Takeaways for Students
// --------------------
// - ES6 and modern JavaScript include new features that improve your code.
// - let and const provide better variable declarations.
// - Arrow functions offer concise syntax for functions.
// - Template literals allow for easy string interpolation.
// - Destructuring helps unpack values from arrays and objects.
// - Spread and rest operators enhance array and object manipulation.
// - Classes provide a mechanism for object-oriented programming.
// - Modules enable code organization and reusability.

// ====================
// Summary
// ====================
// ES6 and modern JavaScript provide new features that enhance the way you write and maintain code. By mastering let, const, arrow functions, template literals, destructuring, spread and rest operators, classes, and modules, you can create more concise, readable, and maintainable code.