// Problem 1
// let num = -5;
// if (num > 0) {
//     console.log("The number is positive.");
// }else{
//     console.log("The number is Negative.")

// }
    
// Problem 2
// let age = 17;
// if (age>=18){
//     console.log("Eligible to Vote")
// }else{
//     console.log("Not Eligible")
// }

// Problem 3
// let marks=prompt("Enter Your marks");
// if(marks>=90){
//     console.log("Grade:A");
// }else if(marks<90 && marks>=80){
//         console.log("Grade:B")
//     }else if(marks<80 && marks>=70){
//         console.log("Grade:C")
//     }else if(marks<70 && marks>=60){
//         console.log("Grade:D")
//     }else{
//         console.log("Grade:F")
//         console.log("try next time")
//     }

// Problem 4
// let inputuserName=prompt("Enter")
// let inputpassWord=prompt("Enter")
// if (inputuserName==="admin" && inputpassWord==="12345"ad){
//     console.log("Login Successfully")
// }else{
//     console.log("Login failed!")
// }

// Problem 5
// let day=prompt("Enter the day of the week")
// if(day=="Sunday" || day=="Saturday"){
//     console.log("It's a weekend!")
// }else{
//     console.log("It's a weekday.")
// }

// Problem 6
// let age=prompt("Enter your age")
// if(age<12){
//     console.log("ticket price is $5")
// }else if(age>=12 && age <60){
//     console.log("ticket price is $8")
// }else{
//     console.log("ticket price is $6")
// }

// Problem 7
// let orderTotal=40;
// let isPremiumMember=true;
// if(isPremiumMember || orderTotal>50){
//     console.log("You are eligible for free shipping!")
// }else{
//     console.log("You are not eligible for free shipping.")
// }

// Problem 8
// let marks=prompt("Enter Your Marks")
// if (marks>=33) {
    
//     if(marks>=80){
//         console.log("Pass with Distinction")
//     }else{
// console.log("Pass")
//     }
        
    
// } else {
//     console.log("Fail")
    
// }

// Problem 9
// let temperature=25;
// let isRaining=true;
// if (temperature>30) {
//     console.log("Hot day")
// } 
// if(temperature>20 && temperature<30) {

//     if(isRaining) {
//         console.log("Pleasant but rainy")
        
//     } else {
//         console.log("Perfect weather")
        
//     }
    
// }else{
//     console.log("perfect weather")
// }


// Problem 10
// let dayNum=3;
// switch(dayNum){
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
// }

// Problem11
// let trafficSignal= prompt("Enter the traffic Signal color")
// switch(trafficSignal){
//     case "red":
//     console.log("Stop")
//     break;
//     case "yellow":
//     console.log("Slow Down")
//     break;
//     case "green":
//     console.log("Go")
//     break;
//     default:
//     console.log("Invalid Signal")
//     break;

// }

// Problem12
// let month=prompt("Enter any month number")
// switch(month){
//     case 1:
//     case 2:
//     case 12:
//         console.log("Winter")
//         break;

// }

// Part E: truthy and falsy values
// Problem 13
// let username="";
// if(username){
//     console.log(`welcome ${username}`)
// }else{
//     console.log("Please enter your username")
// }

// let score=0;
// if(score){
//     console.log(`Your score: ${score}`)
// }else{
//     console.log("No Score yet")
// }

// problem 15
// let age=20;
// let isCitizen=true;
// let hasVoted=false;
// if(age>=18 && isCitizen && !hasVoted){
//     console.log("Eligible to vote")
// }else{
//     console.log("Not Eligible to vote")
// }

// problem 16
// let total=120;
// let isPremium=false;
// if(isPremium){
//     console.log("20% discount applied")
//     console.log("Final Amout", +(total-total/(100/20)))
// }else if(total>100){
//     console.log("15% discount applied")
//     console.log("Final Amout", +(total-total/(100/15)))
// }else if(total>50){
//     console.log("10% discount applied")
//     console.log("Final Amout", +(total-total/(100/10)))
// }else{
//     console.log("No discount")
// }

// Problem 17
// let num=15;
// if (num%3==0 && num%5==0){
//     console.log("FizzBuzz")
// }else if(num%3==0){
//     console.log("Fizz")
// }else if(num%5==0){
//     console.log("Buzz")
// }else{
//     console.log(`print the number: ${num}`)
// }


// problem 18
// let age=prompt("Enter Your age:")
// if (age>=18) {
//     alert("Eligible to vote")
// } else {
//     alert("Not Eligible to vote")
// }


// problem 19
// let num1=prompt("Enter Num1")
// let num2=prompt("Enter Num2")
// let task=prompt("Enter Arthmetic Operator")
// switch(task){
//     case "+":
//         console.log(num1+num2);
//         break;
//     case "-":
//         console.log(num1-num2);
//         break;
//     case "*":
//         console.log(num1*num2);
//         break;
//     case "/":
//         console.log(num1/num2);
//         break;
//     default:
//         console.log("Invalid Operator")
//         break;

// }

// Problem 20
// let secretNum=7;
// let guess=prompt("Guess the Number:")
// if (guess==secretNum) {
//     console.log("CONGRATULATIONS!!!!")
    
// } else if(guess>secretNum) {
//     console.log("TOO HIGH!")
    
// }else{
//     console.log("TOO LOW!")
// }

// let word=prompt("Enter the word")
// if(word[0]=="A" || word[0]=="a"){

//     if(word.length==5){
//  console.log(`${word} is a Golden Word`)
// }else{
//     console.log("low length!!")
// }

//   }else{
//     console.log("NOT a golden word")
//   }
   
// Problem 22
// let num1 = 45;
// let num2 = 67;
// let num3 = 52;
// if (num1>num2 && num1>num3) {
//     console.log("Num 1 is largest")
    
// } else if(num2>num1 && num2>num3) {
//     console.log("Num2 is largest")
    
// }else{
//     console.log("Num3 is largest")
// }

// let num= prompt("enter no");
// if(num%10==0){
//     console.log("good")
// }else{
//     console.log("bad")
// }

let num=prompt("Enter Number")
if(num%7==0 && num%2==0){
    console.log("special Number")
}else if(num%7==0 && num%2!==0){
    console.log("Lucky Number")
}else{
    console.log("Regular Number")
}