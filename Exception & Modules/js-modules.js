//This is the way to implement modules in node.js

// const hello = require('./module1')
// hello.hello()
// hello.Ahello('Raunak')
// hello.Ahello('Roshni')
// hello.Ahello('Nikita')

//But this method increases lines of code 
//So we can use destructuring to reduce the lines of code

/*What is destructuring?*/
/*Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties 
from objects, into distinct variables.*/

// const {hello , Ahello} = require('./module1')

import raunak, { hello, Ahello } from "./module2.js"
hello()
Ahello('Raunak')
Ahello('Roshni')
Ahello('Nikita')
raunak()