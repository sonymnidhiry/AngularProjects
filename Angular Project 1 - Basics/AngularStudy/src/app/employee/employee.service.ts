import { IEmployee } from "./employee";
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService implements IEmployee {
    code: string;
    name: string;
    gender: string;
    dob: string;

    constructor(private _http: Http) { }
    getEmployees(): Observable<IEmployee[]> {
        return this._http.get('https://localhost:44333/api/employee').map((response: Response) => <IEmployee[]>response.json());
    }
}