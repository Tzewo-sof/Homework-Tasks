// --- SCRIPT 2 ---

// 1. Ask for numbers and CONVERT them immediately using Number()
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

// 2. Calculate
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// 3. Log results
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// --- PART B: CONST vs LET ---

let myAge = 25;
myAge = 26; // This works! 'let' allows change.
console.log("New Age:", myAge);

const pi = 3.14;
// pi = 3.15;  <-- THIS WILL CRASH THE CODE (Error: Assignment to constant variable)
// Explanation: 'const' means Constant. It cannot be changed once defined.

// --- PART C: STRING + NUMBER ---
let weirdMath = "5" + 10;
console.log("String + Number result:", weirdMath); 
// RESULT: "510"
// Explanation: When you add a String and a Number, JS turns the Number into a String and glues them together.