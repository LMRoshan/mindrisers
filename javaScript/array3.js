let cart = [
    {
        price: 200,
        qty: 3
    },
    {
        price: 300,
        qty: 3
    },
    {
        price: 100,
        qty: 3
    },
    {
        price: 400,
        qty: 3
    },
    {
        price: 500,
        qty: 3
    }
]

const total = cart.slice(0, 3).reduce((acc, curr) => acc + (curr.price * curr.qty), 0)
console.log("the total is", total);

let items = cart.slice(0, 2)
console.log(items);

let course = [
    {
        class: "MERN",
        completeStatus: true,
    },
    {
        class: "Python",
        completeStatus: false,
    },
    {
        class: "UI/UX",
        completeStatus: true,
    },
    {
        class: "PHP",
        completeStatus: false,
    }
]

let completed = []
let incompleted = []

for (let index = 0; index < course.length; index++) {
    const element = course[index];
    if (element.completeStatus) {
        completed.push(element);
    } else {
        incompleted.push(element)
    }
}

console.log(completed);
console.log(incompleted);

let number = [1, 2, 3, 4, 5, 6, 7]

const filteredNumber = number.filter((function (num) {
    return num < 4
}))

console.log(filteredNumber);
let number1 = [1, 2, 3, 4, 5, 6, 7]

const foundNumber = number1.find((function (num) {
    return num < 4
}))
console.log(foundNumber);

// assignment
let countries = [
    {
        name: "Nepal",
        code: "np"
    },
    {
        name: "India",
        code: "in"
    },
    {
        name: "Australia",
        code: "aus"
    },
    {
        name: "Japan",
        code: "jp"
    },
]

/* let countryCode = "in"
countries.filter((country) => {
    if (country.code == countryCode) {
        console.log(country.name);
    } 
})
 */
/* function countryCode(input) {
    for (let i = 0; i < 4; i++) {
        if (countries[i].code == input) {
            return countries[i].name
        } else{
            return "Country not found"
        }
    }
}

console.log(countryCode("np")); */

findCountry = (count) => {
    let country = countries.find(country => country.name === count)
    return country ? country.code : "Unknown"
}

// let x = findCountry("Japan")
console.log(findCountry("Japan"));

let sentence = "he/is/a/good/boy"
let wordSeparator = sentence.split("/")
console.log(wordSeparator);
console.log(wordSeparator.length);

let num = [1, 2, 3, 4]
let newNum = num.push(5)
// num[4] = 5
console.log(num);
let removeNum = num.pop()
console.log(num);

// assignment shift unshift  includes  charAt method of array

// spread operator
let num1 = [1, 2, 3]
let num2 = [...num1, 5, 6, 7, 8]
console.log(num2);

// shift unshift(adds and removes first element from array)
let name22 = ["John", "Eric", "Johnson"]
name22.unshift("Rosan");
name22.splice(2, 0, "Rohan")
name22.shift();
console.log(name22);

// includes(checks whether the data is in the array or not)
console.log(name22.includes("Rosan"));

// charAt(finds the character's position in a string varaible)
let car = "porche"
console.log(car.charAt(4));


// parse && stringify
const jsonString = '{"name":"alisha", "age":20}'
const jsonObject = JSON.parse(jsonString)
console.log(jsonObject.name);

/* const jsonObject1 =  {"name":"alisha", "age":20}
const jsonString1 = JSON.stringify(jsonObject1)
console.log(jsonString1); */


let numbers = [1, 2, 3, 4]
let double = numbers.map(num => {
    return num * 2
})

console.log(double);


















