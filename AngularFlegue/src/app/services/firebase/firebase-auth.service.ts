import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable(
  //{providedIn: 'root'}
)
export class FirebaseAuthService {
  //isLoggedIn = false; 

  constructor(public firebaseAuth: AngularFireAuth) { }

  signin(email: string, password: string){
    
    
    /* await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      //this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    }) 
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);*/

    return new Promise<any>((resolve, reject) => {
      this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  async signup(email: string, password: string){
    /* await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(res => {
      //this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    }) */
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);

  }

  logout(){
    //return this.firebaseAuth.signOut();
    //localStorage.removeItem('user')
    return new Promise((resolve, reject) => {
      if(this.firebaseAuth.currentUser){
        this.firebaseAuth.signOut();
        resolve();
      }
      else{
        reject();
      }
    });
  }
}
