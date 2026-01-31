//'This' keyword is used to refer to the current context

const user  = {
    name: "Shyam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name}, Welcome to the page! \n`)   //here with the help of 'this', we are targeting the 'name' key inside 'user' Object
        // console.log(this) //this will print what 'this' keyword holds
    }
}

user.welcomeMessage();

//Now updating the a key value of the object
user.name = "Nandu"
user.welcomeMessage();

console.log(this, "\n") //here 'this' keyword son't hold any value

//We can't use 'this' keyword in a function or even can't use in an arrow function



//------------------------------Arrow Function-----------------------------

// const ArrowFxn = (num1, num2) => {
//     return num1+num2
// }

// const ArrowFxn = (num1, num2) => num1+num2
// const ArrowFxn = (num1, num2) => (num1+num2)

//If we use paranthesis instead of curly braces, we need not to type 'return' explixitly (like we did in ArrowFxn2 and ArrowFxn3), this also helps us when we need to return an object, without using 'return' explictly

// const ArrowFxn4 = (num1, num2) => {username: "Shyam"}
const ArrowFxn = (num1, num2) => ({username: "Shyam"})

console.log(ArrowFxn(3,4), "\n");






//------------------------------IIFE(Immediately Invoked Function Expressions)--------------------------------

// To deal with the pollution of globally scoped variables or declarations, we use IIFE, it is a way in which a function immediately gets executed

(function iifeFxn(){
    //named IIFE
    console.log(`Hello`)
})();


((name) => {
    console.log(`Hello ${name}`)
})("Shyam");
    



