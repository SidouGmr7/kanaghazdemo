import { AuthService } from 'src/app/firebase/auth.service';
import { champs, Materiel } from './../../model/materiel';
import { MaterielService } from './../../firebase/materiel.service';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css'],

})
export class MaterielComponent implements OnInit {
  Mat: Materiel[] = []
  first = 5;

  rows = 10;
  champs = champs
  constructor(public MaterielService:MaterielService,public AuthService:AuthService) { }

  ngOnInit(): void {
    this.ShowMateriel()
  }
  ShowMateriel(){
    this.MaterielService.GetMateriel().subscribe(Mat =>{
      this.Mat = Mat;
    })
  }

  onDelete(Materiel:Materiel){
    this.MaterielService.DeleteMateriel(Materiel)
  }
  onAccipte(Materiel:Materiel){
    this.MaterielService.ValideMateriel(Materiel,"valide")

  }
  onRefuse(Materiel:Materiel){
    this.MaterielService.ValideMateriel(Materiel, "refuse")

  }

  exportExcel(): void{
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, "materiel.xlsx");
 
  }

}

