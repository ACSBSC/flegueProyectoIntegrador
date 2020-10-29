import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/firebase/firebase-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSignedIn = false

  constructor(public authService: FirebaseAuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string, password:string){
    await this.authService.signup(email, password)
    if (this.authService.isLoggedIn)
    this.isSignedIn = true
  }
}
