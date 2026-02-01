// let, const are block scoped while var is global scoped

let a = 300;
var b = 500;
const c = 333;
{
  let a = 999;
  var b = 432;
  const c = 908;
  console.log("Inner a: ", a);
  console.log("Inner b: ", b);
  console.log("Inner c: ", c);
}
console.log("Outer a: ", a);
console.log("Outer b: ", b);
console.log("Outer c: ", c, "\n");

//In case of nested function, child function can use values from parent's functions, but can't access values outside a block

function one() {
  const yourname = "Narendra";

  function two() {
    const yourprivatename = "Nandu";
    console.log(yourname);
    console.log(yourprivatename, "\n");
  }

  //console.log(yourprivatename) // it can't be accessed outside 'two'
  two();
}

one();


//another example
if (true) {
    const username = "Shyam"
    if(username === "Shyam"){
        const message = "Welcome!"
        console.log(message + username)
    }
    // console.log(message) - can't be accessed outside block
}
// console.log(username) - can't be accessed outside block
