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








//PRACTICE QUESTIONS

/*Q.1. You are creating a website for your college. Create a class USER with two properties name and email.
It also has a method called viewData() that allows user to view website data.*/
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(this.name);
        console.log(this.email);
    }
}

let user1 = new User("Raunak Mishra", "raunakm725@gmail.com");
let user2 = new User("Rohit Verma", "rohitverma@gmail.com");
let user3 = new User("Priya Yadav", "priyayadav@gmail.com");
let user4 = new User("Rakesh Dvivedi", "rakhesdvivedi@yahoomail.com");



/*Q.2. Create a new class called ADMIN which inherits from USER. Add a new method called editData() to ADMIN that allows
it to edit website Data.*/
class Admin extends User{
    constructor(name, email){
        super(name, email);
    }

    editData(){
        console.log("Add some changes");
    }
}

let admin1 = new Admin("Pankaj Tripathi", "pankajtripathi@gmail.com");