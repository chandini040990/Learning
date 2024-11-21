
fetch("https://jsonplaceholder.typicode.com/users/1") //this is getting data from backend
            .then(response => {//once url response is received
                if (response.status !== 200) {
                    throw new Error("some issues with the backend server");
                }
                return response.json();//grab json response
            })
            .then(data => {
               const username  = data.username;
               const name  = data.name;
               const phone  = data.phone;
               const website  = data.website;
               const email  = data.email;
               const addressstreet  = data.address.street;

               document.getElementById("username").textContent = username
               document.getElementById("name").textContent = name
               document.getElementById("phone").textContent = phone
               document.getElementById("website").textContent = website
               document.getElementById("email").textContent = email
               document.getElementById("addressstreet").textContent = addressstreet
              

            })

            .catch(error => {
                console.log(error.message);
            })
        