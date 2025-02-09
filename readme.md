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
14. [Unit 6 Questions for Exam Preparation](#unit-6-questions-for-exam-preparation)
15. [Scope and Closures](#1-scope-and-closures)
16. [Error Handling and Debugging](#2-error-handling-and-debugging)
17. [DOM Manipulation](#3-dom-manipulation)
18. [Asynchronous JavaScript](#4-asynchronous-javascript)
19. [JSON and AJAX](#5-json-and-ajax)
20. [ES6 and Modern JavaScript](#6-es6-and-modern-javascript)
21. [JavaScript Libraries](#7-javascript-libraries)
22. [Unit 7 Questions for Exam Preparation](#unit-7-questions-for-exam-preparation)

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

---

# Unit 6 Questions for Exam Preparation

---

> **Note**  
> **Refer to all old and model questions and solve them.**  
> This is crucial for exam preparation as these questions are directly aligned with the syllabus and have been tested in previous exams. Make sure to practice them thoroughly!

---

## **Introduction to JavaScript**

1. How does JavaScript add interactivity to web pages?
2. Explain why learning JavaScript is beneficial for front-end development.
3. Provide an example of a simple JavaScript code that outputs "Hello World!" to the console.
4. What makes JavaScript a high-level language?
5. List three main use cases of JavaScript.
6. Why is JavaScript considered "lightweight"?
7. What does it mean that JavaScript is "case-sensitive"?
8. How does `console.log()` help in development?

---

## **Using JavaScript in HTML**

1. Describe three ways to add JavaScript to an HTML document.
2. Why is it recommended to place `<script>` tags at the end of the `<body>` section?
3. Why is external JavaScript preferred for larger projects?
4. What is the difference between inline and internal JavaScript?
5. How do you link an external JavaScript file in HTML?
6. What happens if you place `<script>` tags in the `<head>` section of an HTML document?

---

## **JavaScript Output**

1. List and describe four ways to output data in JavaScript.
2. Why should `document.write()` avoid while writing JavaScript code?
3. When should you use `innerHTML` versus `document.write()`?
4. What is the main purpose of `console.log()`?
5. How do you display a pop-up message using JavaScript?
6. What is the difference between `alert()` and `console.log()`?
7. What is a prompt box? - (Fall 2023, Q6)

---

## **JavaScript Comments**

1. What is the difference between single-line and multi-line comments in JavaScript?
2. Provide an example of how comments can be used to temporarily disable code during debugging.
3. What is the best practice for using comments in JavaScript?
4. How do you write a comment in a template literal?

---

## **Variables in JavaScript**

1. Compare and contrast `var`, `let`, and `const` in JavaScript.
2. Provide an example of a variable declared using `const` and explain what happens if you try to reassign it.
3. Why is `const` preferred for values that won't change?
4. Explain block scope versus function scope.
5. What are the rules for naming variables in JavaScript?
6. What is variable hoisting, and how does it affect `var` declarations?

---

## **Data Types in JavaScript**

1. List and describe the all primitive and reference data types in JavaScript.
2. How do you check the type of a variable in JavaScript?
3. Provide an example of an object and an array in JavaScript.
4. What is the difference between `null` and `undefined`?
5. What is type coercion in JavaScript?
6. Explain the difference between reference and primitive data types.
7. What is the difference between undefined value and null value? (Model Question, Q7)

---

## **Operators and Expressions**

1. What are arithmetic operators? Provide examples.
2. Explain the difference between `==` and `===` operators.
3. What is the purpose of the ternary operator? Provide an example.
4. List three types of logical operators.
5. What is operator precedence?
6. How do you use the spread operator?
7. Explain types of operator in JS? Explain in detail. (Spring 2024, Q12)
8. Explain types of JavaScript operators in detail. Use examples to demonstrate. (Model Question, Q15)

---

## **Control Flow and Conditionals**

1. Describe how an `if` statement works in JavaScript.
2. Provide an example of a `switch` statement that handles different days of the week.
3. When would you use a `switch` statement instead of `if-else`?
4. What is the difference between `break` and `continue`?
5. How can you chain multiple conditions using `else if`?
6. What is the advantage of using a ternary operator?
7. How do you handle multiple conditions with logical operators?
8. Write a JavaScript function to calculate the grade of a student based on the mark. (Fall 2023, Q14; Model Question, Q17)
9. Explain how error handling is done using try-catch blocks in JavaScript. (Spring 2024, Q14b)

---

## **Loops**

1. Compare and contrast `for`, `while`, and `do...while` loops.
2. What is the purpose of the `break` and `continue` statements in loops?
3. What is the difference between `while` and `do...while` loops?
4. When would you use `for...in` versus `for...of`?
5. How do you break out of a nested loop?
6. What is an infinite loop, and how do you avoid it?
7. How do you iterate over an array using different types of loops?
8. Write an example of a `for...in` loop to iterate over object properties.
9. Develop a JavaScript function that iterates through an array of numbers, separates prime numbers and composite numbers into different arrays and returns them as an object. (Fall 2023, Q17b)

---

## **Functions**

1. What is the difference between a function declaration and a function expression?
2. Provide an example of an arrow function and explain its syntax.
3. How do higher-order functions work? Provide an example.
4. What is the difference between function declarations and expressions?
5. How do arrow functions differ from regular functions?
6. Explain function hoisting.
7. What are higher-order functions?
8. How do callback functions work?
9. Define callback function. (Fall 2023, Q7; Spring 2024, Q8)
10. What are arrow functions? (Fall 2023, Q17a)

---

## **Arrays**

1. How do you create an array in JavaScript? Provide two methods.
2. List three methods to add or remove elements from an array and provide examples.
3. What is array destructuring? Provide an example.
4. How do you sort an array of numbers?
5. What is the difference between `slice()` and `splice()`?
6. Explain any two uses of arrays in JavaScript. (Model Question, Q8)
7. Develop a JavaScript function that iterates through an array of numbers... (Fall 2023, Q17b)

---

## **Objects**

1. How do you create an object in JavaScript? Provide two methods.
2. Explain how to access and modify object properties.
3. What is the `this` keyword, and how is it used in object methods? Provide an example.
4. How do you loop through object properties?
5. What is object destructuring?
6. How do prototypes work in JavaScript?
7. What is JSON? When is it used? (Spring 2024, Q10)
8. Develop a JavaScript function that returns an object with prime and composite numbers. (Fall 2023, Q17b)

---

It looks like you're asking for the complete content of Unit 7, which includes advanced JavaScript concepts such as scope and closures, error handling and debugging, DOM manipulation, asynchronous JavaScript, JSON and AJAX, ES6 and modern JavaScript, and JavaScript libraries. Below is the comprehensive content for Unit 7:

# Unit 7: Advanced JavaScript Concepts

## 1. Scope and Closures

### Scope

Scope determines the accessibility of variables, functions, and objects in different parts of your code. It controls where a variable can be accessed or modified.

#### Global Scope

Variables declared outside any function have a global scope. They can be accessed and modified from anywhere in your code.

```javascript
let globalVariable = "I am global!"; // Declared in the global scope
function checkGlobal() {
  console.log(globalVariable); // Accessing a global variable inside a function
}
checkGlobal(); // Output: I am global!
console.log(globalVariable); // Accessing a global variable outside a function
```

#### Local (Function) Scope

Variables declared inside a function have a local scope. They can only be accessed and modified within that function.

```javascript
function myFunction() {
  let localVariable = "I am local!"; // Declared in the function scope
  console.log(localVariable); // Accessing a local variable
}
myFunction(); // Output: I am local!
// console.log(localVariable); // Error: localVariable is not defined (outside of myFunction)
```

#### Block Scope

Variables declared with `let` and `const` have block scope, meaning they are only accessible within the block (e.g., inside `if` statements, `for` loops, or `{}`).

```javascript
if (true) {
  let blockScoped = "I am block-scoped!";
  console.log(blockScoped); // Output: I am block-scoped!
}
// console.log(blockScoped); // Error: blockScoped is not defined
```

### Closures

A closure is created when an inner function attempts to access the scope of its outer function even after the outer function has completed its execution. The inner function "remembers" the environment in which it was created.

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(outerVariable); // Accessing outer variable
    console.log(innerVariable); // Accessing inner variable
  };
}
let myClosure = outerFunction("Hello from outer");
myClosure("Hello from inner"); // Output: Hello from outer
// Hello from inner
```

### Uses of Closures

Closures are commonly used in:

- **Data Encapsulation**: To hide data and provide a controlled interface.
- **Creating Private Variables**.
- **Implementing Callbacks and Event Handlers**.
- **Creating Function Factories**: Functions that return other functions.

```javascript
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}
let counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
console.log(counter.getCount()); // Output: 2
// console.log(count); // Error: count is not defined because it's inside createCounter.
```

### Key Takeaways for Students

- Scope determines where variables can be accessed.
- Global scope variables are accessible everywhere.
- Local (function) scope variables are only accessible within the function.
- Block scope variables (with `let` and `const`) are only accessible within their block.
- Closures allow inner functions to remember and access their outer function's scope, even after the outer function has completed.
- Closures are crucial for data encapsulation, private variables, and many other advanced JavaScript patterns.

## 2. Error Handling and Debugging

Error handling is essential for building robust applications that handle unexpected situations gracefully. Debugging is the process of identifying and fixing errors in your code.

### Types of Errors

JavaScript has several types of errors:

- **Syntax Errors**: Occur when JavaScript syntax rules are violated.
- **Runtime Errors**: Occur during execution of code, such as trying to access an undefined variable or dividing by zero.
- **Logical Errors**: Occur when the code runs without crashing but doesn't produce the expected outcome due to logic errors.

```javascript
// Syntax Error
// let myVar // SyntaxError: Missing semicolon

// Runtime Error
let num = undefined;
console.log(num.toLowerCase()); // TypeError: Cannot read property 'toLowerCase' of undefined

// Logical Error
function add(a, b) {
  return a - b; // Logical error: should be a + b
}
let result = add(5, 3); // Result: 2 (should be 8)
```

### `try...catch` Statement

The `try...catch` statement allows you to handle errors by trying a block of code and catching any errors that occur.

```javascript
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
```

### Throwing Errors

You can also throw custom errors using the `throw` statement, which is useful for handling invalid data or unexpected conditions.

```javascript
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
```

### Debugging Techniques

Debugging is the process of finding and fixing errors in your code. Here are some techniques:

- **Using `console.log()`**: Logging variables and messages to the console for debugging.
- **Using Browser Debugger**: Step through code, set breakpoints, inspect variables, and monitor the program's state.
- **Using `debugger` Statement**: Insert `debugger;` in your code to pause execution at that point.

```javascript
function calculateSum(a, b) {
  let sum = a + b;
  debugger; // Pauses code execution to inspect variables
  return sum;
}
```

### Error Object

The Error object provides information about an error that occurred. Key properties include:

- `message`: Error message text.
- `name`: Error type (e.g., "TypeError", "ReferenceError").
- `stack`: Stack trace of where the error occurred.

### Key Takeaways for Students

- Error handling is vital for creating stable and user-friendly applications.
- Use `try...catch` blocks to catch and handle errors that might occur during code execution.
- Use the `throw` statement to raise custom errors based on specific conditions.
- Debugging is a key skill in software development; use debugging tools effectively.
- The `Error` object provides properties such as `message`, `name`, and `stack`.

## 3. DOM Manipulation

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the document as a tree-like structure of objects. JavaScript can use the DOM to interact with HTML elements, modify their content, style, and behavior.

### Understanding the DOM

The DOM is an object-based representation of the HTML structure. Each HTML tag, attribute, and text node is represented as a node in the DOM tree. The `document` object serves as the entry point to access the DOM.

```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1 id="title">Welcome</h1>
    <p class="content">This is some content.</p>
    <button onclick="handleClick()">Click me</button>
  </body>
</html>
```

### Selecting Elements

JavaScript provides methods to select HTML elements:

- `getElementById()`: Selects elements by ID.
- `getElementsByClassName()`: Selects elements by class name (returns an HTML collection).
- `getElementsByTagName()`: Selects elements by tag name (returns an HTML collection).
- `querySelector()`: Selects the first element that matches the CSS selector.
- `querySelectorAll()`: Selects all elements that match the CSS selector (returns a NodeList).

```javascript
// Selecting by ID
let titleElement = document.getElementById("title");
console.log(titleElement); // Output: <h1 id="title">Welcome</h1>

// Selecting by class name
let contentElements = document.getElementsByClassName("content");
console.log(contentElements); // Output: HTMLCollection(1) [p.content]

// Selecting by tag name
let pElements = document.getElementsByTagName("p");
console.log(pElements); // Output: HTMLCollection(1) [p.content]

// Selecting by CSS selector (single)
let element1 = document.querySelector(".content");
console.log(element1); // Output: <p class="content">This is some content.</p>

// Selecting by CSS selector (multiple)
let element2 = document.querySelectorAll("p");
console.log(element2); // Output: NodeList(1) [p.content]
```

### Modifying Elements

Once selected, you can modify element properties:

- `innerHTML`: Sets the inner HTML content of an element.
- `textContent`: Sets the text content of an element.
- `setAttribute()`: Sets the value of an attribute.
- `style`: Sets the inline style of an element.
- `classList`: Adds, removes, or toggles CSS classes.

```javascript
// Modifying innerHTML
titleElement.innerHTML = "New title";

// Modifying textContent
element1.textContent = "New content";

// Modifying attributes
titleElement.setAttribute("data-info", "my-title");

// Modifying style
element1.style.color = "blue";

// Modifying CSS classes
element1.classList.add("highlight"); // Add class
element1.classList.remove("content"); // Remove class
element1.classList.toggle("active"); // Toggle class
```

### Creating and Inserting Elements

JavaScript provides methods to create new elements:

- `document.createElement()`: Creates a new HTML element.
- `document.createTextNode()`: Creates a new text node.
- `appendChild()`: Adds a node as a child to another node.
- `insertBefore()`: Inserts a node before a specific child node.
- `removeChild()`: Removes a child node from another node.

```javascript
// Creating element
let newParagraph = document.createElement("p");

// Creating text node
let textNode = document.createTextNode("This is a new paragraph.");

// Appending the text node to paragraph element
newParagraph.appendChild(textNode);

// Appending the element to the body
document.body.appendChild(newParagraph);

// Inserting before another element
document.body.insertBefore(newParagraph, element1);

// Removing an element from document
document.body.removeChild(element1);
```

### Handling Events

JavaScript can respond to events triggered by user interactions (e.g., mouse clicks, keyboard input, page loading):

- `addEventListener()`: Attach an event listener to an element.
- Event handlers (e.g., `onclick`, `onload`, `onmouseover`, `onkeyup`).

```javascript
// Using addEventListener
let button = document.querySelector("button");

function handleClick() {
  alert("Button clicked");
}
button.addEventListener("click", handleClick);

// Using event handlers
// <button onclick="handleClick()">Click me</button> // Handle in HTML
```

### Key Takeaways for Students

- The DOM is a tree-like structure of objects that represents an HTML document.
- Use methods like `getElementById()`, `querySelector()`, etc., to select elements.
- Modify element properties using `innerHTML`, `textContent`, `setAttribute()`, `style`, and `classList`.
- Create new elements using `document.createElement()` and insert them into the DOM using `appendChild()`.
- Use `addEventListener()` to handle events and make web pages interactive.

## 4. Asynchronous JavaScript

Asynchronous JavaScript allows you to perform operations without blocking the main thread, ensuring smooth and responsive user interfaces. This is especially important for tasks that take time, such as fetching data from servers or handling timers.

### Synchronous vs Asynchronous Code

- **Synchronous code** executes line by line, one after the other. Each line waits for the previous one to complete.
- **Asynchronous code** allows operations to run in the background without blocking other operations. When an asynchronous operation is completed, a callback, a promise, or async function is used to handle the result.

```javascript
// Synchronous code
console.log("First");
console.log("Second");
console.log("Third"); // Output: First, Second, Third

// Asynchronous code (using setTimeout)
console.log("First");
setTimeout(function () {
  console.log("Second");
}, 1000); // Waits 1 second
console.log("Third"); // Output: First, Third, Second (out of order)
```

### Callbacks

A callback is a function passed as an argument to another function and executed when the operation is complete. Callbacks can lead to "callback hell," which is complex to maintain when nested.

```javascript
function fetchData(callback) {
  setTimeout(function () {
    const data = { message: "Data fetched" };
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log("Processing data:", data.message);
}
fetchData(processData); // Output: Processing data: Data fetched (after 1 second)
```

### Promises

Promises are objects representing the eventual completion (or failure) of an asynchronous operation and help to make asynchronous code more readable and maintainable. A promise has three states: pending, fulfilled (resolved), or rejected.

```javascript
function fetchDataPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = { message: "Data fetched with promise" };
      resolve(data);
    }, 1000);
  });
}

fetchDataPromise()
  .then(function (data) {
    console.log("Promise resolved:", data.message); // Output: Promise resolved: Data fetched with promise (after 1 second)
  })
  .catch(function (error) {
    console.error("Promise rejected:", error);
  });
```

### `async/await`

The `async/await` syntax simplifies working with promises, making asynchronous code look more synchronous. An `async` function always returns a promise, and `await` pauses the execution until the promise resolves.

```javascript
async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log("Async data:", data.message);
  } catch (error) {
    console.error("Async error:", error);
  }
}
fetchDataAsync(); // Output: Async data: Data fetched with promise (after 1 second)
```

### Event Loop

JavaScript runs on a single thread, and it uses an event loop to handle asynchronous operations. The event loop constantly checks the call stack and the callback queue and moves tasks to the call stack when the stack is available.

### Key Takeaways for Students

- Asynchronous code executes non-blocking, ensuring smooth UI responsiveness.
- Use callbacks to handle the result of asynchronous operations.
- Promises help in managing async operations, and avoid "callback hell".
- `async/await` makes asynchronous code more readable and manageable.
- The event loop handles asynchronous operations and call stack.

## 5. JSON and AJAX

JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. AJAX (Asynchronous JavaScript and XML) is a technique for making HTTP requests to a server from a web page without reloading the entire page. AJAX is used for transferring data like JSON.

### JSON

JSON is a format for structured data. It consists of key-value pairs similar to JavaScript objects but uses a specific string format. JSON data types include: strings, numbers, boolean values, null, objects, and arrays.

```json
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "address": {
    "city": "New York",
    "country": "USA"
  },
  "courses": ["math", "science"]
}
```

### `JSON.stringify()` and `JSON.parse()`

JSON provides methods to:

- `JSON.stringify()`: Convert a JavaScript object to a JSON string.
- `JSON.parse()`: Convert a JSON string to a JavaScript object.

```javascript
let person = {
  name: "John Doe",
  age: 30,
  occupation: "Developer",
};
let jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"John Doe","age":30,"occupation":"Developer"} (as a string)
let parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson); // Output: {name: 'John Doe', age: 30, occupation: 'Developer'} (as a Javascript Object)
```

### AJAX

AJAX uses XMLHttpRequest or fetch to make asynchronous HTTP requests to a server and then updates the UI based on the server response.

```javascript
// Using XMLHttpRequest (older)
function fetchData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  };
  xhr.onerror = function () {
    console.log("Error in request");
  };
  xhr.send();
}
fetchData("https://jsonplaceholder.typicode.com/todos/1");
```

### Using Fetch API (Modern)

The fetch API is a modern way to make HTTP requests. It is a promise-based API, making it easier to work with asynchronous operations.

```javascript
function fetchData(url) {
  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse response to json
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
}
fetchData("https://jsonplaceholder.typicode.com/todos/1");
```

### Using Fetch API with async/await

```javascript
async function fetchDataAsync(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
}
fetchDataAsync("https://jsonplaceholder.typicode.com/todos/1");
```

### Key Takeaways for Students

- JSON is a standard format for structured data exchange.
- `JSON.stringify()` converts a JavaScript object to a JSON string.
- `JSON.parse()` converts a JSON string to a JavaScript object.
- AJAX enables asynchronous communication between web pages and servers.
- Use `fetch` or `XMLHttpRequest` to make HTTP requests.
- Handle asynchronous HTTP requests using promises and `async/await`.

## 6. ES6 and Modern JavaScript

ES6 (ECMAScript 2015) and beyond introduce many new features and improvements to JavaScript. They enhance code readability, make it easier to write complex applications, and help to stay up-to-date with modern web development practices.

### `let` and `const`

`let` and `const` are block-scoped variable declarations, offering improvements over `var`. `let` allows reassignment; `const` doesn't.

```javascript
let count = 10;
count = 20; // Allowed
const PI = 3.14;
// PI = 3.1415; // Error: Assignment to constant variable
```

### Arrow Functions

Arrow functions provide a shorter syntax for writing function expressions. They also have a different way of handling the `this` keyword.

```javascript
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
```

### Template Literals

Template literals use backticks (`` ` ``) and allow string interpolation using `${expression}`.

```javascript
let name = "John";
let age = 30;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
```

### Destructuring

Destructuring allows you to unpack values from arrays and objects into distinct variables.

```javascript
// Array destructuring
let colors = ["red", "green", "blue"];
let [first, second] = colors;
console.log(first); // Output: red

// Object destructuring
let person = {
  name: "Alice",
  age: 25,
};
let { name: fullName, age: years } = person;
console.log(fullName); // Output: Alice
```

### Spread and Rest Operators

- **Spread operator (`...`)** allows arrays and objects to be expanded.
- **Rest operator (`...`)** collects parameters into an array.

```javascript
// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Expands arr1, and adds more values
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

### Classes

ES6 introduces class syntax for creating objects and managing inheritance.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, I am ${this.name}.`;
  }
}
let person1 = new Person("Bob", 28);
console.log(person1.greet()); // Output: Hello, I am Bob.
```

### Modules

Modules allow you to organize code into separate files and share variables, functions, and classes between files.

```javascript
// Named exports
// export const PI = 3.14159;
// export function add(a, b) {return a + b};

// Named imports
// import { PI, add } from "./myModule.js";

// Default exports
// export default function sayHello(name) {console.log(`Hello ${name}`)}
// Default imports
// import sayHello from "./myModule.js";
```

### Key Takeaways for Students

- ES6 and modern JavaScript include new features that improve your code.
- `let` and `const` provide better variable declarations.
- Arrow functions offer concise syntax for functions.
- Template literals allow for easy string interpolation.
- Destructuring helps unpack values from arrays and objects.
- Spread and rest operators enhance array and object manipulation.
- Classes provide a mechanism for object-oriented programming.
- Modules enable code organization and reusability.

## 7. JavaScript Libraries

JavaScript libraries provide pre-written code that can be used to perform common tasks, saving time and effort and enhancing code efficiency. Libraries improve development speed, and are used for frontend and backend projects.

### Introduction to Libraries

- Libraries consist of collections of reusable functions and objects.
- They provide solutions for common programming tasks.
- They can be used with `script` tag or with `import` statements.
- Popular categories include UI libraries, utility libraries, and data visualization libraries.

### UI Libraries (e.g., React, Angular, Vue.js)

- Used to build user interfaces.
- Provide reusable UI components, data binding, and state management.
- Examples include:
  - **React**: Library for building user interfaces using a component-based approach and virtual DOM.
  - **Angular**: Framework for building complex applications with dependency injection, templates, and routing.
  - **Vue.js**: Progressive framework for building single-page applications and user interfaces with templates and reactivity.

```javascript
// Example: React component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### Utility Libraries (e.g., Lodash, Underscore)

- Provide helper functions for common tasks.
- Include functions for array manipulation, object operations, string processing, etc.
- Examples include:
  - **Lodash**: Extensive utility library with hundreds of functions for data manipulation.
  - **Underscore**: Lightweight utility library for functional programming in JavaScript.

```javascript
// Example: Using Lodash
const _ = require("lodash");
console.log(
  _.map([1, 2, 3], function (num) {
    return num * 2;
  })
); // Output: [2, 4, 6]
console.log(_.uniq([4, 8, 4])); // Output: [ 4, 8 ]
```

### Data Visualization Libraries (e.g., Chart.js, D3.js)

- Used to create interactive charts and graphs.
- Provide APIs for creating various types of charts, such as bar charts, line charts, pie charts, etc.
- Examples include:
  - **Chart.js**: Simple library for creating charts using HTML5 canvas.
  - **D3.js**: Library for manipulating the DOM with data-driven approaches to create complex visualizations.

### How to Use Libraries

- **Include via CDN (content delivery network)**: Add a `<script>` tag that links to the library's hosted file in the HTML file.

```html
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
```

- **Download and use in project**: Download the library's file and include it in the project. Link the library file via script tag or import statement.

```javascript
import _ from "lodash";
```

- **Install via package manager**: Install the library using npm or yarn, then import it using `import` or `require`.

```bash
npm install lodash
```

```javascript
import _ from "lodash";
```

### Key Takeaways for Students

- JavaScript libraries help in development by providing reusable code.
- Use UI libraries (e.g., React, Angular, Vue.js) to build dynamic user interfaces.
- Use utility libraries (e.g., Lodash, Underscore) for common tasks.
- Use data visualization libraries (e.g., Chart.js, D3.js) to create charts and graphs.
- You can include libraries via CDN or local installations.
- Explore a few libraries and focus on understanding how to use them.

## Unit 7 Questions for Exam Preparation

---

> **Note** > **Refer to all old and model questions and solve them.**
> This is crucial for exam preparation as these questions are directly aligned with the syllabus and have been tested in previous exams. Make sure to practice them thoroughly!

---

## **Scope and Closures**

1. Explain the difference between global and local scope in JavaScript.
2. What is block scope, and how does it differ from **function scope?**
3. What is a closure in JavaScript? Provide an example.
4. How can closures be used to create private variables?
5. Explain how closures are used in callbacks?
6. What are some practical use cases for closures in web development?
7. Explain lexical scoping and how it relates to closures.
8. Differentiate between scope and context with examples. (Spring 2024, Q11)
9. What are IIFEs and how they are related to scopes?

---

## **Error Handling and Debugging**

1. List and explain three types of errors in JavaScript.
2. What is the purpose of the `try...catch` statement?
3. How do you throw custom errors using the `throw` statement?
4. What is the purpose of the `finally` block in a `try...catch...finally` statement?
5. Describe three debugging techniques for JavaScript code.
6. What is a stack trace? How can it be helpful?
7. Explain different error object properties.
8. How do you manage different errors using try-catch block?

---

## **DOM Manipulation**

1. What is the DOM?
2. How is the DOM tree-like structure?
3. List and describe four methods to select HTML elements in JavaScript.
4. What is the difference between `innerHTML` and `textContent`?
5. How do you set inline styles in JavaScript?
6. How to add and remove css classes using javascript.
7. How to create a new element in javascript.
8. How to add events using addEventListener.
9. What is an event handler? Explain different event handlers?
10. What is NodeList? Differentiate with HTMLCollection.

---

## **Asynchronous JavaScript**

1. Explain the difference between synchronous and asynchronous code.
2. What is a callback function?
3. Explain what a promise is and how it works.
4. What are the three states of a promise?
5. What is the purpose of the `async` and `await` keywords?
6. How do async functions relate to promises?
7. What is the event loop and how it works?
8. What is callback hell, and how can you avoid it?
9. Write an example of how to perform some asynchronous task using callback.
10. Write an example of how to perform some asynchronous task using Promises and async/await keywords?

---

## **JSON and AJAX**

1. What is JSON, and why is it used in web development?
2. Explain the difference between `JSON.stringify()` and `JSON.parse()`.
3. What is AJAX?
4. How does AJAX help in web development?
5. Compare `XMLHttpRequest` and `fetch` API for making HTTP requests.
6. How is JSON used with AJAX?
7. What are the possible states of request while working with AJAX?
8. How do you get the status code for a HTTP request?
9. How do you manage different states of request using javascript?
10. Write an example to make a fetch call and handle response.

---

## **ES6 and Modern JavaScript**

1. What are the advantages of using `let` and `const` over `var`?
2. How do arrow functions differ from regular functions?
3. What are template literals, and why are they useful?
4. Explain how destructuring works for arrays and objects.
5. What are spread and rest operators, and how can they be used?
6. How do classes work in JavaScript?
7. What are JavaScript modules?
8. Differentiate between named exports and default exports.
9. List the new feature of ES6 version of JavaScript. (Spring 2024, Q14a)
10. Briefly describe ES6. (Fall 2023, Q15)

---

## **JavaScript Libraries**

1. What is a JavaScript library?
2. Name three common categories of JavaScript libraries and provide an example of each.
3. Give three examples of popular UI libraries, and list one advantage of each.
4. Give two examples of utility libraries, and list one advantage of each.
5. Give two examples of data visualization libraries, and list one advantage of each.
6. Describe three ways to include a JavaScript library in your project.
7. Explain some differences between libraries and frameworks in JavaScript?
8. What is the use of a CDN in Javascript?
9. What is package manager? How it works?
10. How to make use of different libraries in Javascript?

---
