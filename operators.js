//basic operations carried by variables

let a = 23.5;
let b = 43.7;

//Binary Operators 

//addition
console.log("a + b ", a+b);
//substraction
console.log("b - a ",b-a);
//multiplication
console.log("a*b ",a*b);
//division
console.log("b/a ",b/a);
//modulus
console.log("b%a ",b%a);
//exponential
console.log("a**b ",a**b);

//Unary Operators

//postfix increment
console.log("a++ ",a++);
//postfix decrement
console.log("b-- ",b--);
//prefix increment
console.log("++a ",++a);
//prefix decrement
console.log("--b ",--b);

//assignment operators

//'=' is the assignment operator most commonly used
let zee = 44;//here = is the assignment operator
console.log("zee is assigned the value of '44' using the = assignment operator: zee =",zee);
//'+=' operator
let plus=9;
console.log("The initial value of 'plus' is ",plus);
plus+=10;
console.log("The value of 'plus' after using the += operator is ",plus);
//'-=' operator
let minus=20;
console.log("The initial value of 'minus' is ",minus);
minus-=15;
console.log("The valueof 'minus' after using the '-=' operator is ",minus);
//'*=' operator
let multiply=5;
console.log("The initial value of 'multiply' is ",multiply);
multiply*=3;
console.log("The value of 'multiply' after using the '*=' operator is ",multiply);
//'/=' operator
let divide=50;
console.log("The initial value of 'divide' is ",divide);
divide/=5;
console.log("The value of 'divide' after using the '/=' operator is ",divide);
//'%=' operator
let modulus=10;
console.log("The initial value of 'modulus' is ",modulus);
modulus%=3;
console.log("The value of 'modulus' after using the '%=' operator is ",modulus);
//**= operator
let exponential=2;
console.log("The initial value of 'exponential' is ",exponential);
exponential**=5;
console.log("The value of 'exponential' after using the '**=' operator is ",exponential);

//comparison operators

//'==' operator which check for equality
let f=6;
let g=6;
console.log('f==g -> 6==6 ? ',f==g);//---> returns true
//'!=' operator which check for inequality
let h=9;
let i=9;
console.log('h!=i -> 9!=9 ? ',h!=i);//---> returns false
//'===' operator which check for strict equality(check even for dataType equality of elements)
let p=10;
let q='10';
console.log('p===q -> 10===10 ? ',p===q);//---> returns false
//'!==' operator which check for strict inequality(check even for dataType inequality of elements)
let r=11;
let s='11';
console.log('r!==s -> 11!==11 ? ',r!==s);//---> returns true
//'>' operator which check for greater than 
let w=12;
let wi=13;
console.log('w>wi -> 12>13 ? ',w>wi);//---> returns false
//'<' operator which check for lesser than
let po=11;
let poi=12;
console.log('po<poi -> 11<12 ? ',po<poi);//---> returns true
//'>=' operator which check for greater than or equal to
let j=15;
let k=15;
console.log('j>=k -> 15>=15 ? ',j>=k);//---> returns true
//'<=' operator which check for lesser than or equal to
let l=16;
let m=17;
console.log('l<=m -> 16<=17 ? ',l<=m);//---> returns true

//logical operators

//'&&' operator which is the logical AND operator
let t=true;//NOTE::::---we can use any condition other than direct boolean variables
let u=false;
console.log('t && u -> true && false ? ',t && u);//---> returns false because both conditions are not true and in && operator both conditions needs to be true for the outcome to be true
//'||' operator which is the logical OR operator
let v=true;
let n=false;
console.log('v || n -> true || false ? ',v || n);//---> returns true because one of the conditions is true and in || operator only one condition needs to be true for the outcome to be true
//'!' operator which is the logical NOT operator
let o=true;
console.log('!o -> !true ? ',!o);//---> returns false because the condition is true and the ! operator negates the condition