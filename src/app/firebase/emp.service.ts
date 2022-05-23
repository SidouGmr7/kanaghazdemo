import { AlertsService } from 'src/app/Services/alerts.service';
import { Employee } from '../data/employee';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmpService {


  emp!: Observable<Employee[]> ;
  constructor(
    public Fireservices: AngularFirestore,
    public alert: AlertsService
    ) { 
  }
  
  
  getEmployees(){
    this.emp = this.Fireservices.collection('Employee').snapshotChanges().pipe(map(changrs =>{
      return changrs.map(a => {
        const data = a.payload.doc.data() as Employee;
        data.id = a.payload.doc.id;
        return data;
      })
    })) as unknown as Observable<Employee[]>;
    return  this.emp;
  }
  addEmployee(emp: Employee){
    return this.Fireservices.collection('Employee').add(emp).then(()=>{
      this.alert.success(`employer ${emp.name} wes adding`)
    })
   }
   updateEmloyee(emp: Employee){
    this.Fireservices.doc(`Employee/${emp.id}`).update(emp).then(()=>{
      this.alert.success(`information of ${emp.name}  is updating`)
    })
  }
   onDeleteEmloyee(emp: Employee){
     this.Fireservices.doc(`Employee/${emp.id}`).delete().then(() =>{
       this.alert.success("this article wzs deleting")
     })
   }
}
