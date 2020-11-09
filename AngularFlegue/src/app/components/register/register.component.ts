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
  async onSignup(event: Event, email:string, password:string, phone: string, rol: string, nombre: string){
    event.preventDefault();
    await this.authService.signup(email, password, phone, rol, nombre)
    if (this.authService.isLoggedIn)
    this.isSignedIn = true
  }
}
