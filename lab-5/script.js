// PART 1 — FUNCTION DECLARATION BASICS
// Task 1.1 — isAdult(age)

function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log("PART 1 — TASK 1.1");
console.log(isAdult(10));
console.log(isAdult(18));
console.log(isAdult(25));


// Task 1.2 — Member Discount

function calculateDiscount(price, isMember) {
    if (isMember) {
        return price * 0.9;
    } else {
        return price;
    }
}

console.log("\nPART 1 — TASK 1.2");
console.log(calculateDiscount(1000, true));   // member
console.log(calculateDiscount(1000, false));  // non-member

// PART 2 — FUNCTION EXPRESSIONS & ARROW FUNCTIONS


// Task 2.1 — isAdult as a function expression

const isAdultExp = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

console.log("\nPART 2 — TASK 2.1");
console.log(isAdultExp(15));
console.log(isAdultExp(30));


// Task 2.2 — Quick Square

const square = n => n * n;

console.log("\nPART 2 — TASK 2.2");
console.log(square(4));
console.log(square(7));
console.log(square(10));


// Task 2.3 — fullName(first, last)

const fullName = (first, last) => first + " " + last;

console.log("\nPART 2 — TASK 2.3");
console.log(fullName("Priti", "Verma"));

// PART 3 — DEFAULT PARAMETERS & ARGUMENT MISMATCH


// Task 3.1 — calculatePrice(price, tax = 0.18)

function calculatePrice(price, tax = 0.18) {
    return price + (price * tax);
}

console.log("\nPART 3 — TASK 3.1");
console.log(calculatePrice(1000, 0.05)); // custom tax
console.log(calculatePrice(1000));       // default tax


// Task 3.2 — Investigate calculateArea(5)

function calculateArea(length, width) {
    return length * width;
}

console.log("\nPART 3 — TASK 3.2");
console.log(calculateArea(5));

// PART 4 — GLOBAL VS LOCAL SCOPE


// Task 4.1 — finalPrice(amount)

let taxRate = 0.18;

function finalPrice(amount) {
    return amount + (amount * taxRate);
}

console.log("\nPART 4 — TASK 4.1");
console.log(finalPrice(500));


// Task 4.2 — Same name for local and global

let city = "Delhi";

function showCity() {
    let city = "Mumbai";
    console.log("Inside function: " + city);
}

console.log("\nPART 4 — TASK 4.2");
showCity();
console.log("Outside function: " + city);

// PART 5 — BLOCK SCOPE: let VS var


// Task 5.1 — let inside an if block

if (true) {
    let message = "Hello from inside the block";
    console.log("\nPART 5 — TASK 5.1");
    console.log(message);
}

console.log(typeof message);


// Task 5.2 — var instead of let

if (true) {
    var message2 = "Hello from inside the block";
    console.log("\nPART 5 — TASK 5.2");
    console.log(message2);
}

console.log(message2);

// PART 6 — SCOPE CHAIN & SHADOWING


// Task 6.1 — Nested function

function outerFunction() {
    let outerName = "Outer variable";

    function innerFunction() {
        console.log("Inner can read: " + outerName);
    }

    innerFunction();
}

console.log("\nPART 6 — TASK 6.1");
outerFunction();


// Task 6.2 — Secret Admin Mode

let role = "guest";

function loginAsAdmin() {
    let role = "admin";
    console.log("Inside function, role = " + role);
}

console.log("\nPART 6 — TASK 6.2");
loginAsAdmin();
console.log("After function, role = " + role);

// PART 7 — MINI PROJECT
// STUDENT GRADE & FEE MANAGER


// Global variable

let totalFeeCollected = 0;


// Task 7.1 — Calculate Grade

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else {
        return "F";
    }
}


// Task 7.2 — Calculate Late Fee

const calculateLateFee = function (daysLate = 0) {
    return daysLate * 10;
};


// Task 7.3 — Process One Student

const processStudent = (name, marks, daysLate = 0) => {
    let grade = calculateGrade(marks);
    let fee = calculateLateFee(daysLate);

    totalFeeCollected = totalFeeCollected + fee;

    console.log(
        name + " -> Grade " + grade + ", Late Fee Rs." + fee
    );
};


// Task 7.4 to 7.6 — Process Students

console.log("\nPART 7 — MINI PROJECT");

processStudent("Aditi", 92, 0);
processStudent("Rohit", 68, 3);
processStudent("Meera", 55, 5);
processStudent("Karan", 80);


// Final total

console.log("Total Fee Collected: Rs." + totalFeeCollected);

// PART 8 — DEBUGGING CHALLENGE



// Task 8.1 — Snippet 1
// Bug: Missing return statement

function addNumbers(a, b) {
    return a + b;
}

console.log("\nPART 8 — SNIPPET 1");
console.log(addNumbers(5, 3));


// Snippet 2 — Corrected

function setDiscount() {
    let discount = 20;
    return discount;
}

let discount = setDiscount();

console.log("\nPART 8 — SNIPPET 2");
console.log(discount);


// Snippet 3 — Corrected

let balance = 1000;

function withdraw(amount) {
    balance = balance - amount;
    return balance;
}

withdraw(200);

console.log("\nPART 8 — SNIPPET 3");
console.log(balance);


// Snippet 4 — Corrected

const sayHello = function () {
    console.log("Hi!");
};

console.log("\nPART 8 — SNIPPET 4");
sayHello();