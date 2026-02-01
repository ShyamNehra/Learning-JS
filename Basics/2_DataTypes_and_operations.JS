/*
Primitive Data Types in JavaScript:
1. Null
2. Number
3. String
4. Boolean
5. BigInt
6. Undefined
7. Symbol

Non-Primitive Data Types in JavaScript:
1. Object
2. Array
3. Function
*/ 

console.log("Identifyting types of different Data Types in JavaScript:\n");

const Null = null;
const Number = 42;
const String = "Hello";
const Boolean = true;
const BigInt = 123n;
const Undefined = undefined;
const Symbol = 'sym';

const Object = {name: "John", age: 30};
const Array = [1, 2, 3, 4, 5];
const NewFunction = function() { 
    console.log("I am a new function"); 
}


console.log("Type of null-",typeof Null);
console.log("Type of number-",typeof Number);
console.log("Type of string-",typeof String);
console.log("Type of boolean-",typeof Boolean);
console.log("Type of bigint-",typeof BigInt);
console.log("Type of undefined-",typeof Undefined);
console.log("Type of symbol-",typeof Symbol,"\n");
console.log("Type of object-",typeof Object);
console.log("Type of array-",typeof Array);
console.log("Type of function-",typeof NewFunction,"- Actually Function Object","\n");



//Operations

console.log("Look at the following operations and their outputs:");

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(9/2);
console.log(2%2);
console.log(2**4);

//Take a look but these are not used in real time coding
console.log("2"+2);
console.log(2+"2");
console.log(2+2+"2");
console.log("2"+2+2);
