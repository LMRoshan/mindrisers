let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// this is an error array
let num = [1, 2, 3, 4, "five"];
console.log(num);


for (let i = 0; i < 10; i++) {
    console.log(i);

}

let realNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNum = []
let oddNum = []

realNum.forEach((number) => {
    if (number % 2 === 0) {
        evenNum.push(number);
    } else {
        oddNum.push(number);
    }

})

console.log("this is even number", evenNum);

console.log("this is odd number", oddNum);



/* if (realNum / 2) {
    console.log(realNum);
} */

    // wichtig
    const age = 15
    let canVote = (age>=18 ? "can vote": "can't vote")
    console.log(canVote);
    