// Probelem 1
// a) firstName - valid Variable Name
// b) 2ndPlace - invalid Variable Name (cannot start with a number)
// c) user_email - valid variable name (using snake_case)
// d) total--price - invalid variable name (cannot contain hyphens)
// e) $amount - valid variable name (can start with $)
// f) my variable - invalid vafriable name (cannot contain spaces)
// g) _privateData - valid variable name (can start with _)
// h) let - invalid variable name (cannot use reserved keywords)

// Problem 2
// Current (incorrect or non-standard)
// let user name = "Alice";
// let 1stprize = 1000;
// let total--cost = 250;
// let USERAGE = 25;

// Your corrected versions:
// let userName = "Alice"; // Use camelCase and remove space
// let firstPrize = 1000; // Use camelCase and remove starting digit
// let totalCost = 250; // Use camelCase and remove hyphens
// let userAge = 25; // Use camelCase and standard variable naming
// console.log(userName, firstPrize, totalCost, userAge);// Output: Alice 1000 250 25  

// Problem 3
// // Store a person's email address
// let userEmail= "john@example.com";
// // Store whether a user is logged in (boolean)
// let islogged = true;
// // Store the maximum number of attempts
// const maxAttempts = 3;
// // Store a student's final grade
// let finalGrade= 85;
// // Store a product's price in dollars
// let $productPrice= 99.99;


// PartB

// Problem 4
// // Create a variable for "is it raining?" - Set it to false
// let isRaining = false;
// // Create a variable for "is the user an adult?" (age >= 18) - Set it to true
// let isAdult = age >= 18;
// // Create a variable for "does the password match?" - Set it to false
// let isPasswordMatch = false;


// Problem 5
// let x = 10;
// console.log(x)// Prediction: Number
// x = "Hello";
// console.log(typeof x); // Prediction: string
// x = true;
// console.log(typeof x); // Boolean

// PartC
// Problem 6
// let language = "JavaScript";
// console.log(language); // Output: JavaScript
// console.log(language[0])
// console.log(language[4])
// console.log(language[language.length - 1]);
// console.log(language.length)


// Problem 7
// Create a string with double quotes
// let message1 = "Mohd Munawar";
// // Create a string with single quotes that says: It's a sunny day
// let message2 = 'It is a sunny day';
// // Create a string with double quotes that says: He said, "Hello!"
// let message3 = "He said ,Hello! ";
// console.log(message1)

// Problem 8
// let firstName = "John";
// let lastName = "Doe";
// // Concatenate to create "John Doe"
// let fullName = (firstName+" " +lastName); //

// // Create a message: "Hello, John Doe!"
// let greeting = "Hello "+(firstName + " " + lastName);
// let age = 25;
// // Create: "John is 25 years old"
// let info = (firstName+" " + "is 25 years old");
// console.log(fullName)
// console.log(greeting)
// console.log(info)


// Problem 9
// let name = "Alice";
// let score = 95;
// //let message = "Student " + name + " scored " + score + " points.";//recorrect this with template literals
// let message = `Student ${name} scored ${score} points.`;
// console.log(message); // Output: Student Alice scored 95 points.

// Problem 10
// let cityName = "Paris";
// let temperature = 25;
// let weather= `the temperature in ${cityName} is ${temperature} degrees Celsius.`;
// console.log(weather); // Output: The temperature in Paris is 25 degrees Celsius.

// Problem 11
// A variable declared but not assigned
// let score;
// console.log(score); // Output: undefined
// // A variable intentionally set as empty
// let winner = null;
// console.log(winner); // Output: null
// // Accessing a non-existent property
// let user = { name: "Alice" };
// console.log(user.age); // Output: undefined

// Problem 12
// console.log(10 > 5); // true
// console.log(3 < 2); // false
// console.log(5 >= 5); // true
// console.log(8 <= 10); // true
// console.log(7 != 7); // false
// console.log(15 > 20); // false

// Problem 13
// let age = 18;
// console.log(age >= 18); // true
// let temp = 30;
// console.log(temp < 40)
// let score = 75;
// console.log(score<=50)

// Problem 14
// console.log(5 == 5); // true
// console.log(5 === 5); // true
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false
// console.log(true == 1); // true
// console.log(true === 1); // false
// console.log(0 == false); // true
// console.log(0 === false); // false

// Problem 15
let userInput = "10";
if (userInput === "10") {
console.log("Input is 10");
}