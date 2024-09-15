// /* Promise is for "eventual" completion of tasks. It is an object in JS.
// It is a solution to callback hell. It is a placeholder for a value that will be available in the future.*/

// //let promise = new Promise((resolve, reject) => {...})

// //resolve and reject are two callbacks provided by JS

let promise1 = new Promise((resolve, reject) => {
    console.log("I am a Promiser")
    // resolve(567)
    reject("Error occurred")
})

/*There are 3 states of a promise:
1. Pending: Initial state, neither fulfilled nor rejected
2. Fulfilled: Meaning that the operation completed successfully
3. Rejected: Meaning that the operation failed*/

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("success")
            // reject("Error occurred")
            if(getNextData){
                getNextData()
            }
        },5000)
    })
}

// //Using promises

// /* For using promises we have two functions .then() and .catch()*/

// /* When the promise is fulfilled, the .then() function is called. It takes a callback function as an argument.*/
// /* When the promise is rejected, the .catch() function is called. It also takes a callback function as an argument.*/

// /* promise.then((res) => {...})*/
// /* promise.catch((err) => {...})*/

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise")
        resolve("success")
        // reject("error")
    })
}

let promise = getPromise()
promise.then((res) => {
    console.log("Promise fulfilled", res)
})

promise.catch((err) => {
    console.log("Promise rejected", err)
})

// Promise chaining 

// Let's take a asynchronous function

function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1")
            resolve("success")
        }, 4000)
    })
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2")
            resolve("success")
        }, 6000)
    })
}

console.log("Fetching Data1 . . . .")
let p1 = asyncFunc1()
p1.then((res) => {
    console.log(res)
})

console.log("Fetching Data2 . . . .")
let p2 = asyncFunc2()
p1.then((res1) => {
    console.log(res1)
})

// callback hell with promise chaining
function getData (dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data', dataId)
      resolve('success')
    }, 5000)
  })
}

// //Callback hell
// getData(123, () => {
//     getData(456, () => {
//         getData(789, () => {
//             getData(101112)
//         })
//     })
// })

// Instead of this pyramid of doom we use promise chaining . let's see how!!

getData(1).then((res2) => {
    console.log(res2)
    getData(23).then((res3) => {
        console.log("Raunak")
    })
})

// a better way of writing promise chaining 
getData(12).then((res4) => {
  return getData(2334)
}).then((res5) => {
  return getData(34)
}).then((res) => {
    console.log(res)
})
