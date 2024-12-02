// console.log("hello from top");

// function abcd(name) {
//     console.log("hallo" + " " + name + " " + "!");
//     return (`hello ${name}`);
// }

// const x = abcd("John");
// console.log(x);

// function add(x, y) {
//     return x + y;
// }

// const sum = add(5, 10);
// console.log(sum);

// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(5, 10));

// setTimeout(() => {
//     console.log("hello from the middle");
// }, 2000);

// function sum(...numbers) {
//     let total = 0
//     for (let num of numbers) {
//         total += num
//     }
//     return total
// }

// console.log(sum(1, 2, 3, 4));

// console.log("hello from the buttom");

// try {
//     let firstName = "Ronish"
//     let lastName = "Paudel"
//     let fullName = firstName + " " + lastName
//     console.log("his fullname is ", fullName1);

// } catch (error) {
//     console.log(error.message);
// }

// tradional function
// function add(x, y) {
//     return x + y
// }

// let total = add(3, 7)
// console.log(total);

// const add = (x, y) => {
//     return x + y
// }

// let arrowTotal = add(3, 7)
// console.log(arrowTotal);


// function normal() {
//     this.message = "hello, world"
//     setTimeout(() => {
//         console.log(this.message);
//     }, 3000);
// }
// normal();

const showAlert = (type, message) => {
    console.log(`${type}: ${message}`);
}

// showAlert("warning", "you are not a user");

// const fetchData = (callBack) => {
//     console.log("api is listening");
//     setTimeout(() => {
//         callBack("api fetched successfully");
//     }, 3000);
// }

// fetchData((msg) => {
//     console.log(msg);
// });

/* array with name 
if the name is in the array print authorized
else print non authorized */


/* Question Array */

let names = ["rosan", "amrita", "ambika", "rohan", "sangmo"]

/* mero solution */
// const r = (user) => {
//     const authorization = names.includes(user) ? "authorized user" : "non authorized user"
//     return authorization
// }

// console.log(r("rosan"));
// console.log(r("raju"));

/* siyon ko  solution*/
// const checkUser = () => {
//     const enteredUser = prompt("enter the name:")

//     if (names.includes(enteredUser)) {
//         alert("authorized user")
//     } else {
//         alert("non authorized user")
//     }
// }

// checkUser("rosan");

/* Raju sir ko Solution */
const signUp = (name) => {
    const user = names.find(c => c === name)
    if (user) {
        console.log("authorized user", user);
        showAlert("authorized user", "welcome")
    } else {
        console.log("non authorized user");
        showAlert("login error", "sorry")
    }
}

signUp("raju"); 





// asynchornous function
// promise, callback

// Promise takes resolve and reject as an argument 
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("internal server error")

        resolve({
            data: {
                name : "umesh",
                email: "user@gmail.com"
            }
        })
    }, 3000);

})

console.log("hello");


promise.then((res) => {
    console.log("response", res);
    
})
.catch((err) => {
    console.log("this is error", err);
    
})
console.log(promise);



