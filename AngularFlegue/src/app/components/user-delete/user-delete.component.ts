import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { from, Observable } from 'rxjs';
import * as Firebase from 'firebase/app';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  public dinosaurs: Observable<any[]>;
  constructor(private auth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) { }
  public itemsRef: AngularFireList<any> = this.db.list(`Cuidador/${Firebase.auth().currentUser.uid}/PersonasMayores`);
  ngOnInit(): void {
    this.dinosaurs = this.itemsRef.valueChanges();
    this.dinosaurs.subscribe(v => console.log("v", v));
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
  deleteUser(id){
    console.log("Holota");
    
    Firebase.database().ref(`Cuidador/${Firebase.auth().currentUser.uid}/PersonasMayores/${id}`).remove();
  }

}
