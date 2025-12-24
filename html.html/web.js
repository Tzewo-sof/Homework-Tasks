let button = document.getElementById("my-btn");
let displayArea = document.getElementById("output-text");
let inputBox = document.getElementById("user-input");

button.addEventListener("click", function() {
    
    let userName = inputBox.value;

    // THE NEW LOGIC
    if (userName === "") {
        // If the box is empty...
        displayArea.innerText = "Please enter your name first!";
        displayArea.style.color = "red"; // Let's make it look like an error
    } else {
        // If the box has text...
        displayArea.innerText = "Hello " + userName;
        displayArea.style.color = "black"; // Reset the color
    }
    
});