﻿import { IEmployee } from "./employee";
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService implements IEmployee {
    code: string;
    name: string;
    gender: string;
    dob: string;
    getEmployees(): IEmployee[] {
        return [
            { code: 'emp01', name: 'Sony', gender: 'Male', dob: '01/22/1987' },
            { code: 'emp02', name: 'Vidya', gender: 'Female', dob: '01/23/1988' },
            { code: 'emp03', name: 'Rachel', gender: 'Female', dob: '04/22/2017' },
            { code: 'emp04', name: 'Eric', gender: 'Male', dob: '02/17/2020' },
            { code: 'emp05', name: 'Johan', gender: 'Male', dob: '04/17/2015' },
            { code: 'emp06', name: 'Johan', gender: 'Male', dob: '04/17/2015' },
        ]
    }
}