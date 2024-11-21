// let: 
// block scope: The scope of the 'let' is limted to the block 
// Re-declaration: We cannot re-declare the variable in the same scope or same block, but reassginment 
//is possible 


let a = 10;
console.log(a); //10
{
    let a = 100;
    console.log(a); //100
}
{
    let a = 200;
    console.log(a); //200
}
console.log(a); //10


// const :
// the is also block scope but re-declartion and reassginment or changgin the values is not possible 
//but we can modify the const values

// const a = 10;
// console.log(a)
// const a = 20;
// console.log(a);

// var a; 
// a = 10;
// console.log(a);

// let b;
// b = 20;
// console.log(b);


//declartion and assginment must should happen in the same line otherwise we are going to get the error
// const c;
// c = 100;
// console.log(c)

// const c = 10;
// // const c = 100;
// {
//     const c = 300;
//     console.log(c)
// }

// const x = 100;
// x = 200;
// console.log(x); // we are trying to change the value but this is not possible in case of const 

// const arr = [1, 2, 3]; //array means collection of values assign to the variable 
// // arr = [4];
// arr.pop(); //we are not reassign but we are modifying the array using the array push method 
// console.log(arr);


// var a = 10; 
// let a = 20;
// const a = 30;
// console.log(a)
// {
//     const a = 40; 
//     let a = 50; 
//     var a = 100;
//     console.log("frist", a)
// }
// {
//     var c = 70; 
//     const g;
//     g = 100;
//     let g = 50
//     console.log("second", g)
// }
// {
//     let h = 100; 
//     let h1 = 200;
//     const h1 = 500;
//     var h1 = 600;
//     console.log("third", h1)
// }

