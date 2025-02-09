// ====================
// 7.7 JavaScript Libraries
// ====================

// JavaScript libraries provide pre-written code that can be used to perform common tasks, saving time and effort and enhancing code efficiency.
// Libraries improve development speed, and are used for frontend and backend projects.

// --------------------
// 1. Introduction to Libraries
// --------------------
// - Libraries consist of collections of reusable functions and objects.
// - They provide solutions for common programming tasks.
// - They can be used with script tag or with import statements.
// - Popular categories include UI libraries, utility libraries, and data visualization libraries.

// --------------------
// 2. UI Libraries (e.g., React, Angular, Vue.js)
// --------------------
// - Used to build user interfaces.
// - Provide reusable UI components, data binding, and state management.
// - Examples include:
// - React: Library for building user interfaces using a component-based approach and virtual DOM.
// - Angular: Framework for building complex applications with dependency injection, templates, and routing.
// - Vue.js: Progressive framework for building single-page applications and user interfaces with templates and reactivity.

// Example: React component
// function Greeting(props) {
// return <h1>Hello, {props.name}!</h1>;
// }

// --------------------
// 3. Utility Libraries (e.g., Lodash, Underscore)
// --------------------
// - Provide helper functions for common tasks.
// - Include functions for array manipulation, object operations, string processing, etc.
// - Examples include:
// - Lodash: Extensive utility library with hundreds of functions for data manipulation.
// - Underscore: Lightweight utility library for functional programming in JavaScript.

// Example: Using Lodash
// .map([1, 2, 3], function(num) { return num * 2;}); // Output: [2, 4, 6]
// const _ = require("lodash");
// console.log(.map([4, 8], function(num){return num/2})); // Output: [2, 4]
// console.log(_.uniq([4, 8, 4])); // Output: [ 4, 8 ]

// --------------------
// 4. Data Visualization Libraries (e.g., Chart.js, D3.js)
// --------------------
// - Used to create interactive charts and graphs.
// - Provide APIs for creating various types of charts, such as bar charts, line charts, pie charts, etc.
// - Examples include:
// - Chart.js: Simple library for creating charts using HTML5 canvas.
// - D3.js: Library for manipulating the DOM with data-driven approaches to create complex visualizations.

// --------------------
// 5. How to Use Libraries
// --------------------
// - Include via CDN (content delivery network): Add a <script> tag that links to the library's hosted file in the HTML file.

// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

// - Download and use in project: Download the library's file and include it in the project. Link the library file via script tag or import statement.
// import _ from 'lodash';

// - Install via package manager: Install the library using npm or yarn, then import it using import or require.
// npm install lodash
// import _ from "lodash";

// --------------------
// Key Takeaways for Students
// --------------------
// - JavaScript libraries help in development by providing reusable code.
// - Use UI libraries (e.g., React, Angular, Vue.js) to build dynamic user interfaces.
// - Use utility libraries (e.g., Lodash, Underscore) for common tasks.
// - Use data visualization libraries (e.g., Chart.js, D3.js) to create charts and graphs.
// - You can include libraries via CDN or local installations.
// - Explore a few libraries and focus on understanding how to use them.

// ====================
// Summary
// ====================
// Libraries make web development easier and more efficient. By learning how to use JavaScript libraries, you can speed up the development process, create complex applications more quickly, and enhance the overall quality of your code. Explore a variety of libraries and focus on gaining expertise in using them for different types of tasks.
