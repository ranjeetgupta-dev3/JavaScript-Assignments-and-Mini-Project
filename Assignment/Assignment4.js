// Assignment 4: Loop Control Structures

// 1. For loop - Multiplication table of 5
console.log(" Multiplication Table of 5 ");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// 2. While loop with break
console.log("\n First number > 10 divisible by 6 ");

let number = 11;

while (number > 10) {
    if (number % 6 === 0) {
        console.log("Found:", number);
        break;
    }

    number++;
}


// 3. Do...while loop with continue
console.log("\n Do...While Loop (Skipping Even Numbers) ");

let count = 0;

do {
    count++;

    // Skip even numbers
    if (count % 2 === 0) {
        continue;
    }

    console.log("Number:", count);

} while (count < 5);