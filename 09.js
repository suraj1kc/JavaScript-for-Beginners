// ====================
// 6.8 Loops
// ====================

// Loops are used to execute a block of code repeatedly until a specified condition is met.
// They are essential for automating repetitive tasks and iterating over data structures like arrays.
// JavaScript provides several types of loops:
// 1. `for` loop
// 2. `while` loop
// 3. `do...while` loop
// 4. `for...in` loop
// 5. `for...of` loop

// --------------------
// 1. `for` Loop
// --------------------
// The `for` loop is used when you know how many times you want to execute a block of code.

// Syntax:
// for (initialization; condition; increment/decrement) {
//   // Code to execute
// }

// Example:
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i); // Output: Iteration: 0, Iteration: 1, ..., Iteration: 4
}

// Explanation:
// - Initialization: `let i = 0` (start with `i` equal to 0).
// - Condition: `i < 5` (continue looping as long as `i` is less than 5).
// - Increment: `i++` (increase `i` by 1 after each iteration).

// --------------------
// 2. `while` Loop
// --------------------
// The `while` loop is used when you want to execute a block of code as long as a condition is true.

// Syntax:
// while (condition) {
//   // Code to execute
// }

// Example:
let count = 0;
while (count < 5) {
  console.log("Count:", count); // Output: Count: 0, Count: 1, ..., Count: 4
  count++;
}

// Explanation:
// - The loop continues as long as `count < 5` is true.
// - Be careful with `while` loops to avoid infinite loops (where the condition never becomes false).

// --------------------
// 3. `do...while` Loop
// --------------------
// The `do...while` loop is similar to the `while` loop, but it guarantees that the block of code is executed at least once.

// Syntax:
// do {
//   // Code to execute
// } while (condition);

// Example:
let num = 0;
do {
  console.log("Number:", num); // Output: Number: 0
  num++;
} while (num < 0);

// Explanation:
// - The code inside the `do` block runs first, even if the condition is false.
// - After the first iteration, the loop continues only if the condition is true.

// --------------------
// 4. `for...in` Loop
// --------------------
// The `for...in` loop is used to iterate over the properties of an object.

// Syntax:
// for (key in object) {
//   // Code to execute
// }

// Example:
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

for (let key in person) {
  console.log(key + ":", person[key]); // Output: name: John, age: 30, occupation: Developer
}

// Explanation:
// - The loop iterates over each property (`key`) in the `person` object.
// - `person[key]` accesses the value of the property.

// --------------------
// 5. `for...of` Loop
// --------------------
// The `for...of` loop is used to iterate over iterable objects like arrays, strings, maps, and sets.

// Syntax:
// for (element of iterable) {
//   // Code to execute
// }

// Example:
const colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log("Color:", color); // Output: Color: Red, Color: Green, Color: Blue
}

// Explanation:
// - The loop iterates over each element (`color`) in the `colors` array.
// - Unlike `for...in`, `for...of` directly accesses the values of the iterable.

// --------------------
// Loop Control Statements
// --------------------
// JavaScript provides control statements to manage the flow of loops:
// 1. `break`: Exits the loop immediately.
// 2. `continue`: Skips the current iteration and moves to the next one.

// Example:
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log("Odd Number:", i); // Output: Odd Number: 1, Odd Number: 3
}

// --------------------
// Key Takeaways for Students
// --------------------
// - Loops are used to repeat a block of code until a condition is met.
// - Use `for` loops when you know the number of iterations.
// - Use `while` and `do...while` loops when the number of iterations is uncertain.
// - Use `for...in` to iterate over object properties and `for...of` to iterate over iterable values.
// - Use `break` to exit a loop and `continue` to skip an iteration.

// ====================
// Summary
// ====================
// Loops are a fundamental concept in JavaScript that allow you to automate repetitive tasks and process data efficiently. By mastering `for`, `while`, `do...while`, `for...in`, and `for...of` loops, you can write more dynamic and powerful programs. Practice using loops to solve real-world problems and improve your coding skills.
