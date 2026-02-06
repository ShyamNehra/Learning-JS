//For

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

//break exits current block
// console.log(`\n Using break with FOR: `)
for (let i = 0; i < 10; i++) {
    if(i == 5){
        // console.log(`5 Detected`)
        break;
    }
    // console.log(i)
}

//continue skips current iteration
// console.log(`\n Using continue with FOR: `)
for (let i = 0; i <= 10; i++) {
    if(i == 5){
        // console.log(`5 Detected`)
        continue;
    }
    // console.log(i)
}




//While  -  keep running till the condition is true
let score = 0;
// console.log(`\nUsing while: `)
while(score <= 5){
    // console.log(`Score: ${score}`)
    score++
}



//do-While  -  runs first then check the condition
let score1 = 0;
// console.log(`\nUsing do-while: `)
do{
    // console.log(`Score1: ${score1}`)
    score1++
}while(score1 <= 5)




//for-of  -  need not to specify conditions, it will automatically detect

let arr = [1,2,3,4,5,7,43,32]

for (const elements of arr) {
    // console.log(elements)
}


let greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(greet)
}





//------------------------------------Maps-------------------------------
//an object which stores unique key-value pairs, in order of their declarations

const myMap = new Map()
    myMap.set("IN", "India")
    myMap.set("Fr", "France")
    myMap.set("USA", "United States")
    myMap.set("IN", "India")//its duplicated, so ewon't be stored in 'Map'

// console.log(myMap)


//applying for-of loop on 'myMap'
for (const [key, pairs] of myMap) {
    // console.log(key, ":-", pairs)
}


//applying for-of loop on object
const myObject = {
    'game1' : 'GTA V',
    'game2' : 'NFS',
    'game3' : 'PalWorld'
}

/*
for (const games of myObject) {
    console.log(games)
}
*/
//Objects are not iterable with for-of loop method




//for objects, we use for-in loop

const newobject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby"
}

for (const key in newobject) {
    // console.log(`${key} is for ${newobject[key]}`)
}
//'key' for key and 'objectname[key]' for values


const newArray = ['abcd', 'bcds']
for (const key in newArray) {
    // console.log(key);   //will give index only
    // console.log(newArray[key])
}



//---------------------------for-each---------------------------

const coding = ["C", "C++", "JS", "Python", "Java"]

coding.forEach(element => {
    // console.log(element)
});


//------------Important-------------------
//access elements from an array having objects
const objArray = [
    {
        lang: "Javascript",
        langextension: "js"
    },
    {
        lang: "C++",
        langextension: "cpp"
    },
    {
        lang: "python",
        langextension: "py"
    }
]

objArray.forEach((item) => {
    //  console.log(item.lang)
    //  console.log(item.langextension)
})



//
const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

const newNums = myNums.filter((item) => {
    return item > 4
})

// console.log(newNums)




//FIlter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let myBooks = books.filter((bks) => bks.genre === "Fiction")


//if we create/open a scope {}, then we will have to explictly use 'return' keyword
let myBook1 = books.filter((bks) => {return bks.genre === "Fiction" && bks.publish >= 1985})
// console.log(myBook1)



//Chaining

const myNumbers = [1,2,3,4,5,6,7,8,9]

const newNumsAgain = myNumbers
                                .map((numbers) => numbers + 10)
                                .map((numbers) => numbers - 5)
                                .filter((numbers) => numbers>=10)
console.log(newNumsAgain)



//Reduce

const demoArr = [1,2,3]

const result = demoArr.reduce(function(acc, currVal) {
    console.log(`accumulator ${acc}, Current Value ${currVal}`)
    return acc + currVal;
}, 3)
//acc's initial value = 3

console.log(result)





//Example of reduce

const ShoppingCart = [
    {
        name: "Jdksj",
        price: 433
    },
    {
        name: "Jdksj",
        price: 9433
    },
    {
        name: "434dsfsj",
        price: 4330
    },
]

const Bill = ShoppingCart.reduce((acc, item) => (acc+ item.price), 0 )
console.log(Bill)