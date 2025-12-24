// --- SCRIPT 3 (SWITCH) ---

let dayNumber = Number(prompt("Enter a day number (1-7):"));

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break; // Stops checking other cases
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        // This runs if they type 8, 0, or "hello"
        console.log("Invalid day number!");
}