import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase/firebase.service';


@Component({
  selector: 'app-emergency-button',
  templateUrl: './emergency-button.component.html',
  styleUrls: ['./emergency-button.component.css']
})
export class EmergencyButtonComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private router: Router, private firebaseService: FirebaseService) { }

  user;
  ngOnInit(): void {
    this.user = this.firebaseService.getUserId();
    localStorage.setItem('user', this.user.user);
  }

  logout(){
    this.auth.signOut().then(() => this.router.navigate(['login']));
    //this.firebase.auth().getCurrentUser
    //let user = this.auth.currentUser;
    //console.log(user);


    /* this.auth.onAuthStateChanged((user: firebase.User) => {
      if (user) {
        console.log('User is logged in');
        console.log(user.uid);

      } else {
        console.log('User is not logged in');

      }
    }); */

  }

}
