//Basic function of addition-----

/*
function newFunction(a,b){
    console.log(a+b);
}
newFunction(6,8)        this is common, but we never returned the sum of a and b, so it will never be stored
*/

function newFunction(a, b) {
  return a + b;
}

let result = newFunction(4, 7);
console.log("Sum: ", result);




function UserLoginMessage(username = "Default username") {    
  if (!username) {
    console.log("Enter a username ");
    return;
  }
  return `${username} just logged in`;
}
console.log(UserLoginMessage());      
//if no value is passed, it will not be null, it will be undefined
//if we didn't pass any argument to the function, it will by defalut use 'Default username' as inplace of 'username'




//When we have unknown number of parameters to be given to a function like in cart while shopping

function calculateCartValue(...price){
    return price
}
console.log(calculateCartValue(200, 546, 499, 2000))

//This will return an array of these values, later we can apply loops to calculate what's required




//Passing object in a function
const newobj = {
    name: "Shyam",
    age: "20"
}
function handleObject(anyObject){
    console.log(`${anyObject.name} just logged in. His age id ${anyObject.age} `);
}
handleObject(newobj);  



/* or
function handleObject(anyObject){
    console.log(`${anyObject.name} just logged in. His age id ${anyObject.age} `);
}

handleObject({
    name: "Shyam",
    age: "22"
})*/




//Using array with funtions

const arr = [1200, 4300, 3200, 5432]

function Getarray(anyArray){
    return anyArray[3]
}
console.log(Getarray(arr), "\n")


//or
/*
function Getarray(anyArray){
    return anyArray[3]
}
console.log(Getarray([1200, 4300, 3200, 5432]))
*/









//--------------------------Interesting-------------------------

console.log(PlusOne(6))
function PlusOne(num){
    return num + 1
}

//This is hoisting (calling/using a function before defining it)

//But if we store a function in a variable, then hoisting can't be done\

// console.log(PlusTwo(6)) - not possible
const PlusTwo = function(num2){
    return num2 + 2
}
console.log(PlusTwo(6))
