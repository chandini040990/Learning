
const database ={
    user1: {
        username : "venkat",
        password:"welcome"
    },
    user2: {
        username : "chand",
        password:"welcome123"
    }
}

function loginUser(username,password){
    try{
        //check if username and password is present 
        if(!username || !password){
            throw new Error("credentials are required")
        }

        //check if user exists
        const user = database[username];
         if(!user)
        {
            throw new Error("user not found")

        }
        //check if password matches
        if(user.password !== password){
            throw new Error("password not matching")
        }

        //if all checks pass
        console.log("login successful Welcome" +username)
    }catch(error){
        console.log("login failed" + error.message)
    }
    }

loginUser("","welcome")
loginUser("user1","welcome")
loginUser("user3","welcome")
loginUser("user1","welcome123")

