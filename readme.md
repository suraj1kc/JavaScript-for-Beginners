# JavaScript Basics and Advanced Concepts

> A comprehensive guide covering client-side scripting basic and advanced JavaScript concepts

# JavaScript Fundamentals

This document provides a comprehensive overview of JavaScript fundamentals, covering its history, basic concepts, data types, operators, control flow, functions, arrays, and objects.

## Table of Contents

1.  [History of JavaScript](#1-history-of-javascript)
2.  [Introduction to JavaScript](#2-introduction-to-javascript)
3.  [Using JavaScript in HTML](#3-using-javascript-in-html)
4.  [JavaScript Output](#4-javascript-output)
5.  [JavaScript Comments](#5-javascript-comments)
6.  [Variables in JavaScript](#6-variables-in-javascript)
7.  [Data Types in JavaScript](#7-data-types-in-javascript)
8.  [Operators and Expressions](#8-operators-and-expressions)
9.  [Control Flow and Conditionals](#9-control-flow-and-conditionals)
10. [Loops](#10-loops)
11. [Functions](#11-functions)
12. [Arrays](#12-arrays)
13. [Objects](#13-objects)

## 1. History of JavaScript

JavaScript's history is rooted in the early days of the web.

- **1995**: Created by **Brendan Eich** at **Netscape Communications**.
  - Initially named **LiveScript**, later renamed to **JavaScript** to capitalize on **Java's** popularity.
- **JavaScript** and **Java** are different languages despite similar names.
- First appeared in **Netscape Navigator 2.0** in 1995.
- Designed to add interactivity to web pages.
- **Internet Explorer** and other browsers quickly adopted JavaScript, making it a web development standard.
- **1996**: **Netscape** submitted JavaScript to the **European Computer Manufacturers Association (ECMA)** for standardization.
  - Standardized version named **ECMAScript** (officially ECMA-262).
- **ECMAScript** is the official name, while **JavaScript** is the implementation of the standard.
- **ECMAScript** ensures JavaScript works consistently across different browsers.
- **Evolution of JavaScript**:
  - **ES3 (1999)**: Regular expressions, string handling, exception handling.
  - **ES5 (2009)**: Strict mode, JSON support, new array methods (`map()`, `filter()`).
  - **ES6 (2015)**: `let` and `const`, arrow functions, classes, modules, template literals; began annual updates.
  - **ES7 and Beyond**: `async/await` (ES2017), optional chaining (ES2020), private class fields (ES2022).
- **JavaScript Today**:
  - Cornerstone of modern web development (front-end and back-end).
  - Powers millions of websites and applications.
  - Frameworks like **React**, **Angular**, and **Vue.js** have enhanced its versatility.
- **JavaScript and Oracle**:
  - **JavaScript** is a trademark of **Oracle Corporation**.
  - An open standard guided by **ECMA International**.
- **Importance of ECMAScript**:
  - The official standard defining the JavaScript language.
  - Ensures consistency and compatibility.
  - JavaScript versions are often referred to by their **ECMAScript** version (e.g., ES6, ES2015).

## 2. Introduction to JavaScript

JavaScript adds interactivity to web pages.

- It works with **HTML** (structure) and **CSS** (styling).
- Used for:
  - Dynamically updating content.
  - Controlling multimedia.
  - Animating images and graphics.
  - Creating interactive features.
  - Fetching and displaying data from servers without reloading pages.
- Key Features:
  - **High-Level**: Closer to human language than machine language.
  - **Interpreted**: Executed line by line by the browser's JavaScript engine.
  - **Lightweight**: Fast and efficient for interactive web pages.
  - **Case-Sensitive**: `myVariable` is different from `myvariable`.
  - **Object-Based**: Centered around objects.
- Why Learn JavaScript?
  - **Front-End Development**: Interactive and dynamic user interfaces.
  - **Back-End Development**: Server-side programming with **Node.js**.
  - **Cross-Platform Development**: Mobile apps with **React Native** and desktop apps with **Electron**.
  - **High Demand**: Popular language with a large demand for skilled developers.
- First JavaScript Code:
  ```javascript
  console.log("Hello World!"); // Output: Hello World!
  ```
- JavaScript in Action:
  - Form validation.
  - Interactive maps.
  - Dynamic content updates.
  - Web page animations.

## 3. Using JavaScript in HTML

JavaScript is added to HTML in three ways:

1.  **Inline JavaScript**:
    - JavaScript code directly in HTML elements via event attributes (`onclick`, `onload`, etc.).
    - Useful for small tasks but discouraged for larger projects.
    ```html
    <button onclick="document.getElementById('demo').innerHTML = Date()">
      The time is?
    </button>
    ```
2.  **Internal JavaScript**:
    - JavaScript code inside `<script>` tags within the HTML document.
    - Useful for small scripts specific to a single page.
    ```html
    <body>
      <h1>My First Web Page</h1>
      <p id="demo">This is a paragraph.</p>
      <button
        type="button"
        onclick="document.getElementById('demo').innerHTML = Date()"
      >
        Click me to display Date and Time.
      </button>
      <script>
        console.log("Hello World!");
      </script>
    </body>
    ```
3.  **External JavaScript**:
    - JavaScript code in a separate file linked to the HTML document using `<script>` tag with a `src` attribute.
    - Best method for larger projects to keep HTML and JavaScript code separate.
    ```html
    <body>
      <h1>My First Web Page</h1>
      <p id="demo">This is a paragraph.</p>
      <button
        type="button"
        onclick="document.getElementById('demo').innerHTML = Date()"
      >
        Click me to display Date and Time.
      </button>
      <script src="myScript.js"></script>
    </body>
    ```
    - `myScript.js` will contain the Javascript code.

- Best Practices:
  - Use **Inline JavaScript** sparingly.
  - Use **Internal JavaScript** for small, page-specific scripts.
  - Use **External JavaScript** for larger projects.
  - Place `<script>` tags at the end of the `<body>` section to ensure HTML content loads before JavaScript runs.

## 4. JavaScript Output

JavaScript outputs data in several ways:

1.  **Writing into an HTML Element (`innerHTML`)**:
    - Inserts or modifies content within an HTML element.
    ```html
    <p id="demo"></p>
    <script>
      document.getElementById("demo").innerHTML = 5 + 6;
    </script>
    ```
2.  **Writing into HTML Output (`document.write()`)**:
    - Writes content directly into the HTML document.
    - Use sparingly, as it can overwrite the entire document.
    ```html
    <script>
      document.write(5 + 6);
    </script>
    ```
3.  **Writing into an Alert Box (`window.alert()`)**:
    - Displays a pop-up alert box with a message.
    - Useful for debugging or notifications.
    ```html
    <script>
      window.alert(5 + 6);
    </script>
    ```
4.  **Writing into the Browser Console (`console.log()`)**:
    - Outputs data to the browser's console.
    - Used for debugging and testing.
    ```javascript
    console.log(5 + 6);
    ```

- Practical Use Cases:
  - `innerHTML` for dynamic content updates.
  - `document.write()` for quick testing (avoid in production).
  - `window.alert()` for small notifications or debugging.
  - `console.log()` for debugging.

## 5. JavaScript Comments

Comments explain JavaScript code, making it easier to understand.

1.  **Single-Line Comments (`//`)**:
    - Text between `//` and the end of the line is ignored.
    ```javascript
    let greeting = "Hello, World!"; // This variable stores a greeting message
    console.log(greeting); // Output: Hello, World!
    ```
2.  **Multi-Line Comments (`/* ... */`)**:
    - Text between `/*` and `*/` is ignored.
    - Useful for longer explanations or disabling code blocks.
    ```javascript
    /*
      The following code calculates the sum of two numbers
      and logs the result to the console.
    */
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    console.log(sum); // Output: 30
    ```

- Best Practices:
  - Explain the "why" behind the code, not the "what".
  - Keep comments concise and relevant.
  - Avoid over-commenting.
  - Update comments when you update the code.
  - Use single-line comments for short explanations and multi-line comments for longer blocks.
- Debugging:
  - Comments are used to temporarily disable code during debugging.
- Special Cases:
  - Comments can also be used in template literals to comment out HTML or CSS inside JavaScript.
  ```javascript
  let htmlContent = `
      <div>
        <h1>Hello, World!</h1>
        <!-- <p>This paragraph is commented out.</p> -->
      </div>
    `;
  let cssContent = `
      .container {
        width: 100%;
        /* height: 200px; */
      }
    `;
  ```

## 6. Variables in JavaScript

Variables store data used throughout a program.

- Declaration keywords: `var`, `let`, `const`.

1.  **`var` (Function-scoped)**:

    - Oldest way to declare variables.
    - Function-scoped; globally scoped if outside a function.
    - Allows redeclaration and reassignment.

    ```javascript
    var greeting = "Hello, World!";
    console.log(greeting); // Output: Hello, World!

    var greeting = "Hi there!";
    console.log(greeting); // Output: Hi there!

    greeting = "How are you?";
    console.log(greeting); // Output: How are you?
    ```

2.  **`let` (Block-scoped)**:

    - Introduced in ES6.
    - Block-scoped (accessible within a block: `{}`).
    - Allows reassignment but not redeclaration within the same scope.

    ```javascript
    let count = 10;
    console.log(count); // Output: 10

    count = 20;
    console.log(count); // Output: 20

    if (true) {
      let blockScoped = "I am inside a block";
      console.log(blockScoped); // Output: I am inside a block
    }
    ```

3.  **`const` (Block-scoped, Immutable)**:

    - Introduced in ES6.
    - Block-scoped and cannot be reassigned.
    - Must be initialized at declaration.

    ```javascript
    const PI = 3.14159;
    console.log(PI); // Output: 3.14159

    // const PI = 3.14; // Error
    ```

    - For objects and arrays, `const` only prevents reassignment of the variable, not the contents of the object/array.

    ```javascript
    const person = {
      name: "Alice",
      age: 25,
    };
    person.age = 26; // Allowed
    console.log(person); // Output: { name: 'Alice', age: 26 }
    ```

- Variable Naming Rules:

  - Letters, digits, underscores (`_`), and dollar signs (`$`).
  - Must begin with a letter, underscore, or dollar sign (not a digit).
  - Case-sensitive.
  - Reserved keywords cannot be used.

- Best Practices:
  - Use `const` by default. Use `let` for values that will change.
  - Avoid `var`.
  - Use descriptive names.
  - Follow a consistent naming convention (camelCase).

## 7. Data Types in JavaScript

JavaScript variables hold various data types, categorized as:

1.  **Primitive Data Types**: `String`, `Number`, `Boolean`, `Undefined`, `Null`, `BigInt`, `Symbol`.
2.  **Reference Data Types**: `Object`, `Array`, `Function`.

- **1. Primitive Data Types**:

  - **String**: Textual data.

  ```javascript
  var name = "John";
  console.log(name); // Output: John
  console.log(typeof name); // Output: string
  ```

  - **Number**: Numeric data (integers, floats).

  ```javascript
  var age = 25;
  console.log(age); // Output: 25
  console.log(typeof age); // Output: number
  ```

  - **Boolean**: Logical values (`true` or `false`).

  ```javascript
  var isStudent = true;
  console.log(isStudent); // Output: true
  console.log(typeof isStudent); // Output: boolean
  ```

  - **Undefined**: Variable declared but not assigned a value.

  ```javascript
  var address;
  console.log(address); // Output: undefined
  console.log(typeof address); // Output: undefined
  ```

  - **Null**: Intentional absence of any object value.

  ```javascript
  var car = null;
  console.log(car); // Output: null
  console.log(typeof car); // Output: object (quirk of JS)
  ```

  - **BigInt**: Integers larger than `2^53 - 1`.

  ```javascript
  var bigNumber = 9007199254740991n;
  console.log(bigNumber); // Output: 9007199254740991n
  console.log(typeof bigNumber); // Output: bigint
  ```

  - **Symbol**: Unique and immutable value.

  ```javascript
  var id = Symbol("id");
  console.log(id); // Output: Symbol(id)
  console.log(typeof id); // Output: symbol
  ```

- **2. Reference Data Types**:

  - **Object**: Key-value pairs.

  ```javascript
  var person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
  };
  console.log(person);
  console.log(typeof person); // Output: object
  ```

  - **Array**: Ordered list of values.

  ```javascript
  var colors = ["Red", "Green", "Blue"];
  console.log(colors);
  console.log(typeof colors); // Output: object (Arrays are a type of object)
  ```

  - **Function**: Block of code for a specific task.

  ```javascript
  function greet() {
    console.log("Hello, World!");
  }
  console.log(greet); // Output: [Function: greet]
  console.log(typeof greet); // Output: function
  ```

---

- **String Indexing**:

  - Access characters in a string using their index (0-based).
    ```javascript
    var greeting = "Hello";
    console.log(greeting[0]); // Output: H
    console.log(greeting.charAt(1)); // Output: e
    ```

- **String Methods**:

  - `length`: Returns the length of the string.

    ```javascript
    console.log(greeting.length); // Output: 5
    ```

  - `toUpperCase()`, `toLowerCase()`: Converts the string to upper or lower case.

    ```javascript
    console.log(greeting.toUpperCase()); // Output: HELLO
    console.log(greeting.toLowerCase()); // Output: hello
    ```

  - `indexOf()`, `lastIndexOf()`: Finds the index of a substring.

    ```javascript
    console.log(greeting.indexOf("l")); // Output: 2
    console.log(greeting.lastIndexOf("l")); // Output: 3
    ```

  - `slice()`, `substring()`, `substr()`: Extracts a part of the string.

    ```javascript
    console.log(greeting.slice(1, 4)); // Output: ell
    console.log(greeting.substring(1, 4)); // Output: ell
    console.log(greeting.substr(1, 3)); // Output: ell
    ```

  - `replace()`: Replaces a substring with another string.

    ```javascript
    console.log(greeting.replace("Hello", "Hi")); // Output: Hi
    ```

  - `split()`: Splits the string into an array of substrings.
    ```javascript
    console.log(greeting.split("")); // Output: ["H", "e", "l", "l", "o"]
    ```

- **Type Conversion**:

  - Convert values to strings using `String()`, `toString()`, or template literals.
    ```javascript
    var num = 10;
    console.log(String(num)); // Output: "10"
    console.log(num.toString()); // Output: "10"
    console.log(`${num}`); // Output: "10"
    ```

- **String Concatenation**:

  - Combine strings using the `+` operator or `concat()` method.
    ```javascript
    var firstName = "John";
    var lastName = "Doe";
    var fullName = firstName + " " + lastName; // Output: "John Doe"
    console.log(fullName);
    console.log(firstName.concat(" ", lastName)); // Output: "John Doe"
    ```

- **Template Strings**:

  - Use backticks (`` ` ``) for template literals, allowing for easier string interpolation.
    ```javascript
    var age = 25;
    var message = `Hello, my name is ${name} and I am ${age} years old.`;
    console.log(message); // Output: Hello, my name is John and I am 25 years old.
    ```

## 8. Operators and Expressions

Operators perform operations on values, while expressions evaluate to a single value.

- Types of Operators:
  1.  **Arithmetic Operators**:
      - `+` (Addition)
      - `-` (Subtraction)
      - `*` (Multiplication)
      - `/` (Division)
      - `%` (Modulus)
      - `**` (Exponentiation)
  ```javascript
  let sum = 10 + 5; // Addition: 15
  let difference = 10 - 5; // Subtraction: 5
  let product = 10 * 5; // Multiplication: 50
  let quotient = 10 / 5; // Division: 2
  let remainder = 10 % 3; // Modulus: 1
  let power = 2 ** 3; // Exponentiation: 8
  ```
  2.  **Assignment Operators**:
      - `=` (Assign)
      - `+=` (Add and assign)
      - `-=` (Subtract and assign)
      - `*=` (Multiply and assign)
      - `/=` (Divide and assign)
      - `%=` (Modulus and assign)
  ```javascript
  let x = 10;
  x += 5; // x = 15
  x -= 3; // x = 12
  x *= 2; // x = 24
  x /= 4; // x = 6
  x %= 5; // x = 1
  ```
  3.  **Comparison Operators**:
      - `==` (Equal to, value only)
      - `===` (Equal to, value and type)
      - `!=` (Not equal to, value only)
      - `!==` (Not equal to, value and type)
      - `>` (Greater than)
      - `<` (Less than)
      - `>=` (Greater than or equal to)
      - `<=` (Less than or equal to)
  ```javascript
  let a = 10;
  let b = "10";
  console.log(a == b); // true (value is the same)
  console.log(a === b); // false (value and type are different)
  console.log(a != b); // false
  console.log(a !== b); // true
  ```
  4.  **Logical Operators**:
      - `&&` (Logical AND)
      - `||` (Logical OR)
      - `!` (Logical NOT)
  ```javascript
  let isStudent = true;
  let isAdult = false;
  console.log(isStudent && isAdult); // false
  console.log(isStudent || isAdult); // true
  console.log(!isStudent); // false
  ```
  5.  **Bitwise Operators**:
      - `&` (Bitwise AND)
      - `|` (Bitwise OR)
      - `^` (Bitwise XOR)
      - `~` (Bitwise NOT)
      - `<<` (Left shift)
      - `>>` (Right shift)
      - `>>>` (Unsigned right shift)
  ```javascript
  let num1 = 5;
  let num2 = 3;
  console.log(num1 & num2); // 1
  console.log(num1 | num2); // 7
  console.log(num1 ^ num2); // 6
  ```
  6.  **String Operators**:
      - `+` (Concatenation)
  ```javascript
  let firstName = "John";
  let lastName = "Doe";
  let fullName = firstName + " " + lastName; // "John Doe"
  ```
  7.  **Conditional (Ternary) Operator**:
      - `condition ? expression1 : expression2`
  ```javascript
  let age = 18;
  let status = age >= 18 ? "Adult" : "Minor"; // "Adult"
  ```
  8.  **Unary Operators**:
      - `++` (Increment)
      - `--` (Decrement)
      - `typeof` (Type check)
      - `delete` (Delete property)
  ```javascript
  let count = 5;
  count++;
  count--;
  console.log(typeof count);
  ```
  9.  **Type Operators**:
      - `typeof`
      - `instanceof`
  ```javascript
  console.log(typeof "Hello"); // "string"
  console.log(typeof 10); // "number"
  console.log(typeof true); // "boolean"
  ```
- **Expressions**: Combinations of values, variables, operators, and function calls.
  ```javascript
  let result = 10 + 5 * 2;
  let isEligible = age >= 18 && isStudent;
  let message = "Hello, " + firstName;
  ```

## 9. Control Flow and Conditionals

Control flow is the order of statement execution; conditionals make decisions based on conditions.

1.  **`if` Statements**:
    - Executes code if the condition is true.
    ```javascript
    let age = 18;
    if (age >= 18) {
      console.log("You are an adult.");
    }
    ```
2.  **`else` Statements**:
    - Executes code if the `if` condition is false.
    ```javascript
    let temperature = 25;
    if (temperature > 30) {
      console.log("It's hot outside.");
    } else {
      console.log("It's not hot outside.");
    }
    ```
3.  **`else if` Statements**:
    - Tests multiple conditions.
    ```javascript
    let score = 85;
    if (score >= 90) {
      console.log("Grade: A");
    } else if (score >= 80) {
      console.log("Grade: B");
    } else if (score >= 70) {
      console.log("Grade: C");
    } else {
      console.log("Grade: F");
    }
    ```
4.  **`switch` Statements**:
    - Performs actions based on different conditions.
    ```javascript
    let day = "Monday";
    switch (day) {
      case "Monday":
        console.log("Today is Monday.");
        break;
      case "Tuesday":
        console.log("Today is Tuesday.");
        break;
      default:
        console.log("Today is not Monday or Tuesday.");
    }
    ```
5.  **Ternary Operator (Conditional Operator)**:
    - Shorthand for `if-else` statements.
    ```javascript
    let isRaining = true;
    let weatherMessage = isRaining
      ? "Bring an umbrella."
      : "Enjoy the weather.";
    console.log(weatherMessage);
    ```

- **Nested Conditionals**: Conditionals within other conditionals for complex logic.
  ```javascript
  let num = 10;
  if (num > 0) {
    if (num % 2 === 0) {
      console.log("The number is positive and even.");
    } else {
      console.log("The number is positive and odd.");
    }
  } else {
    console.log("The number is not positive.");
  }
  ```

## 10. Loops

Loops execute a block of code repeatedly.

1.  **`for` Loop**:
    - When the number of iterations is known.
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log("Iteration:", i);
    }
    ```
2.  **`while` Loop**:
    - As long as a condition is true.
    ```javascript
    let count = 0;
    while (count < 5) {
      console.log("Count:", count);
      count++;
    }
    ```
3.  **`do...while` Loop**:
    - Executes code at least once, then as long as the condition is true.
    ```javascript
    let num = 0;
    do {
      console.log("Number:", num);
      num++;
    } while (num < 0);
    ```
4.  **`for...in` Loop**:

    - Iterates over object properties.

    ```javascript
    const person = {
      name: "John",
      age: 30,
      occupation: "Developer",
    };

    for (let key in person) {
      console.log(key + ":", person[key]);
    }
    ```

5.  **`for...of` Loop**:
    - Iterates over iterable objects (arrays, strings).
    ```javascript
    const colors = ["Red", "Green", "Blue"];
    for (let color of colors) {
      console.log("Color:", color);
    }
    ```

- **Loop Control Statements**:
  - `break`: Exits the loop immediately.
  - `continue`: Skips the current iteration and moves to the next.
  ```javascript
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    if (i % 2 === 0) {
      continue;
    }
    console.log("Odd Number:", i);
  }
  ```

## 11. Functions

Functions are reusable code blocks.

1.  **Function Declaration**:

    - Named function with `function` keyword.

    ```javascript
    function greet(name) {
      return "Hello, " + name + "!";
    }

    console.log(greet("John"));
    ```

2.  **Function Expression**:

    - Function assigned to a variable.

    ```javascript
    const greetUser = function (name) {
      return "Hello, " + name + "!";
    };

    console.log(greetUser("Alice"));
    ```

3.  **Arrow Functions**:

    - Concise way to write functions (ES6).

    ```javascript
    const greetPerson = (name) => {
      return "Hello, " + name + "!";
    };
    console.log(greetPerson("Bob"));

    const add = (a, b) => a + b;
    console.log(add(2, 3)); // Output: 5
    ```

4.  **Parameters and Arguments**:

    - **Parameters**: Variables listed in the function definition.
    - **Arguments**: Actual values passed to the function.

    ```javascript
    function multiply(a, b) {
      return a * b;
    }
    console.log(multiply(4, 5));

    function sayHello(name = "Guest") {
      return "Hello, " + name + "!";
    }
    console.log(sayHello());
    console.log(sayHello("Emily"));
    ```

5.  **Return Statement**: Specifies the value to return from a function.
    ```javascript
    function checkAge(age) {
      if (age >= 18) {
        return "Adult";
      } else {
        return "Minor";
      }
    }
    console.log(checkAge(20));
    ```
6.  **Function Scope**:
    - Variables inside a function are local to that function.
    ```javascript
    function myFunction() {
      let message = "Hello, World!";
      console.log(message);
    }
    ```
7.  **Higher-Order Functions**:

    - Functions that accept functions as arguments or return functions.

    ```javascript
    function operate(a, b, operation) {
      return operation(a, b);
    }

    function add(x, y) {
      return x + y;
    }

    function multiply(x, y) {
      return x * y;
    }
    console.log(operate(2, 3, add));
    console.log(operate(2, 3, multiply));
    ```

8.  **Callback Functions**:
    - Functions passed as arguments to other functions and executed later.
    ```javascript
    function greetUser(name, callback) {
      console.log("Hello, " + name + "!");
      callback();
    }
    function sayGoodbye() {
      console.log("Goodbye!");
    }
    greetUser("John", sayGoodbye);
    ```
9.  **Immediately Invoked Function Expressions (IIFE)**:
    - Functions executed immediately after they are defined.
    ```javascript
    (function () {
      console.log("This is an IIFE!");
    })();
    ```

## 12. Arrays

Arrays are used to store collections of values.

1.  **Creating Arrays**:
    - Array literals or `Array` constructor.
    ```javascript
    let fruits = ["Apple", "Banana", "Orange"];
    let numbers = new Array(1, 2, 3, 4, 5);
    ```
2.  **Accessing Elements**:
    - Using their index (0-based).
    ```javascript
    console.log(fruits[0]);
    ```
3.  **Modifying Elements**:
    - Assign a new value to a specific index.
    ```javascript
    fruits[1] = "Mango";
    ```
4.  **Array Length**:
    - The `length` property.
    ```javascript
    console.log(fruits.length);
    ```
5.  **Adding/Removing Elements**:
    - `push()`: Adds to the end.
    - `pop()`: Removes from the end.
    - `unshift()`: Adds to the beginning.
    - `shift()`: Removes from the beginning.
    ```javascript
    fruits.push("Grapes");
    fruits.pop();
    fruits.unshift("Pineapple");
    fruits.shift();
    ```
6.  **Iterating Over Arrays**:
    - `for` loop
    - `forEach()`
    - `for...of` loop
    ```javascript
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
    fruits.forEach(function (fruit) {
      console.log(fruit);
    });
    for (let fruit of fruits) {
      console.log(fruit);
    }
    ```
7.  **Common Array Methods**:
    - `concat()`: Combines arrays.
    - `slice()`: Returns a portion.
    - `splice()`: Adds or removes elements at a specific index.
    - `indexOf()`: Returns the index of the first occurrence of a value.
    - `includes()`: Checks if an array contains a specific value.
    - `join()`: Joins elements into a string.
    - `reverse()`: Reverses the order of elements.
    - `sort()`: Sorts the elements.
    ```javascript
    let moreFruits = ["Grapes", "Pineapple"];
    let allFruits = fruits.concat(moreFruits);
    let citrus = fruits.slice(1, 3);
    fruits.splice(1, 1, "Strawberry");
    console.log(fruits.indexOf("Orange"));
    console.log(fruits.includes("Apple"));
    let fruitString = fruits.join(", ");
    fruits.reverse();
    fruits.sort();
    ```
8.  **Multidimensional Arrays**:
    - Arrays containing other arrays.
    ```javascript
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    console.log(matrix[1][2]);
    ```
9.  **Array Destructuring**:
    - Unpack values from arrays into distinct variables.
    ```javascript
    let [firstFruit, secondFruit] = fruits;
    ```

## 13. Objects

Objects store collections of key-value pairs.

1.  **Creating Objects**:
    - Object literals or `Object` constructor.
    ```javascript
    let person = {
      name: "John",
      age: 30,
      occupation: "Developer",
    };
    let car = new Object();
    car.make = "Toyota";
    car.model = "Camry";
    car.year = 2020;
    ```
2.  **Accessing Properties**:
    - Dot notation or bracket notation.
    ```javascript
    console.log(person.name);
    console.log(person["age"]);
    let key = "occupation";
    console.log(person[key]);
    ```
3.  **Modifying Properties**:
    - Assign a new value to the property.
    ```javascript
    person.age = 31;
    person.city = "New York";
    ```
4.  **Deleting Properties**:
    - Using the `delete` operator.
    ```javascript
    delete person.city;
    ```
5.  **Object Methods**:
    - Functions stored as object properties.
    ```javascript
    let person2 = {
      name: "Alice",
      age: 25,
      greet: function () {
        return "Hello, my name is " + this.name + "!";
      },
    };
    console.log(person2.greet());
    let person3 = {
      name: "Bob",
      age: 28,
      greet() {
        return "Hi, I'm " + this.name + "!";
      },
    };
    console.log(person3.greet());
    ```
6.  **The `this` Keyword**:
    - Refers to the current object.
    ```javascript
    let person4 = {
      name: "Emily",
      age: 22,
      introduce() {
        return (
          "My name is " + this.name + " and I'm " + this.age + " years old."
        );
      },
    };
    console.log(person4.introduce());
    ```
7.  **Nested Objects**:
    - Objects can contain other objects.
    ```javascript
    let student = {
      name: "Mike",
      age: 20,
      address: {
        city: "Los Angeles",
        state: "California",
      },
    };
    console.log(student.address.city);
    ```
8.  **Object Destructuring**:
    - Unpack properties from objects into distinct variables.
    ```javascript
    let { name, age } = person;
    let { name: fullName, age: years } = person;
    ```
9.  **Iterating Over Objects**:
    - `for...in` loop
    - `Object.keys()`: Returns keys as an array
    - `Object.values()`: Returns values as an array
    - `Object.entries()`: Returns key-value pairs as an array
    ```javascript
    for (let key in person) {
      console.log(key + ": " + person[key]);
    }
    let keys = Object.keys(person);
    let values = Object.values(person);
    let entries = Object.entries(person);
    ```
10. **Object Prototypes**:

    - Objects inherit properties and methods from their prototype.

    ```javascript
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    Person.prototype.greet = function () {
      return "Hello, my name is " + this.name + "!";
    };

    let person5 = new Person("Sarah", 29);
    console.log(person5.greet());
    ```

```

```

```

```
