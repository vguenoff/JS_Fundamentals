(function() {
    'use strict';
    class Company {
        constructor(companyName, numOfEmployees) {
            this.companyName = companyName;
            this.numOfEmployees = numOfEmployees;
            this.employeesList = [];
        }
        get companyName() {
            return this._companyName;
        }
        set companyName(value) {
            if(typeof(value) === 'string' && value[0] === value[0].toUpperCase()) {
                this._companyName = value;
            } else {
                throw new Error('Plese enter a valid company name that starts with upper case.');
            }
        }
        get numOfEmployees() {
            return this._numOfEmployees;
        }
        set numOfEmployees(value) {
            if (typeof(value) != 'number') {
                throw new Error(`${value} is not a number`);
            }
            this._numOfEmployees = value;   
        }
        introduceCompany() {
            return `We're "${this.companyName}", a company with ${this.numOfEmployees} employees.`;
        }
        listCompanyEmployees() {
            return `Our newest employees are ${this.employeesList}`; // this returns Our newest employees are [object Object]. How could I print correctly the actual content of the array?
        }
        hireEmploee(employee) {
            if(employee !== undefined) {
                this.numOfEmployees++;
                this.employeesList.push(employee);
                return `We have a new employe - ${employee.employeeName} - our ${this.numOfEmployees}th.`;
            } else {
                throw new Error('Plese hire an existing employee.');
            }
        }
        fireEmploee(employee) {
            if(this.employeesList.indexOf(employee) > -1) {
                this.numOfEmployees--;
                this.employeesList.pop(employee);
                return `We had to fire one of our employees - ${employee.employeeName}.`;
            } else {
                throw new Error(`${employee.employeeName} is not one of our employees.`);
            }
        }
    }
    class Employee {
        constructor(employeeName, position) {
            this.employeeName = employeeName;
            this.position = position;
        }
        get employeeName() {
            return this._employeeName;
        }
        set employeeName(value) {
            if(typeof(value) === 'string' && value[0] === value[0].toUpperCase()) {
                this._employeeName = value;
            } else {
                throw new Error('Plese enter a valid company name that starts with upper case.');
            }
        }
        get position() {
            return this._position;
        }
        set position(value) {
            this._position = value;
        }
        sayHallo() {
            return `Hi, I am ${this.employeeName} and I work as ${this.position}.`;
        }
    }

    let westerSoft = new Company('Wester Soft', 2);
    console.log(westerSoft);
    console.log(westerSoft.introduceCompany());

    let johnSnow = new Employee('John Snow', 'Lord Commander');
    console.log(
        westerSoft.hireEmploee(johnSnow)
    );
    
    console.log(westerSoft.introduceCompany());
    console.log(westerSoft.listCompanyEmployees());
    console.log(johnSnow.sayHallo());

    let ramseySnow = new Employee('Ramsey Snow', 'Warden Of The North');
    console.log(
        westerSoft.hireEmploee(ramseySnow)
    );
    
    console.log(westerSoft.introduceCompany());
    console.log(westerSoft.listCompanyEmployees());
    console.log(ramseySnow.sayHallo());

    console.log(
        westerSoft.fireEmploee(ramseySnow)
    );

    console.log(westerSoft.introduceCompany());
    console.log(westerSoft.listCompanyEmployees());

    let google = new Company('Google', 57000);
    console.log(google.introduceCompany());

    let paulIrish = new Employee('Paul Irish', 'JS Evangelist');
    console.log(
        google.hireEmploee(paulIrish)
    );
    console.log(
        paulIrish.sayHallo()
    );

    console.log(google);
}());