/*The setTimeout function in JavaScript is a global function that allows you to execute a block of code after a 
specified delay, measured in milliseconds. It is a non-blocking function, meaning that it does not pause the 
execution of the surrounding code.
*/

setTimeout(() => {
  console.log('Hacking Wifi...Please Wait...')
}, 1000)



/*try-catch block is used to handle error in javascript by trying a code and if it fails then catch block is executed 
which keeps the remaining code running by printing user desired message in the console or do any task according to user*/
try{
   console.log(rahul) 
}
catch(err){
    console.log(err)
}


setTimeout(() => {
  console.log('Fetching Username and Password...Please Wait...')
}, 2000)

setTimeout(() => {
  console.log("Hacking Rahul's Facebook ID...Please Wait...")
}, 3000)

setTimeout(() => {
  console.log('UserID and Password of Rahul fetched...Please Wait...')
}, 4000)





try {
    console.log(raunak)
    throw new ReferenceError("Raunak is not good")
} catch (error) {
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
}


/*throw statement - The throw statement allows you to create a custom error. 
Technically you can throw an exception (throw an error).*/
try {
    let age = prompt("Enter your age: ")
    age = Number.parseInt(age)
    if(age > 120){
        throw new ReferenceError("This is probably not true")
    }
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
console.log("This script is still running")





try {
  let a = 0;
  console.log(program)
  console.log("Program ran successfully")
} catch (error) {
  console.log("This is an error")
}

/*finally block - The finally block lets you execute code, after try and catch, regardless of the result.*/
finally{
  console.log("I am a good boy")
}

//finally is used because it can execute code even if there is an error in the catch block
try {
  console.log(maskman)
} catch (error) {
  throw  ReferenceError("This is an error")
}
finally{
  console.log("This will definitely run")
}