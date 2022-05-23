import { AuthService } from 'src/app/firebase/auth.service';
import { sidenavData } from '../../data/side-data';
import { Component, OnInit} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ScreenService } from 'src/app/Services/screen.service';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut' ,[
      transition(':enter',[ 
        style({opacity:0}), animate('2s', style({opacity:1}))
      ]),
      transition(':leave',[ 
        style({opacity:1}), animate('350ms', style({opacity: 0}))
      ])
    ])
  ]
})

export class SidenavComponent implements OnInit {
  navData = sidenavData;
  constructor(public screen: ScreenService,public authService:AuthService){
  }

  ngOnInit(): void {
    if(window.innerWidth<=768) this.screen.collapsed = false;
  }

  togglecollapse(): void{ 
    if(window.innerWidth>768)
    this.screen.collapsed = !this.screen.collapsed;
    else
    this.screen.collapsed = false
  }

 
}

