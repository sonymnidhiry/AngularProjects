"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 'emp01', name: 'Sony', gender: 'Male', dob: '01/22/1987' },
            { code: 'emp02', name: 'Vidya', gender: 'Female', dob: '01/23/1988' },
            { code: 'emp03', name: 'Rachel', gender: 'Female', dob: '04/22/2017' },
            { code: 'emp04', name: 'Eric', gender: 'Male', dob: '02/17/2020' },
            { code: 'emp05', name: 'Johan', gender: 'Male', dob: '04/17/2015' },
            { code: 'emp06', name: 'Johan', gender: 'Male', dob: '04/17/2015' },
        ];
        this.selectedEmpCountRadioButton = 'All';
    }
    EmployeeListComponent.prototype.onEmpCountRadioButtonChanged = function (selectedRadioButtonValue) {
        this.selectedEmpCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent.prototype.getEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getMaleCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getFemaleCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    EmployeeListComponent.prototype.getfilteredEmployees = function () {
        if (true) {
        }
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html'
        })
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
;
//# sourceMappingURL=employeeList.component.js.map