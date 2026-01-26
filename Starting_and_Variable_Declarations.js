console.log("Hi! Welcome Back to JavaScript! We'll start with variable declarations using var, let and const.\n");

console.log("Using let: ");
let a = 10;
{
    let a = 20;
    console.log(a);
}
   console.log(a);
   //let is block scoped. So the value of a remains unchanged outside the block.


console.log("Using var: ");
   var b = 10;
{
    var b = 20;
    console.log(b);
}
   console.log(b);
   //var is not block scoped. So the value of b is changed globally.


console.log("Using const: ");
   const c = 10;
{
    const c = 20;
    console.log(c);
}
   console.log(c, "\n");
    //const used for constant values. It is also block scoped like let.




abcID = 3213;
console.log(abcID,"is -", typeof(abcID));

xyzID = "abcd";
console.log(xyzID,"is -", typeof(xyzID), "\n");
//Implicit declaration of variable without var, let or const. It becomes a global variable.



//Creating a console table with Given Data
console.log("Creating a console table with Given Data:");
console.table([a, b, c, abcID, xyzID]);

