// ==========================================
// Part 3 — let, const and the Temporal Dead Zone
// ==========================================


// ------------------------------------------
// Task 3.1
// ------------------------------------------

// This gives a ReferenceError.

// console.log(PI);
// const PI = 3.14;


// ------------------------------------------
// Task 3.2 — typeof Surprise
// ------------------------------------------

console.log(typeof x);

var x = 5;


// The following produces a ReferenceError
// because y is in the Temporal Dead Zone.

// console.log(typeof y);
// let y = 5;


// ------------------------------------------
// Task 3.3 — Investigate
// ------------------------------------------

console.log("Three common problems when using a name too early:");

console.log("1. undefined - var used before assignment");

console.log("2. ReferenceError - let/const used before initialization");

console.log("3. TypeError - calling a var function expression before assignment");


// ------------------------------------------
// Task 3.4 — Error Detective
// ------------------------------------------


// (a) Prints undefined

console.log(a);

var a = 10;


// (b) ReferenceError

// console.log(b);

// let b = 10;


// (c) TypeError

// hello();

// var hello = function () {
//     console.log("Hello");
// };


// (d) Works perfectly because of hoisting

greet();

function greet() {
    console.log("Hi!");
}