// Assignment 2: Operators, Expressions, and Input Handling

// Taking input from the user
let billAmount = prompt("Enter your bill amount:");
let tipPercentage = prompt("Enter tip percentage:");

// Explicit type conversion
billAmount = Number(billAmount);
tipPercentage = Number(tipPercentage);

// Calculate tip
let calculatedTip = (billAmount * tipPercentage) / 100;

// Calculate total amount
let totalAmount = billAmount + calculatedTip;

// Display formatted output
console.log("Subtotal: $" + billAmount);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + calculatedTip);
console.log("Total Amount to Pay: $" + totalAmount);