import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { employeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule ],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, employeeTitlePipe, EmployeeCountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
