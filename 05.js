// 6.5 Variables and Data Types
// Variables are containers for storing data values.
// In this example, x, y, and z are variables:
// var x = 5;
// var y = 6;
// var z = x + y;

// JavaScript has three kinds of variables:
// var
// let
// const

// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

// var x = 5;
// var x = 6; // This will not cause an error.
// let y = 10;
// let y = 5; // This will cause an error.
// const z = 15;
// z = 10; // This will cause an error.

// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
// var x; // Now x is undefined
// x = 5; // Now x is a Number
// x = "John"; // Now x is a String
// JavaScript strings are written with quotes. You can use single or double quotes:
// var carName1 = "Volvo XC60"; // Using double quotes
// var carName2 = 'Volvo XC60'; // Using single quotes
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
// var answer1 = "It's alright"; // Single quote inside double quotes
// var answer2 = "He is called 'Johnny'"; // Single quotes inside double quotes
// var answer3 = 'He is called "Johnny"'; // Double quotes inside single quotes
// JavaScript will treat the variable as a number if the variable is numeric:
// var x = 123e5; // 12300000
// var y = 123e-5; // 0.00123
// JavaScript will treat the variable as a string if the variable is a string:
// var x = 123;
// var y = "123";
// JavaScript will treat the variable as a number if the variable is a number:
// var x = 123;
// var y = new Number(123);
