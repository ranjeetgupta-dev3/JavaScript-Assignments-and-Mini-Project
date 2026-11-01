// Assignment 5: Function Architecture and Scope

// 1. Standard function with default parameters
function calculateArea(length = 5, width = 4) {
    return length * width;
}

// Calling standard function with default values
let defaultArea = calculateArea();


// 2. Arrow function with parameters
const calculateAreaArrow = (length = 5, width = 4) => {
    return length * width;
};

// Calling arrow function with custom values
let customArea = calculateAreaArrow(10, 3);


// 3. Demonstrating function scope
function scopeTest() {
    let functionVar = "I am inside the function";
    console.log("Inside Function:", functionVar);
}

scopeTest();


// 4. Demonstrating block scope
if (true) {
    let blockVar = "I am inside the block";
    console.log("Inside Block:", blockVar);
}


// Trying to access block-scoped variable outside the block
try {
    console.log("Outside Block:", blockVar);
} catch (error) {
    console.log("Scope Test Error:", error.toString());
}


// Display required output
console.log("Standard Function Area (Default 5x4):", defaultArea);
console.log("Arrow Function Area (Custom 10x3):", customArea);