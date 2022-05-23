import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/firebase/auth.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }
 

}
