import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Materiel } from 'src/app/model/materiel';
import { MaterielService } from 'src/app/firebase/materiel.service';

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent implements OnInit {

  constructor(public MaterielService:MaterielService) { }

  ngOnInit(): void {
  }
  onAdd(Materiel:Materiel){
    Materiel.date = this.ChekDate(Materiel) as unknown as Date
    Materiel.valide = 'attente'
    this.MaterielService.AddMateriel(Materiel)
  }

  ChekDate(Materiel:Materiel){
    const date = new DatePipe('en-US').transform(Materiel.date, 'dd/MM/yyyy')
      return date;
  }
}

