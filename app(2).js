// javascript data types

// javascript has several data types 

//1) Primitive
//2) non - primitive reference 

// primitive data types are immutable meaning their values cannot be alter once assigned


// 1) Number: data type
//represents both integer and floating-point numbers

//javascript is the automatic type conversion we need to explicitly specify the data type of the variable 

// let age = 25;
// console.log(typeof age);

// let price = 25.55;
// console.log(typeof price)



// 2) String

// used for textual data. Strings are enclosed with the single ' '  or dobule quote " " or ` `(string literals)

// let name = "venkat";
// console.log(typeof name);

// let value = '100'
// console.log(typeof value)


// 3) Boolean
    //represents true or false

    // let isStudent = true;
    // let isMentor = true;
    // let todayFriday = false;
    // console.log(typeof isMentor, typeof isStudent, typeof todayFriday);

// 4) undefined
  // a variable that has been declared but not yet been assgined to a value 

//   let a; 
//   console.log(typeof a)


// 5) Null

// represents the intentional absense of an value.

// let something = null;
// console.log(typeof something);

// 6) Symbol

// a unique and immutable value used for the property keys

// let Symbol1 = Symbol("INDIA");

// 7) Bigint
// used to represent the integer larger than 2 power of 53-1

// let big = BigInt(121231345645345345345345345645645646);
// console.log(big)


// in javascript everything is an object
//in case of null, null we got object...


// Non-primitive (Reference) data types:

// Non-prmitive data types are the muutable meaning their values can be changed and they are in refernces

// 1) Object

//  A collection of properties where each proporty is the key - value pair

// let person = {
//     name: "venkat",
//     city: "bangalore",
//     Country: "INDIA"
// }
// console.log(person.Country)


// 2) Array

//  a list like object used to store muliple values is a single variable

// let mobiles = ["LG", "SAMSUNG", "IPHONE"]; //if we wanted to access the array values we are going to use index 
// // and the array index will start from 0

// console.log(mobiles[0]);
// console.log(mobiles[2]);
// console.log(mobiles[1]);


// 3) Function 

// a block of statements added as a block 

// function something(){
//     let a = 10
//     console.log(a);
//     let b = 20;
//     console.log(b)
// }

// something();


// 4) Date

// an object representing the dates and times

// let today = new Date();
// console.log(today);

// new will create the object inter



// 5) RegExp

// 6) Map

// 7) Set


// copy by value and copy by referece

// in case of primitive data types( copy by value) is assigned to a new vairable,
// a copy of the value is created. This means that changes to the new variable do not affect the orginal value



// let originalValue = 100;
// let copiedValue = originalValue;
// // let copiedValue = 100

// console.log(originalValue); //100
// console.log(copiedValue) //100

// // i am going to modify the copied value
// copiedValue = 1000;

// console.log(originalValue); //100 
// console.log(copiedValue); //1000

// originalvalue hold the 100(primitive datatype);
// copiedvalue is assigned a copy of originalvalue
// changing the copiedvlaue does not affect the originalvalue

// copy by reference

// when a refernce type (non primitive data types) is assgined to a new variable, a refernce to the origianl object is created.
//This means that changes to the new variable will affact the original object, as both the variables point to the same memory location 


//copy by reference

let originalObject = {mobile: "LG", price: 10000};

let copiedObject = originalObject;

console.log(originalObject);
console.log(copiedObject);

// modify the property of the copied object
copiedObject.price = 20000;

console.log(originalObject); // heap memory we are storying reference
console.log(copiedObject); //