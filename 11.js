// ====================
// 6.10 Arrays
// ====================

// An array is a data structure used to store a collection of values.
// Arrays in JavaScript are dynamic, meaning they can grow or shrink in size, and can hold values of any data type (numbers, strings, objects, etc.).
// Arrays are zero-indexed, meaning the first element is at index 0.

// --------------------
// 1. Creating Arrays
// --------------------
// Arrays can be created using array literals or the `Array` constructor.

// Example: Using array literals
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// Example: Using the `Array` constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// --------------------
// 2. Accessing Array Elements
// --------------------
// Array elements are accessed using their index.

// Example:
console.log(fruits[0]); // Output: Apple (first element)
console.log(fruits[2]); // Output: Orange (third element)
console.log(fruits[3]); // Output: undefined (no element at index 3)

// --------------------
// 3. Modifying Array Elements
// --------------------
// Array elements can be modified by assigning a new value to a specific index.

// Example:
fruits[1] = "Mango";
console.log(fruits); // Output: ["Apple", "Mango", "Orange"]

// --------------------
// 4. Array Length
// --------------------
// The `length` property returns the number of elements in an array.

// Example:
console.log(fruits.length); // Output: 3

// --------------------
// 5. Adding and Removing Elements
// --------------------
// JavaScript provides several methods to add or remove elements from an array.

// a) `push()`: Adds one or more elements to the end of an array.
fruits.push("Grapes");
console.log(fruits); // Output: ["Apple", "Mango", "Orange", "Grapes"]

// b) `pop()`: Removes the last element from an array.
fruits.pop();
console.log(fruits); // Output: ["Apple", "Mango", "Orange"]

// c) `unshift()`: Adds one or more elements to the beginning of an array.
fruits.unshift("Pineapple");
console.log(fruits); // Output: ["Pineapple", "Apple", "Mango", "Orange"]

// d) `shift()`: Removes the first element from an array.
fruits.shift();
console.log(fruits); // Output: ["Apple", "Mango", "Orange"]

// --------------------
// 6. Iterating Over Arrays
// --------------------
// Arrays can be iterated using loops or array methods.

// a) Using a `for` loop:
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Output: Apple, Mango, Orange
}

// b) Using `forEach()`:
fruits.forEach(function (fruit) {
  console.log(fruit); // Output: Apple, Mango, Orange
});

// c) Using `for...of` loop:
for (let fruit of fruits) {
  console.log(fruit); // Output: Apple, Mango, Orange
}

// --------------------
// 7. Common Array Methods
// --------------------
// JavaScript provides many built-in methods to work with arrays.

// a) `concat()`: Combines two or more arrays.
let moreFruits = ["Grapes", "Pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Apple", "Mango", "Orange", "Grapes", "Pineapple"]

// b) `slice()`: Returns a shallow copy of a portion of an array.
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Mango", "Orange"]

// c) `splice()`: Adds or removes elements from an array at a specific index.
fruits.splice(1, 1, "Strawberry"); // Remove 1 element at index 1 and add "Strawberry"
console.log(fruits); // Output: ["Apple", "Strawberry", "Orange"]

// d) `indexOf()`: Returns the index of the first occurrence of a value.
console.log(fruits.indexOf("Orange")); // Output: 2

// e) `includes()`: Checks if an array contains a specific value.
console.log(fruits.includes("Apple")); // Output: true

// f) `join()`: Joins all elements of an array into a string.
let fruitString = fruits.join(", ");
console.log(fruitString); // Output: "Apple, Strawberry, Orange"

// g) `reverse()`: Reverses the order of elements in an array.
fruits.reverse();
console.log(fruits); // Output: ["Orange", "Strawberry", "Apple"]

// h) `sort()`: Sorts the elements of an array.
fruits.sort();
console.log(fruits); // Output: ["Apple", "Orange", "Strawberry"]

// --------------------
// 8. Multidimensional Arrays
// --------------------
// Arrays can contain other arrays, creating multidimensional arrays.

// Example:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]); // Output: 6 (second row, third column)

// --------------------
// 9. Array Destructuring
// --------------------
// Destructuring allows you to unpack values from arrays into distinct variables.

// Example:
let [firstFruit, secondFruit] = fruits;
console.log(firstFruit); // Output: Apple
console.log(secondFruit); // Output: Orange

// --------------------
// Key Takeaways for Students
// --------------------
// - Arrays are used to store collections of values.
// - Arrays are zero-indexed and dynamic in size.
// - Use methods like `push()`, `pop()`, `shift()`, and `unshift()` to modify arrays.
// - Use loops or array methods like `forEach()` to iterate over arrays.
// - Arrays can be multidimensional and support destructuring.

// ====================
// Summary
// ====================
// Arrays are a fundamental data structure in JavaScript, used to store and manipulate collections of values. By mastering arrays and their methods, you can efficiently work with lists of data in your programs. Practice creating, modifying, and iterating over arrays to build a strong foundation in JavaScript.
