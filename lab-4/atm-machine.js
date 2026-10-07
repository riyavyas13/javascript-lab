// Task 5 - Simple ATM Machine

let correctPIN = 1234;
let accountBalance = 5000;

// Entered PIN
let enteredPIN = 1234;

// ATM choice
// 1 = Check Balance
// 2 = Withdraw
// 3 = Deposit

let choice = 3;

if (enteredPIN === correctPIN) {

    console.log("PIN verified successfully.");
    console.log("Welcome to the ATM!");

    switch (choice) {

        case 1:
            console.log("Current Balance: Rs.", accountBalance);
            break;

        case 2:
            let withdrawAmount = 7000;

            if (withdrawAmount > accountBalance) {
                console.log("Insufficient funds");
            } else {
                accountBalance = accountBalance - withdrawAmount;
                console.log("Withdrawal successful.");
                console.log("New Balance: Rs.", accountBalance);
            }
            break;

        case 3:
            let depositAmount = 2000;

            accountBalance = accountBalance + depositAmount;

            console.log("Deposit successful.");
            console.log("New Balance: Rs.", accountBalance);
            break;

        default:
            console.log("Invalid choice");
    }

} else {
    console.log("Wrong PIN. Access Denied.");
}