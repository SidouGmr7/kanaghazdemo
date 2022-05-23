import { AlertsService } from './../../../Services/alerts.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../../data/employee';
import { EmpService } from 'src/app/firebase/emp.service';




@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent{

  constructor(public eService: EmpService,@Inject(MAT_DIALOG_DATA) public  data: any,public alert: AlertsService) {
  }

  
   public onUpdateEmloyee(emp: Employee): void {
    this.eService.updateEmloyee(emp)
  }

}
