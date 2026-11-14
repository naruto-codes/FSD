/*PROGRAM 5: CALCULATE EXECUTION TIME
Develop a Node.js program using console.time and
console.timeEnd to calculate the execution time of a
simple mathematical program.
*/

// Sum of first N numbers
console.time("Sum of 1 to 1,000,000");
let sum = 0;
for (let i = 1; i <= 1000000; i++) {
  sum += i;
}
console.log("Sum =", sum);
console.timeEnd("Sum of 1 to 1,000,000");

// Factorial of a number
console.time("Factorial of 20");
let fact = 1n; // BigInt so large factorials stay exact
for (let i = 1n; i <= 20n; i++) {
  fact *= i;
}
console.log("Factorial of 20 =", fact.toString());
console.timeEnd("Factorial of 20");

// Squares of numbers 1 to 5
console.time("Squares of 1 to 5");
for (let i = 1; i <= 5; i++) {
  console.log(i + " x " + i + " = " + i * i);
}
console.timeEnd("Squares of 1 to 5");