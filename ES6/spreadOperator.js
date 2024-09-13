/* spread operator - ... allows an iterable such as an array or string to be expanded into 
                        separate elements. */

let numbers = [1,2,3,4,5,6,7]

let max = Math.max(...numbers)
let min = Math.min(...numbers)

console.log(max)
console.log(min)



let username = "Raunak Mishra"
let letters = [...username]

console.log(letters)