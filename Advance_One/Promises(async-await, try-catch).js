/*
Promise: The promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value. (Task queue m lag gya hai par abhi complete nhi hoga.)

    It have three states: 
    1. pending
    2. fulfilled
    3. rejected 
*/

//promise creation(it's like an object)
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, networks
  setTimeout(function () {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

//'then' is related to 'resolve', and we have to connect it to promise using resolve as a method - resolve(). Also values are returned in 'then'.
promiseOne.then(function () {
  console.log("Promise consumed");
});




new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});




const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Shyam", email: "shyam@abc.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
  console.log(user.email);
});




const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false
    if (error == true){
        resolve({username: "shyam", password: "123"});
    }
    else{
        reject('Error: Something went wrong')
    }
  }, 1000);
});
promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("Promise is either resolved or rejected!") 
})


//async-await don't handle error
/*
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
    if (error == !true){
        resolve({username: "Javascript", password: "123"});
    }
    else{
        reject('Error: JS went wrong')
    }
    },1000)
})

async function ConsumePromiseFive(){
    const responseFive = await promiseFive;
    console.log(responseFive)
}

ConsumePromiseFive()
*/

//To handle the error part in async-await, we use try-catch 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
    if (error == !true){
        resolve({username: "Javascript", password: "123"});
    }
    else{
        reject('Error: JS went wrong')
    }
    },1000)
})

async function ConsumePromiseFive(){
    try {
        const responseFive = await promiseFive;
    console.log(responseFive)
    } catch (error) {
        console.log(error)
    }
}

ConsumePromiseFive()




//Example
// async function getAllUsers(){
    
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()    //response also takes time that's why we have to wait for this too
//         console.log(data)

//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers()


// same example in then-catch form
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}) //next 'then' will be executed only after execution of the earlier one
.then((data)=>{
    console.log(data)
})
.catch(()=>{
    console.log(error)
})

//fetch is a network based request

//If got error 404 from a fetch promise, we will get it as a response not in resolve or reject

//for fetch, there is a seperate execution queue k/n as MICRO TASK QUEUE/ PRIORITY QUEUE which executes before the tasks in TASK QUEUE

//fetch's working is divided into two parts:  1.Data - it reserves space in memory, it have two array - OnFulfilled[](think as resolve) and OnRejection[](think as reject), which are private and can't be accessed                    2. Web browser/Node - sends network request(resourse given by browser or Node envirnoment), from here we'll get a response and will be sent to OnFulfilled[] otherwise to OnRejection[],  





const headers = {
    name: "Shyam",
    age: '20'
}
fetch('https://jsonplaceholder.typicode.com/users', {headers});

