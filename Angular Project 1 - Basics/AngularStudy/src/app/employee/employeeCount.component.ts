import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
})
export class EmployeeCountComponent {

    selectedRadioButtonValue: string = 'All';

    @Output()
    coutRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonSelectionChanged(): void{
        this.coutRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
}

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;
}