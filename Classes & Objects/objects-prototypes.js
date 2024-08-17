//Objects

const Student = {
    fullName: "Raunak Mishra",
    marks: 94.4,
    printMarks: function() {
        console.log("Marks = ", this.marks);
    },
};


const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
};

const karanArjun2 = {
    salary: 40000,
};

const karanArjun3 = {
    salary: 30000,
};

const karanArjun4 = {
    salary: 70000,
};


//prototypes

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;



/*If object and prototype both have functions of same name then object function will be given
priority over prototype function*/
const dean = {
    salary: 100000,
    posters() {
        console.log("Posters are 10");
    }
};

const principal ={
    salary: 150000,
    posters() {
        console.log("Posters are 20");
    }
};

principal.__proto__ = dean;