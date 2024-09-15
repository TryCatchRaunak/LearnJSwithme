//Async function always returns a promise

//async function asyncFunc(){}


async function hello(){
    console.log("Hello")
}


/*await keyword can only be used inside an async function. await pauses the execution of the async function 
and waits for the Promise to be resolved. It then resumes the async function and returns the resolved value.*/


function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data")
            resolve(200)
        },2000)
    })
}

async function getWeatherData(){
    await api()//1st call
    await api()//2nd call
}








//example 

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve()
        }, 2000)
    })
}
async function getAllData() {
    console.log("getting data 1 ...")
    await getData(1)
    console.log("getting data 2 ...")
    await getData(2)
    console.log("getting data 3 ...")
    await getData(3)
}