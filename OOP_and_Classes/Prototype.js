/*
In JavaScript, objects inherit properties and methods through a prototype chain. When you try to access a property on an object, JavaScript first looks inside that object; if not found, it automatically looks in its prototype, then the prototype’s prototype, and continues until it reaches null. This mechanism allows multiple objects to share common methods (usually defined on a constructor’s prototype), making inheritance memory-efficient and dynamic.
*/

let myName = "Shyam     ";
//Now we want to print this without spaces, we can do this with trim() too, but here's a diff. approach which we can use in diffrent arrays too.
console.log(myName.trueLength);// there is no such property

//--------------creating a new property-----------------

let newObject = {
  name: "Shyam Nehra",
  age: 20,
};

//Creating a new property
Object.prototype.shyam = function () {
  console.log(`Shyam is present in every object`);
};

newObject.shyam();



//Also if we create and add a new property to object, then it will be inherited to all arrays, functions, string, becasue at the end of the dAy, these all are objects or refere to object, but its vice-vers is not true

let newArray = ["Hello", "2", "abc"];

Array.prototype.heyshyam = function () {
  console.log(`Shyam is present in array only`);
};

newArray.heyshyam();
// newObject.heyshyam();     -> this don't have access to the new property heyshyam


//-------------------------Inheritance------------------------------
const User={
    name: "User1",
    email: "user1@india.com",
    batch: "A01"
}

const Teacher={
    name: "Teacher1",
    subject: "Maths"
}

const TAsupport = {
    make_Assignment : "JS assiognment"
}

TAsupport.__proto__ = User
//Access of User is given to TAsupport

console.log(TAsupport.batch)

//--------Modern approach------
Object.setPrototypeOf(TAsupport, User)
//Access of User is given to TAsupport




//Solution to first problem
let newUsername = "ShyamNehra     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length: ${this.trim().length}`);
}
newUsername.trueLength()

"Hello Binod   ".trueLength()


