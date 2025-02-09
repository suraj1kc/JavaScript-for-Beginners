// ====================
// 7.3 DOM Manipulation
// ====================

// The Document Object Model (DOM) is a programming interface for HTML and XML documents.
// It represents the document as a tree-like structure of objects.
// JavaScript can use the DOM to interact with HTML elements, modify their content, style, and behavior.

// --------------------
// 1. Understanding the DOM
// --------------------
// The DOM is an object-based representation of the HTML structure.
// Each HTML tag, attribute, and text node is represented as a node in the DOM tree.
// The document object serves as the entry point to access the DOM.

// Example: HTML Structure
// <html>
// <head>
// <title>My Page</title>
// </head>
// <body>
// <h1 id="title">Welcome</h1>
// <p class="content">This is some content.</p>
// <button onclick="handleClick()">Click me</button>
// </body>
// </html>

// --------------------
// 2. Selecting Elements
// --------------------
// JavaScript provides methods to select HTML elements:
// - getElementById(): Selects elements by ID.
// - getElementsByClassName(): Selects elements by class name (returns an HTML collection).
// - getElementsByTagName(): Selects elements by tag name (returns an HTML collection).
// - querySelector(): Selects the first element that matches the CSS selector.
// - querySelectorAll(): Selects all elements that match the CSS selector (returns a NodeList).

// Example:
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

// --------------------
// 3. Modifying Elements
// --------------------
// Once selected, you can modify element properties:
// - innerHTML: Sets the inner HTML content of an element.
// - textContent: Sets the text content of an element.
// - setAttribute(): Sets the value of an attribute.
// - style: Sets the inline style of an element.
// - classList: Adds, removes, or toggles CSS classes.

// Example:
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

// --------------------
// 4. Creating and Inserting Elements
// --------------------
// JavaScript provides methods to create new elements:
// - document.createElement(): Creates a new HTML element.
// - document.createTextNode(): Creates a new text node.
// - appendChild(): Adds a node as a child to another node.
// - insertBefore(): Inserts a node before a specific child node.
// - removeChild(): Removes a child node from another node.

// Example:
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

// --------------------
// 5. Handling Events
// --------------------
// JavaScript can respond to events triggered by user interactions (e.g., mouse clicks, keyboard input, page loading):
// - addEventListener(): Attach an event listener to an element.
// - Event handlers (e.g., onclick, onload, onmouseover, onkeyup).

// Example:
// Using addEventListener
let button = document.querySelector("button");

function handleClick() {
  alert("Button clicked");
}
button.addEventListener("click", handleClick);

// Example: Using event handlers
// <button onclick="handleClick()">Click me</button> // Handle in HTML

// --------------------
// Key Takeaways for Students
// --------------------
// - The DOM is a tree-like structure of objects that represents an HTML document.
// - Use methods like getElementById(), querySelector(), etc., to select elements.
// - Modify element properties using innerHTML, textContent, setAttribute(), style, and classList.
// - Create new elements using document.createElement() and insert them into the DOM using appendChild().
// - Use addEventListener() to handle events and make web pages interactive.

// ====================
// Summary
// ====================
// DOM manipulation is a fundamental skill for creating dynamic and interactive web pages. By using JavaScript to interact with the DOM, you can build complex user interfaces and applications. Practice selecting, modifying, creating, and inserting elements, as well as handling various events to build your expertise in DOM manipulation.
