// const myPromise = new Promise((res, rej) => {
//     let goingOut = false;

//     if(goingOut){
//         res("yes we are going")
//     } else {
//         rej("no we will go next time")
//     }
// })
// myPromise
//     .then(result => {
//         console.log(result)
//     })

//     .catch(err => {
//         console.error(err)
//     })

//     .finally(() => {
//         console.log('always exectues')
//     })



// function one() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("one is completed")
//             resolve()
//         }, 1000)
//     })
// }

// function two() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("two is completed")
//             resolve()
//         }, 1000)
//     })
// }

// function three() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("three is completed")
//             resolve()
//         }, 1000)
//     })
// }
 

//  one()
//     .then(two)
//     .then(three)
//     .then(() => {
//         console.log("all tasks are completed")
//     })


// Promise.all() method take an aray of promises and returns single promie that resolve all the pomise


const promise1 = new Promise(resolve => {
    setTimeout(resolve, 2000, "result from the promise 1")
})

const promise2 = new Promise((resolve, rejected) => {
    setTimeout(rejected, 1000, "result from the promise 2")
})


const promise3 = new Promise(resolve => {
    setTimeout(resolve, 500, "result from the promise 3")
})

// Promise.all([promise1, promise2, promise3]).then(result => {
//     console.log(result)
// })

// Promise.race([promise1, promise2, promise3]).then(result => {
//     console.log(result)
// })


Promise.all([promise1, promise2, promise3])
.then(result => {
    console.log(result)
})
    .catch(err => {
        console.error(err)
    })


