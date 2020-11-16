import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class IsloggedinGuard implements CanActivate {
  constructor(private router: Router, private firebaseAuth: AngularFireAuth, private db: AngularFireDatabase) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return new Promise((resolve, reject) => {
        if (this.firebaseAuth.currentUser) {
          

          this.firebaseAuth.onAuthStateChanged((user: firebase.User) => {
            if (user) {
              console.log('User is logged in');
              
              reject(false);
              this.router.navigate(['']);

              
              
              


              
            } else { 
              console.log('User is not logged in');
              //this.router.navigate(['login']);
              resolve(true);
              
            }
          });



          resolve(true);
        }else{

        }
      });
    
    return true;
  }
  
}
