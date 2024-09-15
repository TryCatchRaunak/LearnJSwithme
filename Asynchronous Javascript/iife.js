//IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION

/*IIFE is a function that is executed right after it is created. It is a design pattern which is 
also known as Self-Executing Anonymous Function and contains two major parts. The first is the 
anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents 
accessing variables within the IIFE idiom as well as polluting the global scope.*/



/* (function)() is the format of an IIFE*/

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve()
        }, 2000)
    })
}


(async function(){
    console.log("getting data 1 ...")
    await getData(1)
    console.log("getting data 2 ...")
    await getData(2)
    console.log("getting data 3 ...")
    await getData(3)
})()