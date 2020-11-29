import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as Firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  

  constructor(private auth: AngularFireAuth, private router: Router, private db: AngularFireDatabase, private firebaseService: FirebaseService) { }

  //public itemsRef: AngularFireList<any>;

  

  ngOnInit(): void {
    //this.itemsRef = this.db.list(`Cuidador/${Firebase.auth().currentUser.uid}`);
    
  }
  
  



  onSubmit(myForm: NgForm) {
  
  
    console.log(myForm.value);
    console.log(myForm.valid);
    let abueId = myForm.value.id;
    let redir = () => {this.router.navigate(['select-user'])};
    //console.log("Viejitos", this.firebaseService.getViejitos(Firebase.auth().currentUser.uid));
    
    

    if (myForm.valid) {
      /* let snap = Firebase.database().ref('Usuarios').once('value', function(snapshot) {
        if (snapshot.hasChild(abueId)) {
          console.log("Existeee");
          let cuidadorId = Firebase.auth().currentUser.uid;
          //Firebase.database().ref(`Usuarios/${abueId}`).
          Firebase.database().ref(`Cuidador/${cuidadorId}/PersonasMayores/`+abueId).set({idAbue: abueId}).then(()=>{
            console.log("Exito Redirect?");
            
          })
          
          
          
        }else{
          console.error("Hubo en error al añadir abuelito")
        }
      }); */
      
      Firebase.database().ref().child('Usuarios').orderByChild('email').equalTo(abueId).on("value", function(snapshot) {
        if (snapshot.val()) {
          console.log("Existeee");
          let cuidadorId = Firebase.auth().currentUser.uid;
          console.log("Snapshotval", snapshot.val());
          snapshot.forEach(function(data) {
            //console.log("datakey", data.val());
            let datakey = data.key;
            Firebase.database().ref(`Cuidador/${cuidadorId}/PersonasMayores/${data.key}`).set(data.val()).then(()=>{
              console.log("Exito Redirect?");
              window.alert("El abuelito se agregó con éxito");
              redir();
            })
          });
          
        }else{
          console.error("Hubo en error al añadir abuelito");
          window.alert("Hubo un error al agregar el abuelito. Revisa los datos")
        }
        
        /* console.log("Snapshotval", snapshot.val());
        snapshot.forEach(function(data) {
            console.log("datakey", data.key);
        }); */
    });
    }
      
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
  
  addAbue(form: NgForm) {
    console.log("FORMS", form.value);
    //let output = Object.assign(form.value, "bla");
    //console.log("USER", this.user);
    //console.log("output concat", output);
    /* this.signsService.createSign(output).subscribe(
      res => {
        console.log("res signos vitales", res),
        window.location.href = `/signos-vitales`
      },
      err => console.error(err)
    ) */

  }

}
