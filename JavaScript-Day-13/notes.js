// console.log("Before the long Calculation");
// for(i=0;i<500000000;i++){

// }
// console.log("After the long Calculation");

// let x=10;
// let y=20;
// let sum=x+y;
// console.log(sum);

// let name="Alice"
// let greeting="Hello," +name
// console.log(greeting);

// console.log("Starting");

// setTimeout(()=>{
//     console.log("this appears after 3 seconds");

// },3000)

// console.log("Ending");


// function fibonacci(n) {
// if (n <= 1) return n;
// return fibonacci(n - 1) + fibonacci(n -2);
// }
// console.log("Calculating...");
// let result = fibonacci(40); // This will take several seconds
// console.log("Result:", result);
// console.log("Done!");

// fetch('https://api.example.com/data')
// .then(response => response.json())
// .then(data => console.log(data));
// console.log("Request sent, but not waiting!");


// console.log("1.Program starts");
// setTimeout(() => {
//     console.log("2.This runs after 3 seconds");
// }, 3000);

// console.log("3.Program continues immediately")

// console.log("Open CGC Portal");
// setTimeout(() => {
//     console.log("Header Loaded");
// }, 1000);

// setTimeout(() => {
//     console.log("Student Data loaded");
// }, 2000);

// setTimeout(() => {
//     console.log("Footer Loaded");
// }, 3000);

// console.log("Portal Structure ready")

// function submitForm(){
//     console.log("Submitting Form...")


//     setTimeout(() => {
//         console.log("Form Submitted Successfully");
//         console.log("Redirecting to dashboard");
//     }, 1500);

//     console.log("Please wait!...");
// }

// submitForm()

// function greet(name,callback){
//     console.log("Hello," +name)
//     callback();
// }

// function sayGoodbye(){
//     console.log("Goodbye!");
// }

// greet(" Munawar",sayGoodbye)


// function fetchStudentData(studentId,callback){
//     console.log("Fetching data for student ID:", studentId);


//     setTimeout(() => {
//         let studentData={
//             id: studentId,
//             name: "Rahul Sharma",
//             course: "Computer Science"
//         };
//             console.log("Data Fetched Successfully");
//             callback(studentData)        
//     }, 2000);
// }

// function displayStudent(data) {
// console.log("Displaying student:");
// console.log("Name:", data.name);
// console.log("Course:", data.course);
// }

// fetchStudentData(101,displayStudent)



// function serviceVehicle(carModel, phoneNumber) {
// console.log("Received", carModel, "for service");
// console.log("Customer can leave now");
// setTimeout(() => {
// console.log("Service complete!");
// phoneNumber(); // Call the customer back
// }, 3000);
// }
// function customerCallback() {
// console.log("📞 Ring ring! Your car is ready!");
// console.log("Customer returns to pick up car");
// }
// serviceVehicle("Honda City", customerCallback);



// function changeColor(color,delay,callback){
//     setTimeout(() => {
//         document.body.style.backgroundColor=color;
//         console.log("Changed to", color);
//         if(callback) callback()
//     }, delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("blue",1000,()=>{
//                 console.log("All Colors Done")
//             })
//         })
//     })
// })

// function registerUser(username,callback){
//     setTimeout(() => {
//         console.log("User registered", username);
//         callback()
//     }, 1000);
// }

// function sendVerificationEmail(callback
// ){
//     setTimeout(() => {
//         console.log("Verification Email sent");
//         callback()
//     }, 1000);

// }

// function updateDatabase(callback){
//     setTimeout(() => {
//         console.log("Database updated");
//         callback( )
//     }, 1000);
// }


// function sendWelcomeSMS(callback){
//     setTimeout(() => {
//         console.log("Welcome SMS sent");
//         callback()
//     }, 1000);
    
// }



// registerUser("John Doe",()=>{
//     sendVerificationEmail(()=>{
//         updateDatabase(()=>{
//             sendWelcomeSMS(()=>{
//                 console.log("Registeration Complete!");
//             })
//         })
//     })
// })


// let myPromise= new Promise((resolve,reject)=>{
//     let success=true;

//     if(success){
//         resolve("Operation Successfull");
//     }else{
//         reject("Operation Unsucessfull..");
//     }
// });


// let internetSpeed = "fast";
// let downloadFile = new Promise((resolve, reject) => {
// console.log("Download started...");
// setTimeout(() => {
// if (internetSpeed === "fast") {
// resolve("File downloaded successfully!");
// } else {
// reject("Download failed: Slow internet");
// }
// }, 2000);
// });
// console.log("Download initiated");
// console.log(downloadFile);


// function saveToDatabase(data){
//     return new Promise((resolve,reject)=>{
//         console.log("Saving to databases");

//         setTimeout(() => {

//             if (dbAvailable) {
//                 resolve({
//                     message:"Data Saved Successfully",
//                     Id: 12345,
//                     timestamp:new Date()
//                 });
//             } else {
//                 reject("Database Connection failed")
                
//             }
            
//         }, 1500);
//     })
// }

// let savePromise=saveToDatabase({name:"John", age:25})
// console.log(savePromise);

let promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Succes! Data is here")
    }, 3000);
})

promise.then((message)=>{
    console.log(message)
});