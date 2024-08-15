//Using DATE and TIME api in Javascript is itself a painfull thing to do 
//Therefore we will be using "Temporal" api suggested by MDN doc of JS for DATE-TIME related iterations

//Dates and Times
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 5, 12);
console.log(myCreatedDate.toLocaleString());
let myCreatedDate2 = new Date("2024-08-07");
console.log(myCreatedDate2.toLocaleString());

//Time Stamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

console.log(myDate.getMonth());
console.log(myDate.getDay());

let newDate = new Date();
newDate.toLocaleString('default', {
    weekday: "short"
});