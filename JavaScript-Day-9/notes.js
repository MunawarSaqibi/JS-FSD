// let numbers=[10,20,30,40];
// numbers.forEach((num) => {
//     console.log(num)   
// });

// let prices=[99,149,299]
// prices.forEach((price)=>{
//     console.log(`$${price}`)
// })

// let fruits=["Apple","Banana","Mango"]
// fruits.forEach((fruit,index)=>{
//     console.log(`${index+1}.${fruit}`)
// })


// let scores=[85,90,78,92];
// let total=0;
// scores.forEach((score)=>{
//     total +=score;
    
// });

// console.log(total)

// let names=["Munawar","Mar","Mohd"];
// let capitalizedNames=[];
// let smallNames=[];
// names.forEach((name)=>{
//     capitalizedNames.push(name.toUpperCase())
// })
// console.log(capitalizedNames)

// names.forEach((small)=>{
//     smallNames.push(small.toLowerCase())
// })
// console.log(smallNames)

// let nums=[1,2,3,4]
// let doubles=nums.map((num)=> num*2)
// console.log(doubles)
// console.log(nums)

// let names=["Munawar","mar","Mohd"]
// let upperCase=names.map((name)=>name.toUpperCase());
// console.log(upperCase)
// let lowerCase=names.map((name)=>name.toLowerCase());
// console.log(lowerCase)


// let students = [
// { name: "John", age: 20 },
// { name: "Sarah", age: 22 },
// { name: "Mike", age: 21 }
// ];
// let studentAge=students.map((student) => student.age)
// console.log(studentAge);

// let items = ["Home", "About", "Contact"];
// let menuItems = items.map((item) => `<li>${item}</li>`);
// console.log(menuItems);
// // ["<li>Home</li>", "<li>About</li>", "<li>Contact</li>"]


// let numbers=[1,2,3,4,5,6,7,8,9]
// let evenNums=numbers.filter((num)=>num%2===0)
// console.log(evenNums)

// let Grade=[33,40,90,76,56,47,89,80,23,39,67,58]
// let passGrade=Grade.filter((pass)=>pass>=50)
// console.log(passGrade)

// let words = ["hi", "hello", "bye", "goodbye"];
// let longWords = words.filter((word) => word.length > 2);
// console.log(longWords); 

// let people=[
//     {name:"Marx",age:10},
//     {name:"sarah",age:21},
//     {name:"raheen",age:25},
//     {name:"jhon",age:17}

// ]
// let adults=people.filter((person)=>person.age>=18)
// console.log(adults)

// let cart = ["apple", "banana", "apple", "mango", "apple"];
// let withoutApples = cart.filter((item) => item !== "apple");
// console.log(withoutApples); // ["banana", "mango"]

// let ages=[20,18,21,33]
// let allAdults=ages.every((age)=> age>=18)
// console.log(allAdults)

// let ages=[17,23,40,18]
// let hasTeenager=ages.some((age)=> age<18);
// console.log(hasTeenager)


// let numbers=[1,2,3,4,5]
// let sum=numbers.reduce((total,num)=>total+num,0);
// console.log(sum)

// let numbers=[43,70,97,102]
// let maxNum=numbers.reduce((maximum,num)=>{
//     return num>maximum? num:maximum;
// })
// console.log(maxNum)

// let fruits = ["apple", "banana", "apple", "mango", "apple"];
// let count = fruits.reduce((counter, fruit) => {
// counter[fruit] = (counter[fruit] || 0) + 1;
// return counter;
// }, {});
// console.log(count);
// // { apple: 3, banana: 1, mango: 1 }

// function greet(name="Guest") {
// console.log(`Hello, ${name}!`);
// }
// greet("Alice"); // Hello, Alice!
// greet();

// function Calculatetax(amount,taxRate=0.18){
//     return amount*taxRate;
// }
// console.log(Calculatetax(1000))
// console.log(Calculatetax(3000,0.30))

// function createProfile(name, age = 18, country = "India") {
// return { name, age, country };
// }
// console.log(createProfile("Raj"));
// // { name: "Raj", age: 18, country: "India" }
// console.log(createProfile("Priya", 25, "USA"));

// function power(base,exponent=2){
//     return base**exponent;
// }
// console.log(power(2,4))
// console.log(power(2))

// let original=[1,2,3]
// let copy=[...original]
// console.log(copy)
// copy.push(4)
// console.log(original)
// console.log(copy)

// let fruits=["apple","banana","mango"]
// let vegetables=["Tomato","carrot"]
// let food=[...fruits,...vegetables]
// console.log(food)

// let numbers = [2, 3, 4];
// let moreNumbers = [1, ...numbers, 5, 6];
// console.log(moreNumbers); // [1, 2, 3, 4, 5, 6]

// let user = {
// name: "Tony Stark",
// email: "tony@stark.com"
// };
// let updatedUser = {
// ...user,
// city: "New York",
// email: "ironman@stark.com" // overwrite
// };
// console.log(updatedUser);
// // { name: "Tony Stark", email: "ironman@stark.com", city: "New York" }

// let name="HELLO"
// let letters=[...name];
// console.log(letters)

// function sum(...numbers) {
// return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(5, 10, 15, 20)); // 50
// console.log(sum(100)); // 100

// function createTeam(captain, viceCaptain, ...players) {
// return {
// captain,
// viceCaptain,
// players
// };
// }
// let team = createTeam("Virat", "Rohit", "Dhoni", "Hardik", "Bumrah");
// console.log(team);
// let colors=["Red","Green","Blue"]
// let [first,second,third]=colors;
// console.log(first); // "Red"
// console.log(second); // "Green"
// console.log(third); // "Blue"

// let a = 10;
// let b = 20;
// [a, b] = [b, a]; // Swap
// console.log(a); // 20
// console.log(b); // 10

// let [a = 5, b = 10] = [1];
// console.log(a); // 1 (from array)
// console.log(b); // 10 (default, because array has only one element)

// let student = {
// name: "Rahul",
// age: 20,
// grade: "A"
// };
// let { name, age, grade } = student;
// console.log(name); // "Rahul"
// console.log(age); // 20
// console.log(grade); // "A"

let user = {
username: "karan123",
email: "karan@example.com"
};
let { username: id, email: mail } = user;
console.log(id); // "karan123"
console.log(mail); // "karan@example.com"