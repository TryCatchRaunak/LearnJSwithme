//Here we will be talking about some of the array methods already pre-defined in javascript










//METHOD - 1

//forEach() method
/* arr.forEach(callBackFunction)
CallBackFunction is a function that will be called for each element in the array, a CallBack Function is passed 
as an argument to another function*/

/*arr.forEach((val) => {
    console.log(val);
})*/


//example-1
function abc(){
    console.log("Hello");
}

function myFunc(abc){
    return abc;
}

//example-2
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val){//value at each index
    console.log(val);
});
//or
arr.forEach((val) => {
    console.log(val);
});


//example-3
let city = ["Delhi" , "Mumbai" , "Kolkata" , "Chennai" , "Bangalore" , "Surat"];
city.forEach((val) => {
    console.log(val.toUpperCase());
});

/*Hgher Order Functions/Methods are functions in javascript that either take one function as a parameter
or return a function as output*/



//Practise Question
//For a given array of number, print the square of each number using forEach loop
let array = [23, 43, 21, 87, 9, 34];

array.forEach((val) => {
    console.log(val*val);
});

//or 

let numbers = [23, 45 ,91, 37, 29];
 function square(val){
    console.log(val*val);
 }
 numbers.forEach(square);









//METHOD - 2

//Map function
/*Creates a new array with the results of some operation. The value its callback returns are used to form a 
new array*/

//arr.map(callBackFnx(vale, index, array))

/* let newArr = arr.map((val) => {
    return val*2;
    }); 
    */

let arrk = numbers.map((val) => {
    return val*val;
});

console.log(arrk);









//METHOD - 3

//filter method
/*Creaters a new array of elements that give true for a condition/filter */

/*let newArr = arr.filter((val) => {
    return val%2 === 0;
    }); */

let list = [1,2,3,4,5,6,7,8,9];
let filtered = list.filter((val) => {
    return val%2 === 0;
});
console.log(filtered);
//or
let filtered1 = list.filter((val1) => {
    return val1>3;
});
console.log(filtered1);









//METHOD - 4

//reduce method 
/*Performs some operations and reduces the array to a single value. It returns that single value*/

/* let newArr = arr.reduce((accumulator, currentValue) => {
    //code
    });
    */

let newArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//sum
let addn = newArr.reduce((res, curr) => {
    return res + curr;
});
console.log(addn);
//largest number
let largeNum = newArr.reduce((res, curr) => {
    return res > curr ? res : curr;
});
console.log(largeNum);









//Practice Questions

//Q1. We are given array of marks of students. Filter out the marks of the students that scored 90%+.

let marks = [45,23,68,39,93,82,50,99,100,96,44,91,95,90,30];
let ninetyPlusScorers = marks.filter((val) => {
    return val >= 90;
});
console.log(ninetyPlusScorers);



/*Q2. Take a number n from user as input. Create an array of numbers from 1 to n. Use the reduce method to calculate
sum of all the numbers in the array. Use the reduce method to calculate the product of all the numbers in the array.*/

let n  = parseInt(prompt("ENTER A NUMBER"));
let ar = [];
for(let i=1; i<=n; i++){
    ar[i-1] = i;
}
console.log(ar);
let summation  = ar.reduce((res, curr) => {
    return res + curr;
});
console.log(summation);
let product = ar.reduce((res, curr) => {
    return res*curr;
});
console.log(product);