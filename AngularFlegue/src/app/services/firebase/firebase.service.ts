import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { from, Observable } from 'rxjs';
import * as Firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';


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

  //Obtiene todos los objetos
  public getCats() {
    return this.firestore.collection('cats').snapshotChanges();
  }

  //Actualiza un objeto
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('cats').doc(documentId).set(data);
  } */

  getUserId(): Observable<any> {
    const hola = Firebase.auth();
    const userId = Firebase.auth().currentUser.uid;
    console.log("user desde firebase:", userId);
    let obj  = '{"user": "' + userId + '"}';
    let response = JSON.parse(obj);
    console.log("USER OBJ", response);
    return (response);

  }

}
