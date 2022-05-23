import { AlertsService } from 'src/app/Services/alerts.service';
import { EmpService } from 'src/app/firebase/emp.service';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { AddEmployeeComponent } from '../pages/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from '../pages/employee/update-employee/update-employee.component';
import { Employee } from '../data/employee';
import { AuthService } from '../firebase/auth.service';
import { SignupComponent } from '../auth/signup/signup.component';
import { AddMaterielComponent } from '../dialog/add-materiel/add-materiel.component';
import { ListusersComponent } from '../dialog/listusers/listusers.component';
import { UserInfoComponent } from '../dialog/user-info/user-info.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog,
    public eService:EmpService,
    public alert: AlertsService,
    public auth: AuthService
    ) { }

  ListUsersDialog(){
    this.dialog.open(ListusersComponent)
  }
  UserInfoDialog(){
    this.dialog.open(UserInfoComponent)
  }
  AddMaterielDialog(){
    this.dialog.open(AddMaterielComponent)
  }
  SignupDialog(){
    this.dialog.open(SignupComponent)
  }
  AddDialog() {
    this.dialog.open(AddEmployeeComponent)
    }
  UpdateDialog(employee: Employee){
    this.dialog.open(UpdateEmployeeComponent,{data: employee})
  }

}
