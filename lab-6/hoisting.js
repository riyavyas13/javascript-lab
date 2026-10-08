// ==========================================
// Practical Lab Session 6
// Part 1 — Hoisting with var
// ==========================================


// ------------------------------------------
// Task 1.1
// ------------------------------------------

console.log(city);

var city = "Haridwar";

console.log(city);


// ------------------------------------------
// Task 1.2
// ------------------------------------------

function showMessage() {
    console.log(message);

    var message = "Hello";

    console.log(message);
}

showMessage();


// ------------------------------------------
// Task 1.3 — Shadow Trap
// ------------------------------------------

var name = "global";

function test() {
    console.log(name);

    var name = "local";
}

test();


// ------------------------------------------
// Task 1.4 — Magic Trick
// ------------------------------------------

console.log(food);

var food;

food = "Pizza";

console.log(food);