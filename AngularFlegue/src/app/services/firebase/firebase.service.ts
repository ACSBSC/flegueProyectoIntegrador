import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  

  constructor(private db: AngularFireDatabase) { }

  

  /* //Crear objeto
  public createObject(data: {att1: string, att2: string}) {
    return this.firestore.collection('cats').add(data);
    return this.firebase.database.ref('obj').
  }

  //Obtiene un objeto
  public getCat(documentId: string) {
    return this.firestore.collection('cats').doc(documentId).snapshotChanges();
  }

  //Obtiene todos los gatos
  public getCats() {
    return this.firestore.collection('cats').snapshotChanges();
  }

  //Actualiza un gato
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('cats').doc(documentId).set(data);
  } */

}
