// ====================
// 7.2 Error Handling and Debugging
// ====================

// Error handling is essential for building robust applications that handle unexpected situations gracefully.
// Debugging is the process of identifying and fixing errors in your code.

// --------------------
// 1. Types of Errors
// --------------------
// JavaScript has several types of errors:
// - Syntax Errors: Occur when JavaScript syntax rules are violated.
// - Runtime Errors: Occur during execution of code, such as trying to access an undefined variable or dividing by zero.
// - Logical Errors: Occur when the code runs without crashing but doesn't produce the expected outcome due to logic errors.

// Example: Syntax Error
// let myVar // SyntaxError: Missing semicolon

// Example: Runtime Error
// let num = undefined;
// console.log(num.toLowerCase()); // TypeError: Cannot read property 'toLowerCase' of undefined

// Example: Logical Error
// function add(a, b) {
// return a - b; // Logical error: should be a + b
// }
// let result = add(5, 3); // Result: 2 (should be 8)

// --------------------
// 2. try...catch Statement
// --------------------
// The try...catch statement allows you to handle errors by trying a block of code and catching any errors that occur.

// Example:
try {
  // Code that might throw an error
  let num = undefined;
  console.log(num.toLowerCase());
} catch (error) {
  // Code to handle the error
  console.error("An error occurred:", error.message); // Output: An error occurred: Cannot read properties of undefined (reading 'toLowerCase')
} finally {
  // Code that will execute regardless of success or failure
  console.log("Finally block executed");
}
// Explanation:
// - If an error occurs in the try block, the code execution jumps to the catch block.
// - The catch block receives an error object that contains information about the error.
// - The finally block executes regardless of whether an error occurred.
// - The catch block prevents the program from crashing by catching the error

// --------------------
// 3. Throwing Errors
// --------------------
// You can also throw custom errors using the throw statement, which is useful for handling invalid data or unexpected conditions.

// Example:
function checkAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative!");
  }
  return "Age is valid";
}

try {
  let result = checkAge(-5);
  console.log(result);
} catch (error) {
  console.error("Error:", error.message); // Output: Error: Age cannot be negative!
}

// --------------------
// 4. Debugging Techniques
// --------------------
// Debugging is the process of finding and fixing errors in your code. Here are some techniques:
// - Using console.log(): Logging variables and messages to the console for debugging.
// - Using Browser Debugger: Step through code, set breakpoints, inspect variables, and monitor the program's state.
// - Using debugger Statement: Insert debugger; in your code to pause execution at that point.

// Example: Using debugger
function calculateSum(a, b) {
  let sum = a + b;
  debugger; // Pauses code execution to inspect variables
  return sum;
}

// --------------------
// 5. Error Object
// --------------------
// The Error object provides information about an error that occurred. Key properties include:
// - message: Error message text.
// - name: Error type (e.g., "TypeError", "ReferenceError").
// - stack: Stack trace of where the error occurred.

// --------------------
// Key Takeaways for Students
// --------------------
// - Error handling is vital for creating stable and user-friendly applications.
// - Use try...catch blocks to catch and handle errors that might occur during code execution.
// - Use the throw statement to raise custom errors based on specific conditions.
// - Debugging is a key skill in software development; use debugging tools effectively.
// - The Error object provides properties such as message, name, and stack.

// ====================
// Summary
// ====================
// Error handling and debugging are fundamental skills for any JavaScript developer. By using try...catch, throwing custom errors, and mastering debugging techniques, you can create more robust and user-friendly applications. Practice these techniques in different scenarios to build expertise in error management.
