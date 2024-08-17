//Map -> Data is stored in the form of key and value form 
let myMap = new Map([["a1","Ajay"],["a2","Vikash"]]);
console.log(myMap);
myMap.set("a2","Rahul");
console.log(myMap);//here duplicate elements are overwritten

myMap.delete("a2");
console.log(myMap.get("a1"));

for(let [key, value] of myMap){
    console.log(`keys ${key} , value ${value}`);
}

myMap.forEach((key, value) => {
    console.log(key , value);
});