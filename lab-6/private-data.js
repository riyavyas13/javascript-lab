// ==========================================
// Part 5 — Private Data with Closures
// ==========================================


// ------------------------------------------
// Task 5.1
// ------------------------------------------

function createWallet(start) {

    let balance = start;

    return {

        add(n) {

            balance += n;

            return balance;
        },


        spend(n) {

            if (n > balance) {

                return "Insufficient balance";
            }

            balance -= n;

            return balance;
        },


        show() {

            return balance;
        }
    };
}


const wallet = createWallet(100);


console.log(wallet.add(50));

console.log(wallet.spend(30));

console.log(wallet.spend(500));

console.log(wallet.show());

console.log(wallet.balance);


// Trying to cheat

wallet.balance = 99999;

console.log(wallet.show());


// ------------------------------------------
// Task 5.2 — Reset
// ------------------------------------------

function createWalletWithReset(start) {

    let balance = start;

    return {

        add(n) {

            balance += n;

            return balance;
        },


        spend(n) {

            if (n > balance) {

                return "Insufficient balance";
            }

            balance -= n;

            return balance;
        },


        show() {

            return balance;
        },


        reset() {

            balance = start;

            return balance;
        }
    };
}


const resetWallet = createWalletWithReset(100);


console.log(resetWallet.add(50));

console.log(resetWallet.reset());


// ------------------------------------------
// Task 5.3 — Login Guard
// ------------------------------------------

function limiter(max) {

    let used = 0;

    return function () {

        if (used < max) {

            used++;

            return "Attempt " + used + " of " + max;

        } else {

            return "Locked!";
        }
    };
}


const tryLogin = limiter(3);


console.log(tryLogin());

console.log(tryLogin());

console.log(tryLogin());

console.log(tryLogin());


// ------------------------------------------
// Task 5.4 — Secret Diary
// ------------------------------------------

function createDiary() {

    let entries = [];

    return {

        write(text) {

            entries.push(text);
        },


        read() {

            return entries;
        }
    };
}


const diary = createDiary();


diary.write("Went to college");

diary.write("Learned closures");


console.log(diary.read());


// Trying to access private data

console.log(diary.entries);


// entries does not exist outside createDiary()

// console.log(entries);