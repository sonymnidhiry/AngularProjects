import { Component } from '@angular/core';


@Component({
    selector: 'my-employee',
    templateUrl:'app/employee/employee.component.html',
})
export class EmployeeComponent {
    firstName: string = 'Sony';
    lastName: string = 'Nidhiry';
    gender: string = 'Male';
    age: number = 33;
    columnSpan: number = 2;

    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }

    
    name: string = 'Sony';
}