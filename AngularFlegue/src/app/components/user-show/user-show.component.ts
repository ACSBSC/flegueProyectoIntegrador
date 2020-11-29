import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as Firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  abue;
  constructor(public route: ActivatedRoute, private auth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) { }
  
  
  ngOnInit(): void {
    const abueId = this.route.snapshot.paramMap.get('id');
    
    Firebase.database().ref(`Usuarios/${abueId}`).once('value').then(
      snaphot => this.abue = snaphot.val()
    );
    console.log("abue", this.abue);
    
    
  }
  logout(){
    this.auth.signOut().then(() => this.router.navigate(['login']));
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
