// let userAge = 25;
// let userage = 30;
// let UserAge = 35;
// let USERAGE = 40;
// // These are FOUR DIFFERENT variables!
// console.log(userAge); // 25
// console.log(userage); // 30
// console.log(UserAge); // 35
// console.log(USERAGE); // 40

// Invalid
// let 1stPlace = "Gold"; // ❌ Cannot start with digit
// let 99balloons = 99; // ❌ Cannot start with digit
// // Valid
// let firstPlace = "Gold"; // ✓ Spell out the number
// let place1st = "Gold"; // ✓ Number at end is fine
// let balloons99 = 99; // ✓ Number at end is fine

// let userName = "Alice";
// let totalPrice = 99.99;
// let isLoggedIn = true;
// let calculateTotalCost = function() { };
// let getUserInfo = function() { };

// Camel Case
// let firstName = "John";
// let lastName = "Doe";
// let dateOfBirth = "1990-01-01";
// let emailAddress = "john@example.com";
// // Functions
// function calculateAge(birthYear) {
// return 2024 - birthYear;
// }

// snake_case
// let first_name = "John";
// let last_name = "Doe";
// let date_of_birth = "1990-01-01";
// let email_address = "john@example.com";

// PascalCase
// let FirstName = "John";
// let LastName = "Doe";
// let DateOfBirth = "1990-01-01";
// let EmailAddress = "john@example.com";

// Screaming_SNAKE_CASE
// let FIRST_NAME = "John";
// let LAST_NAME = "Doe";
// let DATE_OF_BIRTH = "1990-01-01";
// let EMAIL_ADDRESS = "john@example.com";

// Bad - unclear names
// let x = 25;
// let y = "John";
// let z = true;
// // Good - descriptive names
// let userAge = 25;
// let firstName = "John";
// let isEmailVerified = true;
// // Bad - too short
// let fn = "Alice";
// let ln = "Smith";
// // Good - clear and readable
// let firstName = "Alice";
// let lastName = "Smith";
// // Bad - abbreviations
// let usrAddr = "123 Main St";
// let empSal = 50000;
// // Good - spelled out
// let userAddress = "123 Main St";
// let employeeSalary = 50000;

// Boolean variables should be named to reflect their true/false nature
// let isLoggedIn = true;
// let isOver18 = false;
// let hasPermission = true;
// let isEmailVerified = false;
// console.log(isLoggedIn); // true
// console.log(isOver18);
// console.log(hasPermission); // true
// console.log(isEmailVerified); // false

// let isStudent = false;

// if (isStudent) {
// console.log("Student discount applied!");
// } else {
// console.log("Regular price.");
// }

// let age = 20;
// let isAdult = age >= 18; // true
// console.log(isAdult); // true
// let score = 75;
// let isPassing = score >= 60; // true
// let isFailing = score < 60; // false
// console.log(isPassing); // true
// console.log(isFailing); // false
// let temperature = 30;
// let isHot = temperature > 25; // true
// let isCold = temperature < 10; // false
// console.log(isHot); // true
// console.log(isCold); // false

// if (0) {
// console.log("This won't run"); // 0 is falsy
// }
// if (1) {
// console.log("This will run"); // 1 is truthy
// }
// if ("hello") {
// console.log("This will run"); // non-empty string is truthy
// }