// ====================
// 6.3 JavaScript Output
// ====================

// JavaScript can "display" or output data in several ways. Each method is useful in different scenarios,
// depending on where you want the output to appear (e.g., in the browser, in an HTML element, or in the console).

// --------------------
// 1. Writing into an HTML Element (Using innerHTML)
// --------------------
// The `innerHTML` property is used to insert or modify content inside an HTML element.
// This is useful when you want to dynamically update the content of a webpage without reloading it.
// Example: You can use `document.getElementById("demo").innerHTML = 5 + 6;` to display the result of `5 + 6`
// inside an HTML element with the ID "demo".

// --------------------
// 2. Writing into the HTML Output (Using document.write())
// --------------------
// The `document.write()` method writes content directly into the HTML document.
// This method is often used for testing or simple demonstrations, but it should be avoided in production code
// because it can overwrite the entire document if used after the page has finished loading.
// Example: `document.write(5 + 6);` will write the result of `5 + 6` directly into the HTML document.

// --------------------
// 3. Writing into an Alert Box (Using window.alert())
// --------------------
// The `window.alert()` method displays a pop-up alert box with a message.
// This is useful for debugging or notifying the user of important information.
// Example: `window.alert(5 + 6);` will display an alert box with the result of `5 + 6`.

// --------------------
// 4. Writing into the Browser Console (Using console.log())
// --------------------
// The `console.log()` method outputs data to the browser's console.
// This is primarily used for debugging and testing, as it allows developers to inspect values and track the flow of their code.
// Example: `console.log(5 + 6);` will print the result of `5 + 6` to the console.

// --------------------
// Practical Use Cases
// --------------------
// - Use `innerHTML` when you want to update the content of a specific HTML element dynamically.
// - Use `document.write()` sparingly, only for quick testing or demonstrations.
// - Use `window.alert()` to notify users or debug small pieces of code.
// - Use `console.log()` extensively for debugging and tracking the behavior of your code.

// --------------------
// Important Notes for Students
// --------------------
// - Always test your code in the browser to see how each output method works.
// - Avoid using `document.write()` in real-world applications, as it can cause issues with page rendering.
// - Use `console.log()` frequently while coding to understand how your program is executing.
// - Experiment with these methods in your HTML file to see the output in different contexts.

// ====================
// Summary
// ====================
// JavaScript provides multiple ways to display data:
// 1. `innerHTML` for updating HTML elements.
// 2. `document.write()` for writing directly into the HTML document.
// 3. `window.alert()` for displaying pop-up messages.
// 4. `console.log()` for debugging and logging to the browser console.
// Each method has its own use case, so choose the one that best fits your needs.
