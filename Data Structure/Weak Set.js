//Weak Set
//Can store object but cannot iterate it 

let weakSet = new WeakSet();
console.log(weakSet);


try{
    weakSet.add(1);
    console.log(weakSet);//gives error - 'inavlid value used in weak set'
}catch{
    var obj = {name: "Tiger", category:"Carnivore Animal"};
    var obj1 = {};
    weakSet.add(obj);
    weakSet.add(obj1);
}


/*In weak set there are only 3 methods- 
1. add()    2. has()    3. delete()  and a constructor.*/