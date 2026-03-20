class User {
    constructor(username) {
    this.username = username;
  }

  logMe(){
    console.log(`Username: ${this.username}`)
  }

   static createID(){
    return `123`
   }
}
//Static prevents that particular function from being openly accessed by all

const Shyam = new User ("Shyam")
// console.log(Shyam.createID())                we used "static" so now "createID" is not accessible

class Teacher extends User{
    constructor(username, email) {
    super(username)
    this.email = email;
  }
}

const JD = new Teacher("Jagdev", "jd@gmail.com")
JD.logMe()
console.log(JD.createID())