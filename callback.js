// A callback in javascript is a function that is passed as an argument to another function.

// function addNumbers(a, b, callback){
//     let sum = a + b;
//     callback(sum)
// }

// function displayResult(result) {
//     console.log("the result is " + result)
// }


// addNumbers(5, 10, displayResult)

// function addNumbers(a, b, callback) {
//     let sum = a + b
//     callback(sum)
// }

// function substraction(a, b, callback){
//     let sub = a - b;
//     callback(sub)
// }

// function multiply(a, b, callback){
//     let multiply = a * b;
//     callback(multiply)
// }

// function displayResult(result){
//     console.log("result", result)
// }


// addNumbers(10, 30, displayResult)
// substraction(10, 5, displayResult)
// multiply(10, 5, displayResult)




// wanted to create a function whatever i am getting the result i wanted to diplay that result into another function

// function greet(name, callback){
//     console.log("hello. " + name + "!")
//     callback(name)
// }

// function morningGreet(name){
//     console.log("good morning" + name)
// }

// function eveningGreet(name){
//     console.log("good evening" + name)
// }

// const currentHour = new Date().getHours();
// if(currentHour < 12){
//     greet("Venkat ", morningGreet)
// } else {
//     greet("Venkat ", eveningGreet)

// }

// callback hell -> a callback which contains the nested callbacks then we will called pyrmaid or callback hell( this process is not recommonded in our project)

// console.log("start");

// setTimeout(function() {
//     console.log("1 task is completed");
//     setTimeout(function() {
//         console.log('2 task is completed');
//         setTimeout(function() {
//             console.log('3 task is completed')
//             setTimeout(function() {
//                 console.log("4 task is completed");
//                 setTimeout(function() {
//                     console.log("5 task is completed");
//                     setTimeout(function() {
//                         console.log("6 task is completed")
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }, 4000)


// fetch the user data
function fetchUserData(userId, callback){
    setTimeout(() => {
        console.log(`user data is fetched : ${userId}`)
        const user = {id: userId, name: "venkat"};
        callback(user)
    }, 1000); 
}

// fetch the posts for the user 1

function fetchUserPosts(user, callback){
    setTimeout(function() {
        console.log(`fetching the posts for the user ${user.name}`);
        const posts = [
            {id: 1, title: "Post 1", userId: user.id},
            {id: 2, title: "Post 2", userId: user.id},
        ];
        callback(posts)
    }, 1000)
}

// fetch the commetns for the posts

function fetchCommentsPosts(post, callback){
    setTimeout(function() {
        console.log(`fetching the comments for the user ${post.title}`);
        const comments = [
            {postId: post.id, comment: "Great Post you have added"},
            {postId: post.id, comment: "Nice Post you have added"},
        ];
        callback(comments)
    }, 1000)
}


fetchUserData(1, function(user){
    fetchUserPosts(user, function(posts){
        posts.forEach(function(post){
            fetchCommentsPosts(post, function(comments){
                console.log(`comments for ${post.title}`, comments)
            })
        })
    })
})