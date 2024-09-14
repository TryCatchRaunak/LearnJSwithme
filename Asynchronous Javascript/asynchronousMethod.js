//Asynchronous Method


/*Asynchronous method of coding in javascript refers to the method where the code does not wait 
for the completion of a particular task to move on to the next task. This is done to prevent the 
blocking of the code execution. This is done by using the setTimeout() method in javascript. 
The setTimeout() method is used to execute a function after a specified amount of time. 
The setTimeout() method takes two parameters, the first parameter is the function that needs 
to be executed and the second parameter is the time in milliseconds after which the function 
needs to be executed.*/ 

console.log("one")
console.log("two")

setTimeout(() => {
    console.log("Hello World")
}, 5000)


//these statements does not wait for setTimeout() to complete since they are not defined inside it 
console.log("three")
console.log("four")