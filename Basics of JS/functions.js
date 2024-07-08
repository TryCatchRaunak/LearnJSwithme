//Functions are a block of code that can perform a specific task anf can be revoked whenever needed

//some pre-defined functions are for instance - arg.toUpperCase(), arg.push(), arg.splice, etc.....

/*We can also make our own functions which are called User Defined functions with the following syntax---
function frunctionName(){
    //code
}
    
function functionName(parametre1, parametre2, ...){
    //code
}*/

/*method to call function---
functionName();
functionName(parametre1, parametre2, ...);*/




// //function defined
function Raunak(){
    console.log("Hello Raunak");
}
//function called or invoked
Raunak();


// //function defined with parametre
function Mishra(msg){
    console.log(msg);
}
//function called or invoked
Mishra("Hello Mishra");


// //Function to calculate sum of two numbers
function sum(a, b){
    let c = a+b;
    console.log('Sum of '+a+' and '+b+' is '+c);
}
let x= prompt('Enter a number');
let y= prompt('Enter another number');
sum(x, y);


//return statement 
function plus(a, b){
    s = a+b;
    return s;
}
let l = plus(17, 34);
console.log(l);


//Arrow functions -  compact way of writing functions 
//const functionName = (param1, param2, ...) => {code};

const arrowSum = (a, b) => {
    console.log(a + b);
};


const arrowMultiplication = (x, y) => {
    console.log(x * y);
};


//Practice question
/*Create a function using the "function" keyword that takes a String as an argument & returns the
number of vowels in it*/


//normal function
function countVowel(str){
    let c = 0;
    for(i=1; i<=str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            c++;
        }
    }
    console.log("Number of vowels in '" + str + "' are " + c);
}

//another method 
function vc(str) {
    let c =0;
    for(const char of str){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            c++;
        }
    }
    console.log("Number of vowels in '" + str + "' are " + c);
}




//arrow function
const VowelCount = (str) => {
    let c = 0;
    for(i=1; i<=str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            c++;
        }
    }
    console.log("Number of vowels in '" + str + "' are " + c);
}
