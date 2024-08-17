//Weak Map
//Can store but cannot iterate it
let weakmap = new WeakMap();
console.log(weakmap);


try{
    weakmap.add(1);
    console.log(weakmap);//gives error - 'inavlid value used in weak map'
}catch{
    var obj1 = {color: "white", price:100};
    var obj2 = {color: "black", price:200};
    weakmap.set(obj1, 1);
    weakmap.set(obj2, 2);
    console.log(weakmap);
}