//--------------------------OBJECT LITERALS IN JAVASCRIPT------------------------------
//Object Creation-------------------------------------

const Youtube = new Object(); //creating an empty object using Object constructor(singleton object)
const youtube = {}; //creating an empty object using object literal syntax(non-singleton object)

let userinfo = {
  name: "Shyam Nehra",
  age: 20,
  hobbies: ["Reading", "Traveling", "Coding"],
  "Educational Qualification": "Pursuing B.Tech",
};
let newobj = Object.create(null); //creating an empty object using Object.create method




//accessing Object Properties-------------------------

//console.log(userinfo.name)         dot notation, not ideal for keys with spaces, so we use bracket notation
// console.log(userinfo["name"]);
// console.log(userinfo["Educational Qualification"]);




//Adding symbol in an object----------------------------

let sym = Symbol("key1");

let userinfo2 = {
  name: "Shyam Nehra",
  age: 20,
  [sym]: "mykey1",
  hobbies: ["Reading", "Traveling", "Coding"],
  "Educational Qualification": "Pursuing B.Tech",
};

// console.log(typeof userinfo2[sym], "-", userinfo2[sym]);




//Object Methods-------------------------------

/*
userinfo2.age = 21;  updating age

Object.freeze(userinfo2);  freezing the object, so no further changes can be made
userinfo2.age = 22;  will not update age

console.log(userinfo2); 
*/




//Object functions-----------------------------

userinfo2.greetings = function () {
  console.log(`Hello ${this.name}, welcome back!`);
};

// console.log(userinfo2.greetings()); //calling the function inside the object



//Nesting can be done inside objects----------------------

const newObj = {
  UserDetails: {
    name: {
      firstName: "Shyam",
      lastName: "Nehra",
    },
    age: 20,
  },
};
// console.log(newObj.UserDetails.name.firstName);



//Merge two or more objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);


// console.log("userinfo keys: ", Object.keys(userinfo))
// console.log("userinfo values: ",Object.values(userinfo))
//This will give keys and values in array, so can use functionality of arrays on this

// console.log("userinfo entries: ",Object.entries(userinfo))
//This will give individual key-value array for each key and its value

// console.log(userinfo.hasOwnProperty('hobbies'))
//We can see whether any object have this property or not




//Some object properties
/*

constructor
: 
ƒ Object()


hasOwnProperty
: 
ƒ hasOwnProperty()


isPrototypeOf
: 
ƒ isPrototypeOf()


propertyIsEnumerable
: 
ƒ propertyIsEnumerable()


toLocaleString
: 
ƒ toLocaleString()


toString
: 
ƒ toString()


valueOf
: 
ƒ valueOf()


__defineGetter__
: 
ƒ __defineGetter__()


__defineSetter__
: 
ƒ __defineSetter__()


__lookupGetter__
: 
ƒ __lookupGetter__()


__lookupSetter__
: 
ƒ __lookupSetter__()


get __proto__
: 
ƒ __proto__()


set __proto__
: 
ƒ __proto__()
*/


//Accessing object instances(destructuring)

const newobject1 = {
  name: "Shyam",
  year: "2nd"
}

console.log(newobject1.name)  //We use this to access a key-value from an object, but if we have to take multiple of them, them this method is not considered, we use:
const {name} = newobject1;
console.log(name);


//here we assigned a new key_name(name_NO1) to 'name' from object 'newobj1' 
const {name: name_NO1} = newobject1;
console.log(name_NO1)