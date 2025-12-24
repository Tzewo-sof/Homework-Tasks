// --- SCRIPT 1 ---

// 1. prompt() opens a box where the user can type text
let userName = prompt("What is your name?");

// 2. confirm() opens a box with "OK" (true) and "Cancel" (false)
let likesJS = confirm("Do you like JavaScript?");

// 3. Alert the greeting (Optional, but nice for the user)
alert("Hello " + userName + "!");

// 4. Log the raw answers to the Console
// If they clicked OK, likesJS will be true. If Cancel, it will be false.
console.log("User Name:", userName);
console.log("Likes JS:", likesJS);

