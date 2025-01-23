// ====================
// 6.2 Using JavaScript in HTML
// ====================

// JavaScript can be added to an HTML document in three ways:
// 1. Inline JavaScript
// 2. Internal JavaScript
// 3. External JavaScript

// Each method has its own use case, and understanding when to use each is important for writing clean and maintainable code.

// --------------------
// 1. Inline JavaScript
// --------------------
// Inline JavaScript is JavaScript code that is written directly inside HTML elements using event attributes like `onclick`, `onload`, etc.
// This method is useful for small, quick tasks but is generally discouraged for larger projects because it mixes HTML and JavaScript, making the code harder to maintain.

// Example:
// In your HTML file, you can add the following code to create a button that displays the current date and time when clicked:
// <button onclick="document.getElementById('demo').innerHTML = Date()">
//   The time is?
// </button>

// Explanation:
// - The `onclick` attribute is used to trigger a JavaScript action when the button is clicked.
// - `document.getElementById('demo').innerHTML = Date()` updates the content of an HTML element with the ID "demo" to show the current date and time.

// --------------------
// 2. Internal JavaScript
// --------------------
// Internal JavaScript is JavaScript code that is written inside a `<script>` tag within the HTML document.
// This method is useful for small scripts that are specific to a single page.

// Example:
// In your HTML file, you can add the following code to include JavaScript directly in the `<script>` tag:
// <body>
//   <h1>My First Web Page</h1>
//   <p id="demo">This is a paragraph.</p>
//   <button type="button" onclick="document.getElementById('demo').innerHTML = Date()">
//     Click me to display Date and Time.
//   </button>
//   <script>
//     console.log("Hello World!");
//   </script>
// </body>

// Explanation:
// - The `<script>` tag is placed inside the `<body>` or `<head>` section of the HTML document.
// - The `console.log("Hello World!");` statement logs a message to the browser's console.
// - The `onclick` attribute in the button element updates the paragraph content with the current date and time.

// --------------------
// 3. External JavaScript
// --------------------
// External JavaScript is JavaScript code that is written in a separate file and linked to the HTML document using the `<script>` tag with a `src` attribute.
// This is the most recommended method for larger projects because it keeps the HTML and JavaScript code separate, making the code easier to maintain and reuse.

// Example:
// In your HTML file, you can add the following code to link an external JavaScript file:
// <body>
//   <h1>My First Web Page</h1>
//   <p id="demo">This is a paragraph.</p>
//   <button type="button" onclick="document.getElementById('demo').innerHTML = Date()">
//     Click me to display Date and Time.
//   </button>
//   <script src="myScript.js"></script>
// </body>

// Explanation:
// - The `<script>` tag includes a `src` attribute that points to the external JavaScript file (e.g., `myScript.js`).
// - The JavaScript code in `myScript.js` will be executed when the HTML document loads.
// - This method keeps the JavaScript code separate from the HTML, promoting better organization and reusability.

// --------------------
// Best Practices
// --------------------
// - Use **Inline JavaScript** sparingly, only for small, quick tasks.
// - Use **Internal JavaScript** for small scripts that are specific to a single page.
// - Use **External JavaScript** for larger projects to keep your code organized and maintainable.
// - Always place your `<script>` tags at the end of the `<body>` section (before the closing `</body>` tag) to ensure the HTML content loads before the JavaScript runs.

// --------------------
// Important Notes for Students
// --------------------
// - Experiment with all three methods in your HTML file to understand how they work.
// - Pay attention to the structure and placement of the `<script>` tag in each method.
// - Practice writing clean and organized code by separating HTML and JavaScript whenever possible.

// ====================
// Summary
// ====================
// JavaScript can be added to an HTML document in three ways:
// 1. **Inline JavaScript**: Written directly inside HTML elements using event attributes.
// 2. **Internal JavaScript**: Written inside a `<script>` tag within the HTML document.
// 3. **External JavaScript**: Written in a separate file and linked to the HTML document using the `<script>` tag with a `src` attribute.
// Each method has its own use case, and choosing the right one depends on the size and complexity of your project.
