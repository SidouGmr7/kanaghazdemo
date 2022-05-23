import { DialogService } from './../../Services/dialog.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/firebase/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService:AuthService,public dialog:DialogService) { 
  }
  ngOnInit(): void {   
    
  

  }  
}
