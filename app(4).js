// function declartion 

// function defintion 
// function welcome(){
//     console.log("hi welcome to javascript class")
// }
// // we need to call the function the function()
// welcome();


// //we can also the pass the parameter to the function 
// function hello(name){
//     // returns the hello message using the "name" parameter
//     return `Hello, ${name}` //embedded expression or binding or interpolation , template literals
// }
// // calls the fucntion with the arguments "venkat"
// console.log(hello("venkat")); //we calling the function hello and passing the value as venkat

// hello venkat

// add two numbers a, b

// function add(a, b){
//     return a + b

// }
// console.log(add(10, 30))


// if the number is even or not

// function isEven(num){
//     return num % 2 === 0

// }
// console.log(isEven(3))



// function hello(name){
//     // returns the hello message using the "name" parameter
//     return `Hello, ${name}` //embedded expression or binding or interpolation , template literals
// }
// // calls the fucntion with the arguments "venkat"
// console.log(hello("venkat")); /

// function expression

// let hello = function(name) {
//     return `hello, ${name}`

// }
// console.log(hello("venkat"))


// let multiply = function(a, b) {
//     return a * b
// }

// console.log(multiply(10, 10))



// how the find the maximum number 7, 10

// let findMax = function(a, b){
//     // ternary operator
//     return a > b ? a : b;

// }
// console.log(findMax(7, 10))


// //function expression 
// let hello = function(name) {
//     return `hello, ${name}`

// }
// console.log(hello("venkat"))


// // function declaration
// function hello(name){  
//     return `Hello, ${name}`
// }
// console.log(hello("venkat"))


// arrow functions
// const greet = (name) => `hello, ${name};`
// console.log(greet('venkat'))


// function hi(){
//     console.log("hi")
// }
// hi();

// IIFE
// (function(){
//     console.log("hi")
// })();

// function hello(name = "ram"){
//     return `hello, ${name}`

// }
// console.log(hello("venkat"))
// console.log(hello())


// high order function

// function calculate(operation, a, b){
//     return operation(a, b)

// }

// function add(x, y){
//     return x + y;
// }

// function multiply(x, y){
//     return x * y;
// }
// console.log(calculate(add, 5, 10));
// console.log(calculate(multiply, 40, 50));



//function closures

// function scope and closure
// function in javascript have their own local scope.. Inner functions have access to the variables of the outer functions called closure


//*10******* 15years 
function outer() {
    let outerVar = "venkat";

    function inner(){
        console.log(outerVar); //we are accessing the "venkat" in the inner function
    }
    return inner;
}

const innerFunction = outer();
innerFunction();

//encapsulation ->
//function expression