//how can we store marks of 5 students
let marks_student1 = 97;
let marks_student2 = 98;
let marks_student3 = 99;
let marks_student4 = 100;
let marks_student5 = 96;
//But it will be very inconvenient to store marks of 100 students like this.

//Here for a soln we can create an object
let markings={
    std1: 97,
    std2: 98,
    std3: 99 ,   
    std4: 100,
    std5: 96
}

//But this method too is not too convinient as we have to write the marks of each student manually.

//Here comes the concept of arrays into play 

//array is a collection of elements of same type or different type in which data is stored linearly and accessed using index.

let grades  = [97,98,99,100,96];
console.log(grades);
console.log(grades.length);



//looping over arrays
let heroes = ['superman','batman','spiderman','ironman','thor'];
console.log(heroes[0]);
console.log(heroes[1]);
//but this method is repeatative and not convinient
//here looping comes in

//for loop
for(let index=0;index<heroes.length;index++){
    console.log(heroes[index]);
}

//for of loop
for (let item of heroes){
    console.log(item);
}

let cities=['Kolkata', 'Mumbai', 'Delhi', 'Chennai', 'Bangalore'];
for(let city of cities){
    console.log(city.toUpperCase());
}

//practice question1
//given array of marks of students -> [85,97,44,37,76,60], find the avg of class
let marks = [85,97,44,37,76,60];
let total=0;
let avg;
for(i=0;i<marks.length;i++){
    total= total + marks[i];
    avg=total/marks.length;
}
console.log(avg);
console.log(total);

//alternative
let marks1 = [85,97,44,37,76,60];
let sum=0;
for(let mark of marks1){
    sum+=mark;
}
let avg1 = sum/marks1.length;
console.log("The average of the class is: "+avg1);

//practice question2
/* for a given array with prices of 5 items = [250,645,300,900,50], all items have 10% discount on them. 
 Find the final price after applying offer*/
let prices = [250,645,300,900,50];
let finalPrice=0;
let idx=0;
for (let price of prices){
    price-=price*0.1;
    finalPrice+=price;
}
console.log("The final price after applying offer is: "+finalPrice);




//ARRAY METHODS
//push(): add to end
//pop(): delete from end & return
//toString(): convert array to string, etc......

let foodItems = ["burger","pizza","sandwich","fries","cake"];
console.log(foodItems);
foodItems.push("chips", "icecream", "coke");
console.log(foodItems);
foodItems.pop();
console.log(foodItems);
console.log(foodItems.toString());

//concat(): joins multiple array and returns a new result

let marvel = ["ironman","thor","hulk"];
console.log(marvel);
let dc = ["superman","batman","flash"];
console.log(dc);
console.log(marvel.concat(dc));

//unshift(): add to start
//shift(): delete from start & return

let demo = ["a","b","c","d"];
console.log(demo);
demo.unshift("e");
console.log(demo);
demo.shift();
console.log(demo);

//slice(): returns a part of array
//splice(): add or remove or replace elements from array

console.log(demo.slice(2,3));

let f=[1,2,3,4,5,6];
f.splice(1,2,9,10);
console.log(f);