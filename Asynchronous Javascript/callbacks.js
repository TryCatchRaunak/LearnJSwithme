//synchronous

function sum(a, b){
    console.log(a+b)
}

function calculator(a, b, sumCallBack){
    sumCallBack(a, b)
}

calculator(1, 2, sum)





//asynchronous
const hello = () => {
    console.log("Hello")
}

setTimeout(hello, 3000)






//Callback hell

/*Nested callbacks stacked below one another forming a pyramid like structure called 
Pyramid of Doom

This style of programming becomes difficult to understand and manage*/

// function getData(dataId){
// setTimeout(() => {
//     console.log("data", dataId)
// }, 2000)
// }

// getData(123)


function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId)
        if(getNextData){
            getNextData()
        }
    }, 2000)
}


//Callback hell
getData(123, () => {
    getData(456, () => {
        getData(789, () => {
            getData(101112)
        })
    })
})



//To solve the issue of Callback hell, we use the concept of Promises