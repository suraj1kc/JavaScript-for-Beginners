// ====================
// 6.11 Objects
// ====================

// Objects are a fundamental data structure in JavaScript used to store collections of key-value pairs.
// They are used to represent real-world entities, such as a person, car, or book, by grouping related data and functionality.
// Objects are unordered, and their properties (keys) can hold values of any data type, including other objects and functions.

// --------------------
// 1. Creating Objects
// --------------------
// Objects can be created using object literals or the `Object` constructor.

// Example: Using object literals
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};
console.log(person); // Output: { name: "John", age: 30, occupation: "Developer" }

// Example: Using the `Object` constructor
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
console.log(car); // Output: { make: "Toyota", model: "Camry", year: 2020 }

// --------------------
// 2. Accessing Object Properties
// --------------------
// Object properties can be accessed using dot notation or bracket notation.

// Example: Dot notation
console.log(person.name); // Output: John

// Example: Bracket notation
console.log(person["age"]); // Output: 30

// Bracket notation is useful when the property name is stored in a variable:
let key = "occupation";
console.log(person[key]); // Output: Developer

// --------------------
// 3. Modifying Object Properties
// --------------------
// Object properties can be modified by assigning a new value to them.

// Example:
person.age = 31;
console.log(person.age); // Output: 31

// Adding a new property:
person.city = "New York";
console.log(person); // Output: { name: "John", age: 31, occupation: "Developer", city: "New York" }

// --------------------
// 4. Deleting Object Properties
// --------------------
// The `delete` operator is used to remove a property from an object.

// Example:
delete person.city;
console.log(person); // Output: { name: "John", age: 31, occupation: "Developer" }

// --------------------
// 5. Object Methods
// --------------------
// Methods are functions that are stored as object properties.

// Example:
let person2 = {
  name: "Alice",
  age: 25,
  greet: function () {
    return "Hello, my name is " + this.name + "!";
  },
};
console.log(person2.greet()); // Output: Hello, my name is Alice!

// Shorthand method syntax (ES6):
let person3 = {
  name: "Bob",
  age: 28,
  greet() {
    return "Hi, I'm " + this.name + "!";
  },
};
console.log(person3.greet()); // Output: Hi, I'm Bob!

// --------------------
// 6. The `this` Keyword
// --------------------
// The `this` keyword refers to the current object within a method.
// It allows you to access the object's properties and methods.

// Example:
let person4 = {
  name: "Emily",
  age: 22,
  introduce() {
    return "My name is " + this.name + " and I'm " + this.age + " years old.";
  },
};
console.log(person4.introduce()); // Output: My name is Emily and I'm 22 years old.

// --------------------
// 7. Nested Objects
// --------------------
// Objects can contain other objects as properties, creating nested structures.

// Example:
let student = {
  name: "Mike",
  age: 20,
  address: {
    city: "Los Angeles",
    state: "California",
  },
};
console.log(student.address.city); // Output: Los Angeles

// --------------------
// 8. Object Destructuring
// --------------------
// Destructuring allows you to unpack properties from objects into distinct variables.

// Example:
let { name, age } = person;
console.log(name); // Output: John
console.log(age); // Output: 31

// Renaming variables during destructuring:
let { name: fullName, age: years } = person;
console.log(fullName); // Output: John
console.log(years); // Output: 31

// --------------------
// 9. Iterating Over Objects
// --------------------
// You can iterate over an object's properties using loops or object methods.

// a) Using `for...in` loop:
for (let key in person) {
  console.log(key + ": " + person[key]); // Output: name: John, age: 31, occupation: Developer
}

// b) Using `Object.keys()`:
let keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "occupation"]

// c) Using `Object.values()`:
let values = Object.values(person);
console.log(values); // Output: ["John", 31, "Developer"]

// d) Using `Object.entries()`:
let entries = Object.entries(person);
console.log(entries); // Output: [["name", "John"], ["age", 31], ["occupation", "Developer"]]

// --------------------
// 10. Object Prototypes
// --------------------
// Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from.
// You can add properties or methods to an object's prototype to make them available to all instances of that object.

// Example:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  return "Hello, my name is " + this.name + "!";
};

let person5 = new Person("Sarah", 29);
console.log(person5.greet()); // Output: Hello, my name is Sarah!

// --------------------
// Key Takeaways for Students
// --------------------
// - Objects are collections of key-value pairs used to represent real-world entities.
// - Use dot notation or bracket notation to access and modify object properties.
// - Methods are functions stored as object properties and can use the `this` keyword to access the object.
// - Objects can be nested, iterated over, and destructured for easier access to their properties.
// - Prototypes allow objects to inherit properties and methods.

// ====================
// Summary
// ====================
// Objects are a powerful and flexible data structure in JavaScript, used to group related data and functionality. By mastering objects, you can create complex and organized programs that model real-world scenarios. Practice creating, modifying, and iterating over objects to build a strong foundation in JavaScript.
