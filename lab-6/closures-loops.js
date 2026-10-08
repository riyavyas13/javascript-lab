// ==========================================
// Part 6 — Closures in Loops
// ==========================================


// ------------------------------------------
// Task 6.1
// ------------------------------------------

// Using var

const withVar = [];


for (var i = 0; i < 3; i++) {

    withVar.push(() => i);
}


console.log(withVar.map(f => f()));


// Using let

const withLet = [];


for (let j = 0; j < 3; j++) {

    withLet.push(() => j);
}


console.log(withLet.map(f => f()));


// ------------------------------------------
// Task 6.2
// ------------------------------------------

// Using var

for (var k = 1; k <= 3; k++) {

    setTimeout(() => console.log("var:", k), 1000);
}


// Using let

for (let m = 1; m <= 3; m++) {

    setTimeout(() => console.log("let:", m), 1000);
}


// ------------------------------------------
// Task 6.3 — Fix the Bug
// ------------------------------------------

// Change var to let

for (let k = 1; k <= 3; k++) {

    setTimeout(() => console.log("fixed:", k), 1000);
}