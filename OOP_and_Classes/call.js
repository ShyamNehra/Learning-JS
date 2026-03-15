function setUsername(username){
    this.username = username;
    console.log("called")
}

function createUser(username, email, age){
    setUsername.call(this, username)
    this.email = email;
    this.age = age;
}

const user1 = new createUser("Shyam", "sn@gmail.com", 21);
console.log(user1)

//call is used to hold the execution context of 'setUsername', bcoz without this as soon as 'setUsername' is executed, its context is removed from the global execution context.

//Also 'setUsername.call(this, username)'  the 'this' here keyword tells setUsername to use 'this' of 'createUser'
