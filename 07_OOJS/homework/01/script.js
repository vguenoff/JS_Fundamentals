(function() {
    'use strict';
    class Company {
        constructor(companyName, numOfEmployees) {
            this.companyName = companyName;
            this.numOfEmployees = numOfEmployees;
            this.employeesList = {};
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
        hireEmploee(employeName, position) {
            if(typeof(employeName) === 'string' && employeName[0] === employeName[0].toUpperCase()) {
                this.numOfEmployees++;
                this.employeesList[employeName] = position;
                return `We have a new employe - ${employeName} - our ${this.numOfEmployees}th.`;
            } else {
                throw new Error('Plese enter a valid employe name that starts with upper case.');
            }
        }
        fireEmploee(employeName) {
            if(this.employeesList[employeName] !== undefined) {
                this.numOfEmployees--;
                delete this.employeesList[employeName];
                return `We had to fire one of our employees - ${employeName}.`;
            } else {
                throw new Error(`${employeName} is not one of our employees.`);
            }
        }
        sayHallo(employeName) {
            if(this.employeesList[employeName] !== undefined) {
                return `Hi, I am ${employeName} and I work as ${this.employeesList[employeName]} in ${this.companyName}.`;
            } else {
                throw new Error('No such employe.');
            }
        }
    }

    let westerSoft = new Company('Wester Soft', 2);
    console.log(westerSoft);
    console.log(westerSoft.introduceCompany());
    console.log(westerSoft.hireEmploee('John Snow', 'Lord Commander'));
    console.log(westerSoft.introduceCompany());
    console.log(westerSoft.hireEmploee('Ramsey Snow', 'Warden Of The North'));
    console.log(westerSoft.introduceCompany());
    console.log(westerSoft.employeesList);
    console.log(westerSoft.fireEmploee('Ramsey Snow'));
    console.log(westerSoft.introduceCompany());
    console.log(westerSoft.sayHallo('John Snow'));
    console.log(westerSoft.employeesList);

    let google = new Company('Google', 57000);
    console.log(google);
    console.log(google.introduceCompany());
    console.log(google.hireEmploee('Paul Irish', 'JS Evangelist'));
    console.log(google.introduceCompany());
    console.log(google.sayHallo('Paul Irish'));
    console.log(google);
}());
