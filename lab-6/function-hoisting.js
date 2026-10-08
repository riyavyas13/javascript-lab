// ==========================================
// Part 2 — Function Hoisting
// ==========================================


// ------------------------------------------
// Task 2.1
// ------------------------------------------

// This produces a TypeError because sayHi
// is a var function expression and is undefined
// when it is called.

// sayHi();

// var sayHi = function () {
//     console.log("Hi!");
// };


// ------------------------------------------
// Task 2.2
// ------------------------------------------

// This produces a ReferenceError because
// const is in the Temporal Dead Zone.

// sayHi();

// const sayHi = function () {
//     console.log("Hi!");
// };


// ------------------------------------------
// Task 2.3 — Sorting Table
// ------------------------------------------

// Function declaration works before its line.

console.log(a());

function a() {
    return "Function declaration works";
}


// var function expression does NOT work before
// its assignment.

// b();

// var b = function () {
//     console.log("Hello");
// };


// const arrow function does NOT work before
// initialization.

// c();

// const c = () => {
//     console.log("Hello");
// };


// let function expression does NOT work before
// initialization.

// d();

// let d = function () {
//     console.log("Hello");
// };


// ------------------------------------------
// Task 2.4 — Two Functions, Same Name
// ------------------------------------------

console.log(fnA());

function fnA() {
    return "First";
}

function fnA() {
    return "Second";
}


// ------------------------------------------
// Task 2.5 — Top-Down Story
// ------------------------------------------

wakeUp();

eatBreakfast();

goToCollege();


function wakeUp() {
    console.log("I wake up at 6 AM.");
}


function eatBreakfast() {
    console.log("I eat breakfast.");
}


function goToCollege() {
    console.log("I go to college.");
}