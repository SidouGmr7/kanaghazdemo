import { DialogService } from './../../Services/dialog.service';
import { AlertsService } from './../../Services/alerts.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../data/employee';
import { EmpService } from 'src/app/firebase/emp.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  

  employees: Employee[] = [];

  constructor(public eService: EmpService ,public dialog: DialogService,public alert: AlertsService) { }

  ngOnInit(): void { 
    this.displayemployees();
  }
 
  displayemployees(){
    this.eService.getEmployees().subscribe(emp =>{
      this.employees = emp;
    })
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
     this.displayemployees()
    }
  }
}
