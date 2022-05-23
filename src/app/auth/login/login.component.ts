import { AuthService } from './../../firebase/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public authService:AuthService) {}
  ngOnInit(): void {}

  onLogin(email:string,password:string){
     this.authService.login(email,password)
  }

  
 
}


