// let x = 3;

// if(x > 5) {
//     console.log("x is > than 5")
// } else {
//     console.log("x is less than 5")
// }

// let x = "5"; 

// if(x > 5) {
//     console.log("x > 5")
// } else if (x === 5){
//     console.log("x is equal to 5")
// } else {
//     console.log("x is less than 5")
// }

// let number = 10;

// if(number % 2 === 0){
//     console.log("the number is even")
// } else {
//     console.log("the number is odd")
// }


// let password = "hello123456789";
// // console.log(password.length)
// if(password.length >= 12) {
//     console.log("Strong password")
// } else if( password.length >= 10) {
//     console.log("Medium strength password")
// } else{
//     console.log("weak password")
// }

// let score = 34;

// if(score >= 90){
//     console.log("GRADE A")
// } else if(score >= 80) {
//     console.log("GRADE B")
// } else if(score >= 70){
//     console.log("GRADE C")
// } else if(score >= 60) {
//     console.log("GRADE D")
// } else if(score >= 50){
//     console.log("GRADE E")
// } else (
//     console.log("fail")
// )


// let grade = "B"; 

// switch(grade) {
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("GOOD JOB");
//         break;
//     case "C":
//         console.log("Passed");
//         break;
//     case "D":
//         console.log("OK");
//         break;
//     default: 
//         console.log("invalid grade")
// }


// let userRole = "admin";

// switch(userRole) {
//     case 'admin':
//         console.log("FULL access is granted");
//         break;
//     case 'editor':
//         console.log("editor permission given to you");
//         break;
//     case "user":
//         console.log("only view permission");
//         break;
//     default:
//         console.log("no access to this website")
// }



// let i = 1; //initialize the i value = 1 

// //while loop
// while(i<=5){
//     console.log(i); //print the current value of the i
//     i++; //increment the counter value
// }

// do while
// let a = 1;
// do {
//     console.log(i);
//     console.log("i am inside the do");
//     i++;
// }while(i<=5)

// find the sum of the numbers

let rao = 0;
let number = 1;

while(number <=10){
    rao += number;
    number++
}

console.log(`the sum of the numbers ${rao}`)

// ${} //embeded expression or binding or interpolatin