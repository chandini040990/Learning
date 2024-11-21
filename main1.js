const person = {
    name: "chand",
    city:"chennai",
    country:"india"
}

localStorage.setItem("chandini",JSON.stringify(person));

const person1 = `{"name":"venkat","city":"chennai"}`;
//json.parse going to convert string into object

const jsonParse = JSON.parse(person1);
console.log(jsonParse.name);
console.log(jsonParse.city);
