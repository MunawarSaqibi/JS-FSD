// for (let i=0;i<100;i++){
//     console.log(`Hello World ${i}`)
// }

// for(let i=0;i<=5;i++){
//     console.log(i)
// }

// for(let i=0;i<=15;i+=3){
//     console.log(i)
// }

// for(let i=0;i<=15;i+=2){
//     console.log(i)
// }

// for(let i=2;i<=20;i+=2){
//     console.log(i)
// }

// for(let i=1;i<=10;i++){
//     console.log(`5*${i}=${5*i}`)
// }

// for(let i=10;i>=1;i--){
//     console.log(i)
// }
// console.log("Blast Off!..")

// for (let i = 1; i <= 5; ) {
// console.log(i);
// // i never changes, so i <= 5 is always true
// }


// let count = 0;
// while (count < 5) {
// console.log(count);
// // Forgot to increment count!
// }

// let count=0;
// while(count<5){
//     console.log(count)
//     count++
// }


// for(let i=1;i<=3;i++){
//     console.log(`OuterLoop:${i}`)
//     for(let j=1;j<=3;j++){
//         console.log(`InnerLoop:${j}`)
//     }
// }

// for (let i = 1; i <= 5; i++) {
// let row = "";
// for (let j = 1; j <= 5; j++) {
// row += (i * j) + "\t";
// }
// console.log(row);
// }


// for(let i = 1; i <= 5; i++) {
// let pattern = "";
// for (let j = 1; j <= i; j++) {
// pattern += "* ";
// }
// console.log(pattern);
// }



// for(let row=1;row<=4;row++){
//     let line=""
//     for(let col=1;col<=4;col++){
//         line+=`(${row},${col})`
//     }
//     console.log(line)
// }


// for(let i = 5; i >= 1; i--) {
// let pattern = "";
// for (let j = 1; j <= i; j++) {
// pattern += "* ";
// }
// console.log(pattern);
// }

// let i=1;
// while(i<=5){
//     console.log(i)
//     i++
// }

// let sum=0;
// let num=1;

// while(sum<50){
//     sum +=num;
//     console.log(`Added ${num},sum is now ${sum}`)
//         num++;
// }
// console.log(`Final sum: ${sum}`);


// let passWord=""
// let attempts=0;

// while(passWord!=="secret123" && attempts<3){
//     passWord=prompt("Enter password");
//     attempts++


// if(passWord==="secret123"){
//     console.log("Acces Granted")
// }else if(attempts<3){
//     console.log(`Wrong Password,${3-attempts} attempts remaining`)
// }else{
//     console.log("Access denied.Too many attempts")
// }
// }

// let number=1000;
// while(number>1){
//     number=number/2;
//     console.log(number)
// }

// let target = 1000;
// let power = 1;
// let exponent = 0;
// while (power <= target) {
// exponent++;
// power = 2 ** exponent;
// }
// console.log(`2^${exponent} = ${power} is the first power of 2 greater than ${target}`);
// // Output: 2^10 = 1024 is the first power of 2 greater than 1000