import { Component,Provider,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    providers: [EmployeeService]
})
export class EmployeeListComponent implements IEmployee {
    code: string;
    name: string;
    gender: string;
    dob: string;
    employees: IEmployee[];
    constructor(private _employeeService: EmployeeService) {
        
    }

    ngOnInit() {
        this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData)
    }
    selectedEmpCountRadioButton: string = 'All';

    onEmpCountRadioButtonChanged(selectedRadioButtonValue: string): void {
        this.selectedEmpCountRadioButton = selectedRadioButtonValue;
    }

    getEmployeeCount(): number {
        return this.employees.length;
    }

    getMaleCount(): number {
        return this.employees.filter(e=>e.gender==='Male').length;
    }

    getFemaleCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    getfilteredEmployees(): any {
        if (true) {

        }
    }
};