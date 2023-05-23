'use strict';

let lastId = 1000;
const tax = 0.075;
const arrayEmp = [];


function LessThan500() {
    //generat random numnber less than 500
    return Math.floor((Math.random() * 500) + 1);
}


function MinSalary(level) {
    //return minimum salary
    if (level == "Senior") return 1500;
    else if (level == "MidSenior") return 1000;
    return 500;
}



let Ghazi = {
    id: "1000",
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    image: "",
    salary: 1500,
    uniqueId: function () {
        this.id = lastId++
    },
    RandSalary: function () {
        this.salary = MinSalary(this.level) + LessThan500();

        //calculate the net salary
        this.salary = Math.floor(this.salary - tax * this.salary);
    }
}

let Lana = {
    id: "1001",
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    image: "",
    salary: 1500,
    uniqueId: function () {
        this.id = lastId++
    },
    RandSalary: function () {
        this.salary = MinSalary(this.level) + LessThan500();

        //calculate the net salary
        this.salary = Math.floor(this.salary - tax * this.salary);
    }
}

let Tamara = {
    id: "1002",
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    image: "",
    salary: 1500,
    uniqueId: function () {
        this.id = lastId++
    },
    RandSalary: function () {
        this.salary = MinSalary(this.level) + LessThan500();

        //calculate the net salary
        this.salary = Math.floor(this.salary - tax * this.salary);
    }
}

let Safi = {
    id: "1003",
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    image: "",
    salary: 1000,
    uniqueId: function () {
        this.id = lastId++
    },
    RandSalary: function () {
        this.salary = MinSalary(this.level) + LessThan500();

        //calculate the net salary
        this.salary = Math.floor(this.salary - tax * this.salary);
    }
}

let Omar = {
    id: "1004",
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
    image: "",
    salary: 1500,
    uniqueId: function () {
        this.id = lastId++
    },
    RandSalary: function () {
        this.salary = MinSalary(this.level) + LessThan500();

        //calculate the net salary
        this.salary = Math.floor(this.salary - tax * this.salary);
    }
}

let Rana = {
    id: "1005",
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    image: "",
    salary: 500,
    uniqueId: function () {
        this.id = lastId++
    },
    RandSalary: function () {
        this.salary = MinSalary(this.level) + LessThan500();

        //calculate the net salary
        this.salary = Math.floor(this.salary - tax * this.salary);
    }
}

let Hadi = {
    id: "1006",
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    image: "",
    salary: 1000,
    uniqueId: function () {
        this.id = lastId++
    },
    RandSalary: function () {
        this.salary = MinSalary(this.level) + LessThan500();

        //calculate the net salary
        this.salary = Math.floor(this.salary - tax * this.salary);
    }
}


arrayEmp.push(Ghazi, Lana, Tamara, Safi, Omar, Rana, Hadi);



function randerEmployees(arrEmp) {
    let text = "";

    arrEmp.forEach(emp => {
        emp.uniqueId();
        emp.RandSalary();
        text = text +
        `<p> Employee Name: ${emp.fullName} </p>
        <p> Department: ${emp.department}</p>
          <p> Employee salary: ${emp.salary}</p><br></br>
        `
    });

    return text

}

console.log(arrayEmp)

document.write(randerEmployees(arrayEmp));
