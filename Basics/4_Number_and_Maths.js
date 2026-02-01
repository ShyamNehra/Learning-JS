const score = 45
console.log(score, " ", typeof score)
//This is implicitly treated as Number type

const newscore = new Number(45)
console.log(newscore, " ", typeof newscore)
//This is explicitly treated as Number Object type


const newscore2 = 45.6789
console.log(newscore2.toString().length)
console.log(newscore2.toFixed(2)) //toFixed is used to set number of decimal places
console.log(newscore2.toPrecision(3)) //toPrecision is used to set total number of significant digits, will round off if needed

const value = 10000000
console.log(value.toLocaleString('en-IN')) //toLocaleString is used to format number according to locale 








//----------------MATHS-----------------

console.log("\nMaths Functions in JavaScript:\n");

console.log(Math.PI) //Value of PI
console.log(Math.E) //Value of Euler's Number
console.log(Math.sqrt(16)) //Square Root
console.log(Math.pow(2, 4)) //Power Function
console.log(Math.abs(-45)) //Absolute Value (negative to positive only)

console.log(Math.round(4.5)) //Rounds to nearest integer
console.log(Math.floor(4.7)) //Floor Value (rounds down)
console.log(Math.ceil(4.3)) //Ceiling Value (rounds up)

console.log(Math.min(4, 1, 7, -3, 9)) //Minimum Value
console.log(Math.max(4, 1, 7, -3, 9)) //Maximum Value

console.log(Math.random()) //Random number between 0 and 1
console.log((Math.random()*10) + 1) //Random number between 1 and 10 (added 1 to avoid 0)


const min = 1
const max = 6

console.log(Math.floor((Math.random())*(max-min+1)) + min)
//Random number between min and max (both inclusive)