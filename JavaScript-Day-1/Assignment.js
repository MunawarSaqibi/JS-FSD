// Problem 1
// let firstName = "Munawar";
// let age = 21;
// let isStudent = true;
// let favColor = "Blue";
// let siblings = 2;
// console.log(firstName)
// console.log(age)


// Problem 2
// console.log(typeof age)
// console.log(typeof firstName)
// console.log(typeof isStudent)
// console.log(typeof favColor)
// console.log(typeof siblings)


// Problem 3
// let score;
// console.log(score)
// console.log(typeof score)
// let winner = null;
// console.log(winner)
// console.log(typeof winner)

// Undefined is when we forget to assign vale
// whereas Null is assigned when we intentionally don't assign value

// Problem 4
// let firstName = "Mohd";
// let lastName = "Munawar"
// let fullName = "Mohd Munawar"
// console.log(fullName)

// Problem 5
// let a = "5";
// let b = 3;
// let result = a + b;
// console.log(result);
// console.log(typeof result);

//prediction , a+b=8 
// output , a+b=53
//Numbers will not be added as "a" is a string ,rather a+b will be concatenated

//Part B

// problem 6:Basic Calculator

//  let num1=45;
//  let num2=12;

// console.log("Sum is", num1+num2)
// console.log("Difference is" ,num1-num2)
// console.log("Product is" , num1*num2)
// console.log("Quotient is", num1/num2)
// console.log("Remainder is", num1%num2)


//Problem 7
// let celsius = 25;
// let fahrenheit = ((celsius * 9/5) + 32);
// console.log("25°C is equal to" , fahrenheit, "°F" )

// Problem 8
// let π = 3.14;
// let radius = prompt("Enter Radius:");
// let Circumference = 2*π*radius;
// let area = π*radius**2;
// console.log("Circumference is" , Circumference.toFixed(3))
// console.log("Area of Circle is", area.toFixed(3))


// Problem 9

// let notebook= 15;
// let pens = 7.5;
// let backPack= 850;
// let subTotal= ((3*notebook)+(2*pens)+(backPack));
// console.log("SubTotal is", subTotal)
// let discount= ( subTotal/10);
// console.log("Discount 10% is ", discount)
// let finalTotal= subTotal-discount;
// console.log( "Final Amount after discount",finalTotal)

// Problem 10

// let num=prompt("Enter Number:");
// if (num%2===0) {
//     console.log("Given Number is Even")
    
// } else {
//     console.log("Given Number is odd")
// }

// Part C

// let result=10+5*2 //20
// console.log(result)

// let result2=(10+5)*2 //30
// console.log(result2)

// let result3 = 20 / 4 + 3 * 2;
// console.log(result3)
// let result4 = 2 ** 3 + 5;
// console.log(result4)
// let result5 = (8 + 2) / 5 * 3;
// console.log(result5)

//problem12
//let result = 10 + 20 * 5 / 3;//wrong
// let result = ((10 + 20) * 5 )/ 3;
// console.log(result)

//p13
// let finalResult= (((15+5)*3)-10)/4; //
// console.log(finalResult)

//Problem 14
// let bankBalance = 5000;
// bankBalance+=15000 //salary received
// //console.log("After Salary Received, Bank Balance is", bankBalance)
// bankBalance-=8000 //rent paid
// console.log("After Rent Paid, Bank Balance is", bankBalance)
// bankBalance+=5000 //bonus received
// console.log("After Bonus Received, Bank Balance is", bankBalance)
// bankBalance-=3000;//shopping paid
// console.log("After Shopping Paid, Bank Balance is", bankBalance)


let amount = 10000;
amount*=1.10
amount*=1.10
amount*=1.10
console.log("Amount after 3 years with 10% interest is", amount.toFixed(2))
