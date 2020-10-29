import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/services/firebase/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedIn = false

  constructor(public authService: FirebaseAuthService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  async onSignin(email:string, password:string){
    /* await this.authService.signin(email, password);
    this.router.navigate(['']); */

    this.authService.signin(email, password).then((data) => {
      this.router.navigate(['']);
    })

    /* if (this.authService.isLoggedIn)
    this.isSignedIn = true */
  }

}
