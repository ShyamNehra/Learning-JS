//Declaring a String
let str1 = "Hi! This is a String."
const str2 = new String('This is a Good String')



//Using Variable in an efficient and practical way:
const name= "Shyam"
const age = 20

//console.log("Hello I am ", name, "And I am ", age, "years old!"   -> Older method not recommended)    
console.log(`Hello my name is ${name.toUpperCase()} and I am ${age} years old!`)



//String Methods and Properties
const str3 = new String('Hello')

/*
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
*/


//Major String Functions
const newstr = "Hello Again !"
console.log(newstr.length) //Length of String
console.log(newstr.charAt(0)) //Character at index 0
console.log(newstr.includes("Again")) //Check if substring is present
console.log(newstr.indexOf("l")) //First occurrence of character
console.log(newstr.substring(0,3)) //Substring from index 0, to 3 characters
console.log(newstr.slice(3,6)) //Slice from index 3 to 6


const newstr2 = "     Shyam   Nehra"
console.log(newstr2.trim()) //Trim spaces from start and end
console.log(newstr2.trimEnd()) //Trim spaces from start only


let url = "https://www.youtube.com/watch%20?v"
console.log(url.replace("%20", "-")) //Replace %20 with -
console.log(url.split(".")) //Split string into array of on basis of "."
console.log(url.includes("https")) //Check if substring is present