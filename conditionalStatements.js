//Here we are going to discuss and learn about conditional statements in JavaScript.
/*the syntax of conditional statements in JavaScript is:
if(condition){
    //code to be executed if the condition is true 
}else{
    //code to be executed if the condition is false
}
*/


//if statement

let AGE = 25;
if (AGE >= 18) { console.log("You are eligible to vote"); } 


//if-else statements
if(AGE <= 18){
    console.log("Your are a kid");
}else{
    console.log("You are an adult");
}

//if-else-if statements
let mode="dark";
let color;

if(mode==="light"){
    color="white";
}else if(mode==="dark"){
    color="black";
}else if(mode==="blue"){
    color="light blue";
}else{
    color="grey";   
}

console.log(color);

//Ternary operators

/*syntax --> condition ? true output : false output*/
AGE > 18 ? console.log("you can drive") : console.log("you cannot drive");

/*FOR REFERENCES OF JAVASCRIPT AND KNOWING THIS LANGUAGE IN DEPTH AND UNDERSTANDING IT'S CORE CONCEPTS
WE CAN ALWAYS REFER TO THE OFFICIAL DOCUMENTATION OF JAVASCRIPT WHICH IS AVAILABLE AT **MDN DOCS** */


//switch statements

const expression = "Papayas";

switch(expression){
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Mangoes":
        console.log("Mangoes are $0.50 a pound.");
        break;
    case "Papayas":
        console.log("Papayas are $2.79 a pound.");
        break;
    default:
        console.log("Wrong Choice");
        break;
}


//Practice Question
/*Get user to input a number using prompt ("Enter a number"). Check if the number is a multiple of 5 or not*/

let userInput = prompt("Enter a number");
if(userInput%5===0){
    console.log(userInput + " is a multiple of 5");
}else{
    console.log(userInput + " is not a multiple of 5");
}

/*Write a code which can give the students grade according to the criterion given below:
90-100 : A+
80-89 : A
70-79 : B
60-69 : C
50-59 : D
<50 : F*/

let marks = prompt("Enter the marks of the student");
if(marks>=90 && marks<100){
    console.log("A+");
}else if(marks>=80 && marks<90){
    console.log("A");
}else if(marks>=70 && marks<80){
    console.log("B");
}else if(marks>=60 && marks<70){
    console.log("C");
}else if(marks>=50 && marks<60){
    console.log("D");
}else if(marks<50){
    console.log("F");
}