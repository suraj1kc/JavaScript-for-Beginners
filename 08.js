// ====================
// 6.7 Control Flow and Conditionals
// ====================

// Control flow refers to the order in which statements are executed in a program.
// Conditionals are used to make decisions in code based on certain conditions.
// JavaScript provides several ways to control the flow of execution, including:
// 1. `if` statements
// 2. `else` statements
// 3. `else if` statements
// 4. `switch` statements
// 5. Ternary operator (conditional operator)

// --------------------
// 1. `if` Statements
// --------------------
// The `if` statement is used to execute a block of code only if a specified condition is true.

// Syntax:
// if (condition) {
//   // Code to execute if the condition is true
// }

// Example:
let age = 18;
if (age >= 18) {
  console.log("You are an adult."); // This will execute because the condition is true
}

// --------------------
// 2. `else` Statements
// --------------------
// The `else` statement is used to execute a block of code if the `if` condition is false.

// Syntax:
// if (condition) {
//   // Code to execute if the condition is true
// } else {
//   // Code to execute if the condition is false
// }

// Example:
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's not hot outside."); // This will execute because the condition is false
}

// --------------------
// 3. `else if` Statements
// --------------------
// The `else if` statement is used to test multiple conditions. It is placed between `if` and `else`.

// Syntax:
// if (condition1) {
//   // Code to execute if condition1 is true
// } else if (condition2) {
//   // Code to execute if condition2 is true
// } else {
//   // Code to execute if all conditions are false
// }

// Example:
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // This will execute because the condition is true
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// --------------------
// 4. `switch` Statements
// --------------------
// The `switch` statement is used to perform different actions based on different conditions.
// It is an alternative to multiple `else if` statements when comparing the same variable against multiple values.

// Syntax:
// switch (expression) {
//   case value1:
//     // Code to execute if expression matches value1
//     break;
//   case value2:
//     // Code to execute if expression matches value2
//     break;
//   default:
//     // Code to execute if no cases match
// }

// Example:
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday."); // This will execute
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  default:
    console.log("Today is not Monday or Tuesday.");
}

// Note: The `break` statement is used to exit the `switch` block. Without it, the code will "fall through" to the next case.

// --------------------
// 5. Ternary Operator (Conditional Operator)
// --------------------
// The ternary operator is a shorthand for `if-else` statements. It takes three operands:
// 1. A condition
// 2. An expression to execute if the condition is true
// 3. An expression to execute if the condition is false

// Syntax:
// condition ? expression1 : expression2

// Example:
let isRaining = true;
let weatherMessage = isRaining ? "Bring an umbrella." : "Enjoy the weather.";
console.log(weatherMessage); // "Bring an umbrella."

// --------------------
// Nested Conditionals
// --------------------
// Conditionals can be nested inside other conditionals to handle more complex logic.

// Example:
let num = 10;
if (num > 0) {
  if (num % 2 === 0) {
    console.log("The number is positive and even."); // This will execute
  } else {
    console.log("The number is positive and odd.");
  }
} else {
  console.log("The number is not positive.");
}

// --------------------
// Key Takeaways for Students
// --------------------
// - Control flow determines the order in which statements are executed.
// - Conditionals (`if`, `else`, `else if`, `switch`) allow you to make decisions in your code.
// - The ternary operator is a concise way to write simple `if-else` statements.
// - Nested conditionals can handle more complex decision-making scenarios.

// ====================
// Summary
// ====================
// Control flow and conditionals are essential for writing dynamic and flexible JavaScript code. By using `if`, `else`, `else if`, `switch`, and the ternary operator, you can control the execution of your program based on specific conditions. Practice these concepts to build logic and decision-making into your applications.
