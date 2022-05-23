import { EmpService } from './../../../firebase/emp.service';
import { AlertsService } from './../../../Services/alerts.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../data/employee';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent{


  constructor(public eService: EmpService ,public alert: AlertsService) { }


  public onAddEmloyee(emp: Employee): void {
    this.eService.addEmployee(emp)
  }
  

}
