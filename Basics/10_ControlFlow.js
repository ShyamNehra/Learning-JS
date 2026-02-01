//--------------------comparison operators---------------

//>,  <,  >=,  <=,  !=,  !==,  == (checks value only),  === (checks value + type)



//--------------------Conditional Statements---------------

//if,  else if,  else,  switch case


const loggedIn = true;
const debitCard = true;
//And operator: &&

if (loggedIn && debitCard) {
    console.log("You can make a purchase");
} else if (loggedIn && !debitCard) {
    console.log("You need a debit card to make a purchase");
} else {
    console.log("Please log in to continue");
}



const loggedInGoogle = false;
const loggedInFacebook = true;
//Or operator: ||

if (loggedInGoogle || loggedInFacebook) {
  console.log("You can make a purchase");
} else {
  console.log("Please log in to continue");
}


//Truthy and Falsy values
const UserEmail = "abc@gmail.com"
if (UserEmail) {
    console.log("Email is verified, you can log in");
} else {
    console.log("Please verify your email to log in");
}

//here we didbn't check for any condition, just the presence of value in UserEmail variable, as a non-empty string is considered true(truthy value) in JavaScript.

//Some Falsy values in JavaScript are: 0, -0, "", null, undefined, NaN, false, BigInt(0n)
//Some other truthy values in JavaScript are: "0", " ", 'false', [], {}, function() {}, 




//Switch Case
const key = 2;

switch (key) {
    case 1:
        console.log("Key is 1");
        break;

    case 2:
        console.log("Key is 2");
        break;
    
    default:
        console.log("Key is not 1 or 2");

        break;
}

/*
Control Statements:

continue → skips the current loop iteration and moves to the next one.

return → exits a function immediately

throw → stops execution and raises an error

break → exits loop/switch
*/



//Checking whether an object is empty or not (similar for arrays)
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("The object is empty");
} else {
    console.log("The object is not empty");
}




//Nullish Coalescing Operator (??) - It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

let val;

// val = 10 ?? 20;   //returns 10
// val = null ?? 20;  //returns 20
// val = undefined ?? 30;  //returns 30
val = null ?? 50 ?? 60; //returns 50 because it is the first non-null/undefined value

console.log(val);




//Ternary Operator - It is a shorthand for if-else statement

//condition ? expression1 (if true) : expression2 (if false)

const age = 17;
age >= 18 ? console.log("You can vote") : console.log("You cannot vote");


