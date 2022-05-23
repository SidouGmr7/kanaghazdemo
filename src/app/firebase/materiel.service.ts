import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Materiel } from './../model/materiel';
import { Injectable } from '@angular/core';
import { AlertsService } from '../Services/alerts.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  Mat!: Observable<Materiel[]>;
  constructor(public FireStore:AngularFirestore,public alert:AlertsService) { }



  GetMateriel(){
    this.Mat = this.FireStore.collection('Materiel').snapshotChanges().pipe(map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Materiel;
        data.id = a.payload.doc.id;
        return data;
      })
    })) as unknown as Observable<Materiel[]>;
    return this.Mat
  }

  AddMateriel(Mat:Materiel){
    return this.FireStore.collection('Materiel').add(Mat).then(()=>{
      this.alert.success('Le Materiel' + Mat.categorie + ' a été Ajouter')
    })
  }
  DeleteMateriel(Mat:Materiel){
    this.FireStore.collection('Materiel').doc(Mat.id).delete().then(() =>{
      this.alert.success("Le Materiel a été supprimer")
    })
  }

  ValideMateriel(Mat:Materiel,valide:string){
    Mat.valide = valide
    this.FireStore.collection('Materiel').doc(Mat.id).update(Mat).then(() =>{
      this.alert.success("La Validation de Materiel est mise a jour")
    })
  }
}