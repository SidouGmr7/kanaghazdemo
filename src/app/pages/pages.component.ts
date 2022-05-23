import { AuthService } from 'src/app/firebase/auth.service';
import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../Services/screen.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public screen: ScreenService,public authService:AuthService) { }

  ngOnInit(): void {
 

}

}
