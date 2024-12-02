let students = [
    {
        name: "Amrita",
        hasPaidStatus: true,
        hasSchorship: true,
    },
    {
        name: "Rosahn",
        hasPaidStatus: true,
        hasSchorship: false,
    },
    {
        name: "Someone",
        hasPaidStatus: false,
        hasSchorship: false,
    }
]

students.forEach((student) => {
    if (student.hasPaidStatus || student.hasSchorship) {
        console.log(`${student.name} can give the exam`);
    }
    else {
        console.log(`${student.name} can't give the exam`);
    }
})

let carItems = [
    {
        name: "Rohan",
        products: [
            {
                title: "laptop",
                price: 100000
            },
            {
                title: "mobile",
                price: 10000
            },
            {
                title: "tab",
                price: 50000
            }
        ],
    },
    {
        name: "Nikesh",
        products: [
            {
                title: "clothes",
                price: 1000
            },
            {
                title: "shoes",
                price: 6000
            },
            {
                title: "jacke",
                price: 2000
            }
        ],
    },
]

carItems.map((prod) => {
    let total = prod.products.reduce((sum, product) => sum + product.price, 0)
    console.log(`${prod.name} spends ${total}`);
})

// double equal and triple equal
/* let five = 5 
console.log(five); */

/* 5 == five true
5 === five false */ 

let x = 5;
console.log(typeof x);

let fruits = [
    {
        name: "orange",
        scientificName : "xyz",
        prices : [
            {
                country: "Nepal",
                price: 25
            },
            {
                country: "India",
                price: 20
            },
            {
                country: "Australia",
                price: 2
            },
            {
                country: "USA",
                price: 1
            },
        ]
    },
    {
        name: "orange",
        scientificName : "xyz",
        prices : [
            {
                country: "Nepal",
                price: 25
            },
            {
                country: "India",
                price: 20
            },
            {
                country: "Australia",
                price: 2
            },
            {
                country: "USA",
                price: 1
            },
        ]
    }
]

/* price of orange in different countries */
fruits.forEach((prod) => {
    prod.prices.forEach(item => {
        console.log(`The price of ${prod.name} in ${item.country} is ${item.price}`);
    })
})





