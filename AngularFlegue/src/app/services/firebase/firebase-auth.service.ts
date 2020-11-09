import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  isLoggedIn = false; 

  constructor(private firebaseAuth: AngularFireAuth, private router: Router ) { }
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

  async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      //Create fb rtdb object
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
