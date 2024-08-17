//Set
//It contains only unique values
//Object Constructor


let myArr = [1,2,3,4];
let obj = new Set(myArr);
console.log(obj);
obj.add(5);
console.log(obj);
obj.add(5);
console.log(obj);//the set remains the same as it contains only unique values
obj.add(6);
console.log(obj);
obj.delete(6);
console.log(obj);

const obj1 = {
    name: "Raunak",
    age: 19,
};

obj.add(obj1);//Objects can also be added within a set
console.log(obj);

// obj.clear();
// console.log(obj);

console.log(obj.has(4));
console.log(obj.has(9));