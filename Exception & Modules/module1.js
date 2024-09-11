/*There are two types of modules in javascript*/

//module 1 - common js 

const hello = () => {
    console.log("Hello World!!");
}

// module.exports = hello;

const Ahello = (name) => {
    console.log("Hello " + name)
}

module.exports = {hello , Ahello};