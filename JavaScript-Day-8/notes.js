// const student = {
// name: "Alex",
// eng: 95,
// math: 93,
// phy: 97,
// getAvg() {
// let avg = (this.eng + this.math + this.phy) / 3;
// console.log(`${this.name} got avg marks = ${avg}`);
// }
// };
// student.getAvg();

// const account = {
// holder: "Sarah",
// balance: 5000,
// deposit(amount) {
// this.balance += amount;
// console.log(`${this.holder} deposited $${amount}. New balance: $${this.balance}`);
// }
// };
// account.deposit(500);

// const cart={
//     items:["Apple","Banana"],
//     total: 2,
//     addItem(item){
//         this.items.push(item);
//         this.total=this.items.length;
//         console.log(`Added ${item} , Total items ${this.total}`)
//     }
// }
// cart.addItem("orange")

// console.log("Program starts");
// try {
// console.log(undefinedVariable); // This doesn't exist!
// } catch (err) {
// console.log("Caught an error: Variable not found");
// }
// console.log("Program continues"); // This runs!

// function divide(a, b) {
// try {
// if (b === 0) {
// throw "Cannot divide by zero!";
// }
// return a / b;
// } catch (err) {
// console.log("Error:", err);
// return null;
// }
// }
// console.log(divide(10, 2)); // 5
// console.log(divide(10, 0));

// function validateAge(age) {
// try {
// if (age < 0) {
// throw "Age cannot be negative!";
// }
// if (age > 150) {
// throw "Age seems unrealistic!";
// }
// console.log(`Valid age: ${age}`);
// } catch (err) {
// console.log("Validation Error:", err);
// }
// }

// validateAge(25)
// validateAge(-5)
// validateAge(180)

// const sum = function(a, b) {
// return a + b;
// };

// const sum = (a, b) => {
// return a + b;
// };
// let addsum= sum(7,9)
// console.log(addsum)

// const sum = (a, b) => a + b;

// const greet = (name)=>{
//     return `Hello ${name}`

// }
// console.log(greet("Munawar"))

// const square=(num)=> num*num;
// console.log(square(5))
// console.log(square(20))

// const double =num=>num*2;
// console.log(double(7))

// const calculateTotal=(price,tax)=>{
//     let total=price+(price*tax)
//     return total
// }
// console.log(calculateTotal(100,2))

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]
// let evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4]

console.log("starting...")
setTimeout(()=>{
    console.log("This appears after 3 seconds");

},4000)
console.log("continuing....")