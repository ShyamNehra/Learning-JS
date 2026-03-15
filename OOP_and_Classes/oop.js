//Object Literal is an Object only
const user = {
    username: "Shyam",
    loginCount: 9,
    isLoggedIn: true,

    getUserDetails: function(){
        // console.log("Got User Details")
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())



//'this' referes to current context

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}
const userOne = new User("Shyam", 9, false);
const userTwo = new User("Putin", 10, true);
//we have used 'new' keyword because
console.log(userOne)
console.log(userTwo)

console.log(userOne instanceof User)
console.log(userTwo instanceof Object)
console.log(user instanceof Object)

//1. 'new' creates a new Object/instance
//2. constructor function is called, and packs arguments
//3. arguments are injected using 'this'
//4. we get the values in function