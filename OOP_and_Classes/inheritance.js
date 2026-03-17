class User {
    constructor(username) {
    this.username = username;
  }

  logMe(){
    console.log(`Username is ${this.username}`)
  }

}

//here we inherited the properties of "User" in "Teacher" and by using "super", we are directly inheriting username from "User" class, it does all work behind the scenes, goes to "user", then its constuctor, then automatically uses 'this', set username and gives us its access in class "Teacher"
class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
  }

  addCourse(){
    console.log(`New course created by ${this.username}`)
  }
}

const User1 = new User ("Shyam");

const Teacher1 = new Teacher("Shyam", "sn@gmail.com", "2132")
Teacher1.addCourse()

//User1.addCourse()
console.log(User1 == Teacher1) 

User1.logMe()
Teacher1.logMe()

console.log(User instanceof Teacher) 
console.log(Teacher instanceof User) 
console.log(Teacher1 instanceof User) 