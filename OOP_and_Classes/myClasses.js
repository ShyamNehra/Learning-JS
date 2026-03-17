class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const User1 = new User("Shyam", "abc@gmail.com", "2143");

console.log(User1.encryptPassword());
console.log(User1.changeUsername());




//If Class was not present than how would we have done that.

function Userx(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
};

Userx.prototype.encryptPassword = function encryptPassword(){
    return `${this.password}abc`
}
Userx.prototype.changeUsername = function changeUsername(){
    return `${this.username.toUpperCase()}`
}

const User2 = new Userx("Shyam", "abc@gmail.com", "2143");

console.log(User2.encryptPassword());
console.log(User2.changeUsername());
