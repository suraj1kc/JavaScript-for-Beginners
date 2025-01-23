// ====================
// 6.6 Operators and Expressions
// ====================

// Operators are symbols or keywords that perform operations on values (operands) and produce a result.
// Expressions are combinations of values, variables, operators, and function calls that evaluate to a single value.

// --------------------
// Types of Operators
// --------------------
// JavaScript supports a wide range of operators, which can be categorized into the following types:

// 1. **Arithmetic Operators**: Perform mathematical operations.
// 2. **Assignment Operators**: Assign values to variables.
// 3. **Comparison Operators**: Compare two values and return a boolean (true or false).
// 4. **Logical Operators**: Combine boolean values and return a boolean result.
// 5. **Bitwise Operators**: Perform operations on binary representations of numbers.
// 6. **String Operators**: Concatenate strings.
// 7. **Conditional (Ternary) Operator**: A shorthand for conditional statements.
// 8. **Unary Operators**: Operate on a single operand.
// 9. **Type Operators**: Check the type of a value or variable.

// --------------------
// 1. Arithmetic Operators
// --------------------
// Arithmetic operators are used to perform mathematical calculations.

// Examples:
// +  Addition: Adds two numbers or concatenates strings.
// -  Subtraction: Subtracts one number from another.
// *  Multiplication: Multiplies two numbers.
// /  Division: Divides one number by another.
// %  Modulus: Returns the remainder of a division.
// ** Exponentiation: Raises a number to the power of another.

// Example:
let sum = 10 + 5; // Addition: 15
let difference = 10 - 5; // Subtraction: 5
let product = 10 * 5; // Multiplication: 50
let quotient = 10 / 5; // Division: 2
let remainder = 10 % 3; // Modulus: 1
let power = 2 ** 3; // Exponentiation: 8

// --------------------
// 2. Assignment Operators
// --------------------
// Assignment operators are used to assign values to variables.

// Examples:
// =   Assigns a value to a variable.
// +=  Adds a value to a variable and assigns the result.
// -=  Subtracts a value from a variable and assigns the result.
// *=  Multiplies a variable by a value and assigns the result.
// /=  Divides a variable by a value and assigns the result.
// %=  Assigns the remainder of a division to a variable.

// Example:
let x = 10; // Assigns 10 to x
x += 5; // Equivalent to x = x + 5; x is now 15
x -= 3; // Equivalent to x = x - 3; x is now 12
x *= 2; // Equivalent to x = x * 2; x is now 24
x /= 4; // Equivalent to x = x / 4; x is now 6
x %= 5; // Equivalent to x = x % 5; x is now 1

// --------------------
// 3. Comparison Operators
// --------------------
// Comparison operators compare two values and return a boolean (true or false).

// Examples:
// ==  Equal to (checks value only).
// === Equal to (checks both value and type).
// !=  Not equal to (checks value only).
// !== Not equal to (checks both value and type).
// >   Greater than.
// <   Less than.
// >=  Greater than or equal to.
// <=  Less than or equal to.

// Example:
let a = 10;
let b = "10";
console.log(a == b); // true (value is the same)
console.log(a === b); // false (value is the same, but type is different)
console.log(a != b); // false (value is the same)
console.log(a !== b); // true (value is the same, but type is different)
console.log(a > 5); // true
console.log(a < 20); // true
console.log(a >= 10); // true
console.log(a <= 10); // true

// --------------------
// 4. Logical Operators
// --------------------
// Logical operators are used to combine boolean values and return a boolean result.

// Examples:
// &&  Logical AND: Returns true if both operands are true.
// ||  Logical OR: Returns true if at least one operand is true.
// !   Logical NOT: Reverses the boolean value of the operand.

// Example:
let isStudent = true;
let isAdult = false;
console.log(isStudent && isAdult); // false (both must be true)
console.log(isStudent || isAdult); // true (at least one is true)
console.log(!isStudent); // false (reverses the value)

// --------------------
// 5. Bitwise Operators
// --------------------
// Bitwise operators perform operations on binary representations of numbers.

// Examples:
// &   Bitwise AND
// |   Bitwise OR
// ^   Bitwise XOR
// ~   Bitwise NOT
// <<  Left shift
// >>  Right shift
// >>> Unsigned right shift

// Example:
let num1 = 5; // Binary: 0101
let num2 = 3; // Binary: 0011
console.log(num1 & num2); // 1 (Binary: 0001)
console.log(num1 | num2); // 7 (Binary: 0111)
console.log(num1 ^ num2); // 6 (Binary: 0110)

// --------------------
// 6. String Operators
// --------------------
// The `+` operator is used to concatenate (join) strings.

// Example:
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// --------------------
// 7. Conditional (Ternary) Operator
// --------------------
// The ternary operator is a shorthand for conditional statements.

// Syntax:
// condition ? expression1 : expression2

// Example:
let age = 18;
let status = age >= 18 ? "Adult" : "Minor"; // "Adult"

// --------------------
// 8. Unary Operators
// --------------------
// Unary operators operate on a single operand.

// Examples:
// ++  Increment: Increases the value by 1.
// --  Decrement: Decreases the value by 1.
// typeof  Returns the type of a value or variable.
// delete  Deletes a property from an object.

// Example:
let count = 5;
count++; // count is now 6
count--; // count is now 5
console.log(typeof count); // "number"

// --------------------
// 9. Type Operators
// --------------------
// Type operators are used to check the type of a value or variable.

// Examples:
// typeof  Returns the type of a value or variable.
// instanceof  Checks if an object is an instance of a specific class.

// Example:
console.log(typeof "Hello"); // "string"
console.log(typeof 10); // "number"
console.log(typeof true); // "boolean"

// --------------------
// Expressions
// --------------------
// An expression is a combination of values, variables, operators, and function calls that evaluates to a single value.

// Examples:
let result = 10 + 5 * 2; // 20 (arithmetic expression)
let isEligible = age >= 18 && isStudent; // logical expression
let message = "Hello, " + firstName; // string expression

// --------------------
// Key Takeaways for Students
// --------------------
// - Operators are used to perform operations on values.
// - Expressions combine values, variables, and operators to produce a result.
// - JavaScript supports various types of operators, including arithmetic, assignment, comparison, logical, and more.
// - Practice using operators and expressions to understand how they work in different scenarios.

// ====================
// Summary
// ====================
// Operators and expressions are fundamental concepts in JavaScript. Operators allow you to perform operations on values, while expressions combine these elements to produce a result. By mastering operators and expressions, you can write efficient and powerful JavaScript code.
