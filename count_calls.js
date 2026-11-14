/*PROGRAM 4: COUNT THE FUNCTION CALLS
Develop a Node.js program using console.log to count how
many times a message is displayed.
 */

// Method 1: manual counter with console.log
let callCount = 0;

function greet() {
  callCount++;
  console.log("Hello, welcome to Node.js! (call number " + callCount + ")");
}

greet();
greet();
greet();
console.log("greet() was called " + callCount + " times.");

console.log("-----------------------------");

// Method 2: built-in console.count
function sayHi() {
  console.count("sayHi called");
}

sayHi();
sayHi();
sayHi();
sayHi();

console.countReset("sayHi called"); // resets the counter back to 0
sayHi();