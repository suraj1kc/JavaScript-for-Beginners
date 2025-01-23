// ====================
// JavaScript Comments
// ====================

// Comments are used to explain JavaScript code, making it easier to understand and maintain.
// They are ignored by the JavaScript engine and are not executed as part of the code.
// Comments can also be used to temporarily disable code during testing or debugging.

// --------------------
// 1. Single-Line Comments
// --------------------
// Single-line comments start with `//`.
// Any text between `//` and the end of the line will be ignored by JavaScript.

// Example: Using a single-line comment to explain a line of code
let greeting = "Hello, World!"; // This variable stores a greeting message
console.log(greeting); // Output: Hello, World!

// Example: Using a single-line comment to disable a line of code
// console.log("This line is commented out and will not run.");

// --------------------
// 2. Multi-Line Comments
// --------------------
// Multi-line comments start with `/*` and end with `*/`.
// Any text between `/*` and `*/` will be ignored by JavaScript.
// Multi-line comments are useful for adding detailed explanations or commenting out multiple lines of code.

// Example: Using a multi-line comment to explain a block of code
/*
  The following code calculates the sum of two numbers
  and logs the result to the console.
*/
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum); // Output: 30

// Example: Using a multi-line comment to disable a block of code
/*
console.log("This code is commented out.");
console.log("It will not be executed.");
*/

// --------------------
// 3. Best Practices for Using Comments
// --------------------
// - Use comments to explain the "why" behind your code, not the "what" (the code itself should be self-explanatory).
// - Keep comments concise and relevant.
// - Avoid over-commenting; too many comments can clutter the code.
// - Update comments when you update the code to ensure they remain accurate.
// - Use single-line comments for short explanations and multi-line comments for longer descriptions or disabling code blocks.

// Example: Good use of comments
// Calculate the area of a circle
const radius = 5;
const area = Math.PI * radius ** 2; // Formula: πr²
console.log(area); // Output: 78.53981633974483

// Example: Avoid unnecessary comments
let x = 5; // Assign 5 to x (this comment is redundant)

// --------------------
// 4. Using Comments for Debugging
// --------------------
// Comments are often used to temporarily disable code during debugging or testing.
// This allows you to isolate issues without deleting code.

// Example: Commenting out code for debugging
let a = 10;
let b = 20;
// let result = a + b; // Temporarily disabled for debugging
let result = a * b; // Testing multiplication instead of addition
console.log(result); // Output: 200

// --------------------
// 5. Special Cases: Commenting Out HTML or CSS in JavaScript
// --------------------
// When embedding JavaScript in HTML or working with template literals, you may need to comment out HTML or CSS code.

// Example: Commenting out HTML in a template literal
let htmlContent = `
  <div>
    <h1>Hello, World!</h1>
    <!-- <p>This paragraph is commented out.</p> -->
  </div>
`;
console.log(htmlContent);

// Example: Commenting out CSS in a template literal
let cssContent = `
  .container {
    width: 100%;
    /* height: 200px; */
  }
`;
console.log(cssContent);

// ====================
// Summary
// ====================
// - Single-line comments: Use `//` for short explanations or to disable a single line.
// - Multi-line comments: Use `/* ... */` for longer descriptions or to disable multiple lines.
// - Use comments wisely to improve code readability and maintainability.
// - Update comments regularly to keep them in sync with the code.
