//CLASS IS A PROGRAM CODE TEMPLATE FOR CREATING OBJECTS

class ToyotaCar{
    start(){
        console.log("Engine Started");
    }

    stop(){
        console.log("Engine Stopped");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("Toyota");
let lexus = new ToyotaCar();
lexus.setBrand("Toyota");




//Constructor
class Food{
    constructor(name, price){
        console.log("creating new object");
        this.name = name;
        this.price = price;
    }
}

let biriyani = new Food("Chawal", 350);
console.log(biriyani);
let chicken = new Food("Meat", 200);
console.log(chicken);   




//Inheritance
// class Parent{
//     //code
// }

// class Child extends Parent{
//     //code
// }


class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{

}

let obj = new Child();




class Person{
    constructor(){
        this.species = "Homo Sapiens";
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    constructor(branch){
        super();//invokes parent class constructor
        this.branch = branch;
    }
    makeMachines(){
        console.log("Engineer can make machines");
    }
}

let raunak = new Engineer();
/*If we have same fucntion in both parent and child class then the child class function will be called[METHOD OVERRIDING]*/
