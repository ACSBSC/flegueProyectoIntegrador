import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sign } from '../../models/sign';
import { Observable } from 'rxjs';
import * as Firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import "firebase/firestore";
import "firebase/auth";



@Injectable({
  providedIn: 'root'
})
export class SignsService {

  URL_API_POST = 'http://localhost:3000/api/post/signs';
  URL_API_LAST_SIGN = "http://localhost:3000/api/get/signs/last";

  selectedSign: Sign = {
    sys: 0,
    day: 0,
    pulse: 0,
    user: ''
  };

  lastSign: Sign = {
    sys: 0,
    day: 0,
    pulse: 0,
    user: '',
    date: ''
  };

  appointments: Sign [] = [];

  constructor(private http: HttpClient,
    private afAuth: AngularFireAuth) { }

  createSign(sign: Sign) {
    console.log('service', sign);
    return this.http.post(this.URL_API_POST, sign);
  }

  getLastSign(id): Observable<any> {
    console.log('service getLastSign', id);
    return this.http.get(`${this.URL_API_LAST_SIGN}/${id}`);

  }

}
