//PRIMITIVE - Number, String, Boolean, Undefined, Null, BigInt, Symbol

//numerical data-type
let umar = 18;
console.log(umar);

//float data-type
let price = 100.05;
console.log(price);

//string data-type
let company = "OverClap Solutions";
console.log(company);

//Boolean data-type
let isFollow = false;
console.log(isFollow);

//Un-defined data-type
let x;
console.log(x);

//null data-type
let R = null;
console.log(y);

//BigInt data-type
let pub = BigInt("1536718243125");
console.log(pub);

//symbol data-type
let G=Symbol("Hi How Are You ?");
console.log(G);



//NON-PRIMITIVE - Object, Array, Function

//Object is a collection of values
// const object = { key : value , key1 : value1 , key2 : value2 , . . . . . . . . , keyn : valuen};

const Student = {
    studentName : "Jyotiraditya Nath",
    boyesh: 19,
    stream : "ECE",
    cgpa : 8.4,
    isPass : true,
};
console.log(Student.cgpa);
Student.boyesh++;
console.log(Student.boyesh);