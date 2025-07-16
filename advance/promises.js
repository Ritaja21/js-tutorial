/*  A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous 
  action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately 
  returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. -->

  A Promise is in one of these states:
 pending: initial state, neither fulfilled nor rejected.
 fulfilled: meaning that the operation was completed successfully.
 rejected: meaning that the operation failed. 

 Promise is an object represents the eventual completion or failure of an 
 asynchronous operation.*/

const promiseOne = new Promise(function (resolve, reject) {
    //Do async task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()  // this checks that the task given as a promise is done 
    }, 1000)
}) // this promise object is recently used in es6

promiseOne.then(function () { // as the promised task is done so this function runs
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () { // without using a variable we can directly call .then
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Ritaja21", email: "ritajatarafder@gmail.com" })
    }, 1000)
})

//accessing data from the promise function 
promiseThree.then(function (user) {
    console.log("user logged in");
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'Ritaja', password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected"); //this will always return once the promise is done 
    })

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'javascript', password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//second approach for accepting promise using async await but there is no way  to  handle catch mainly used in cases where we dont want to move forward if this task is not done
async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive()//in this case we will not get any error 
//if error -> true then function will not run if error -> false then it will run
//this is one problem with async await approach

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }// now error will be handled

}


//syntax of fetch using async await function 
async function getAllUsers() {
    try {
        const response = await fetch('/')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);

    }
}

getAllUsers()

//suntax of fetch using then and catch function
fetch('/')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);

    })