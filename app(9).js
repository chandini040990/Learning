// what is array: collections of data or values assigned to the variable.
//the array index will start from the 0 
//an array contains the different data type values

let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers[5]); // o/p: 6

let names = [1, true, "mango", null];
console.log(names)

numbers[0] = 1000
console.log(numbers)
console.log(typeof numbers);

// an array using Array constructor 

// let arr = new Array(1, 2, 3, 4, 5, 6);  //wrong
// console.log(arr)

// array methods
//push, pop, shift, unshift

// push: push method adds one or more elements to the end of an array
//arryname.push(ele1, ele2, ele3)

let mobiles = ["LG", "SAMSUNG", "OPPO"];
console.log(mobiles);
console.log(mobiles.length)
mobiles.push("vivo");
let something = mobiles.push("BPL", "PHILIPS")
console.log(mobiles);
console.log(something)
// console.log(addMobile)

// pop: Removes the last element fron an array and it will retruns that element.

let mobiles1 = ["LG", "SAMSUNG", "OPPO"];
// let rmMobile = mobiles1.pop();
mobiles1.pop();
mobiles1.pop();
mobiles1.pop();
mobiles1.pop();
console.log(mobiles1);


let arr = [];
console.log(arr.pop())

// shift: Remove the first element from the array and it will returns that element.(FIFO)

let mobiles2 = ["LG", "SAMSUNG", "OPPO"];
console.log(mobiles2.shift()); //LG
console.log(mobiles2); //samsung, oppo


//unshift: adds one ore more elements to the beginning of the array and it will returns the new length of the array.


let mobiles3 = ["LG", "SAMSUNG", "OPPO"];
let rm = mobiles3.unshift("iphone", "vivo");
console.log(mobiles3)
console.log(rm)


