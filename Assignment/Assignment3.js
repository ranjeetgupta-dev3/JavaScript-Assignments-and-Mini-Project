// Assignment 3: Conditional Logic Implementation

let score = 85;

// Determine grade using if...else
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// Determine grade using switch statement
let gradeDescription;

switch (grade) {
    case "A":
        gradeDescription = "Excellent";
        break;
    case "B":
        gradeDescription = "Good";
        break;
    case "C":
        gradeDescription = "Average";
        break;
    case "D":
        gradeDescription = "Needs Improvement";
        break;
    case "F":
        gradeDescription = "Fail";
        break;
    default:
        gradeDescription = "Invalid Grade";
}

// Determine pass/fail using ternary operator
let status = score >= 40 ? "Passed" : "Failed";

// Display output
console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);