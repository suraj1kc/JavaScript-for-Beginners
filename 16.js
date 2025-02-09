// ====================
// 7.4 Asynchronous JavaScript
// ====================

// Asynchronous JavaScript allows you to perform operations without blocking the main thread, ensuring smooth and responsive user interfaces.
// This is especially important for tasks that take time, such as fetching data from servers or handling timers.

// --------------------
// 1. Synchronous vs Asynchronous Code
// --------------------
// - Synchronous code executes line by line, one after the other. Each line waits for the previous one to complete.
// - Asynchronous code allows operations to run in the background without blocking other operations. When an asynchronous operation is completed, a callback, a promise, or async function is used to handle the result.

// Example: Synchronous code
console.log("First");
console.log("Second");
console.log("Third"); // Output: First, Second, Third

// Example: Asynchronous code (using setTimeout)
console.log("First");
setTimeout(function () {
  console.log("Second");
}, 1000); // Waits 1 second
console.log("Third"); // Output: First, Third, Second (out of order)

// --------------------
// 2. Callbacks
// --------------------
// A callback is a function passed as an argument to another function and executed when the operation is complete.
// Callbacks can lead to "callback hell," which is complex to maintain when nested.

// Example:
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

// --------------------
// 3. Promises
// --------------------
// Promises are objects representing the eventual completion (or failure) of an asynchronous operation and help to make asynchronous code more readable and maintainable.
// A promise has three states: pending, fulfilled (resolved), or rejected.

// Example:
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

// --------------------
// 4. async/await
// --------------------
// The async/await syntax simplifies working with promises, making asynchronous code look more synchronous.
// An async function always returns a promise, and await pauses the execution until the promise resolves.

// Example:
async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log("Async data:", data.message);
  } catch (error) {
    console.error("Async error:", error);
  }
}
fetchDataAsync(); // Output: Async data: Data fetched with promise (after 1 second)

// --------------------
// 5. Event Loop
// --------------------
// JavaScript runs on a single thread, and it uses an event loop to handle asynchronous operations. The event loop constantly checks the call stack and the callback queue and moves tasks to the call stack when the stack is available.
// When setTimeout or fetch or promise resolves, they will add to callback/promise queue, event loop will check queue and push to callstack if stack is empty
// Call stack - Stack for executing operations (LIFO)
// Callback Queue - Queue where async functions are queued and executed later (FIFO)

// --------------------
// Key Takeaways for Students
// --------------------
// - Asynchronous code executes non-blocking, ensuring smooth UI responsiveness.
// - Use callbacks to handle the result of asynchronous operations.
// - Promises help in managing async operations, and avoid "callback hell".
// - async/await makes asynchronous code more readable and manageable.
// - The event loop handles asynchronous operations and call stack.

// ====================
// Summary
// ====================
// Asynchronous JavaScript is crucial for developing responsive web applications. By using callbacks, promises, async/await, and understanding the event loop, you can handle complex asynchronous operations effectively. Practice using these asynchronous techniques to build proficiency in modern JavaScript development.
