import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  isLoggedIn = false; 

  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase ) { }
  async signin(email: string, password: string){
    console.log("Holita login service");
    
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log("login exito");
      
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['']);
    }).catch(function(error) {
      console.log('firebase sign in error ',email, error)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      });
  }

  async signup(email: string, password: string, phone: string, rol: string, nombre: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      this.db.list('Usuarios').push({id: res.user.uid,
                                  email: res.user.email,
                                  name: nombre,
                                  phone: phone,
                                  rol: rol});
      this.router.navigate(['']);
    }).catch(function(error) {
      console.log('firebase sign in error ',email, error)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      });
  }

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
