import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AuthmasterGuard implements CanActivate {
  constructor(private router: Router, private firebaseAuth: AngularFireAuth, private db: AngularFireDatabase) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return new Promise((resolve, reject) => {
        if (this.firebaseAuth.currentUser) {
          

          this.firebaseAuth.onAuthStateChanged((user: firebase.User) => {
            if (user) {
              console.log('User is logged in');
              //console.log(this.db.object('Usuarios/'+user.uid).valueChanges().subscribe(res => {console.log(res['rol']); }) );
              //let userRol = 'blabla';
              this.db.object('Usuarios/'+user.uid).valueChanges().subscribe(res => {  
                console.log(res['rol']); 
                if (res['rol'] == 'cuidador') {
                  console.log('El usuario es cuidador');
                  this.router.navigate(['select-user'])
                  resolve(true);
                  
                }else if (res['rol'] == 'adultoMayor') {
                  console.log('El usuario es abuelito');
                  this.router.navigate([''])
                  resolve(true);
                }
              
              });
              //console.log(this.db.database.ref('Usuarios/'+user.uid). );
              //console.log("rol: " + userRol);
              
              
              


              
            } else { 
              console.log('User is not logged in');
              this.router.navigate(['login']);
              reject(false);
              
            }
          });



          resolve(true);
        }else{

        }
      });
    
    return true;
  }
  
}
