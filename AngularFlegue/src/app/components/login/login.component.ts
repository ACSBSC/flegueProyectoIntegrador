import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/services/firebase/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedIn = false

  constructor(public authService: FirebaseAuthService, private router: Router, private auth: AngularFireAuth ) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  async onSignin(email:string, password:string){
    await this.authService.signin(email, password)
    if (this.authService.isLoggedIn)
    this.isSignedIn = true
  }

/*   onLogin(email:string, password:string){
    console.log("Holita login");
    
    this.auth.signInWithEmailAndPassword("prueba3@prueba3.com", "prueba12345").then(() => this.router.navigate(['']) );
    //console.log("email: " +  email + " password: " + password);
    //this.router.navigate(['medicinas']);
    
  } */

  /* onLogin(email:string, password: string){
    console.log("Holahola");
    
    this.auth.signInWithEmailAndPassword("prueba4@prueba4.co", "prueba12345}fs")
  } */

}
