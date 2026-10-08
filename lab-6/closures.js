// ==========================================
// Part 4 — Your First Closure
// ==========================================


// ------------------------------------------
// Task 4.1
// ------------------------------------------

function makeCounter() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}


const counterA = makeCounter();

const counterB = makeCounter();


console.log(
    counterA(),
    counterA(),
    counterA(),
    counterA(),
    counterA()
);


console.log(
    counterB(),
    counterB()
);


// ------------------------------------------
// Task 4.2
// ------------------------------------------

// count is private inside makeCounter().

// console.log(count);


// ------------------------------------------
// Task 4.3 — Multiplier Factory
// ------------------------------------------

function makeMultiplier(n) {

    return function (x) {

        return x * n;
    };
}


const double = makeMultiplier(2);

const triple = makeMultiplier(3);


console.log(double(5));

console.log(triple(5));


// ------------------------------------------
// Task 4.4
// ------------------------------------------

function makeGreeter(greeting) {

    return function (name) {

        return greeting + ", " + name + "!";
    };
}


console.log(
    makeGreeter("Namaste")("Aditi")
);


// ------------------------------------------
// Task 4.5 — Chai Counter
// ------------------------------------------

function makeCupCounter() {

    let cups = 0;

    return function () {

        cups++;

        return "Cup number " + cups + " of chai";
    };
}


const rahulCups = makeCupCounter();

const aditiCups = makeCupCounter();


console.log(rahulCups());

console.log(rahulCups());

console.log(rahulCups());

console.log(aditiCups());