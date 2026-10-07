// Task 2.2 - ATM PIN Checker

let correctPIN = 1234;

// Test 1 - Correct PIN
let guess1 = 1234;

if (guess1 === correctPIN) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


// Test 2 - Wrong PIN
let guess2 = 9999;

if (guess2 === correctPIN) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}