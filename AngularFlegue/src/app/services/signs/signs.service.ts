import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sign } from '../../models/sign';
import { Observable } from 'rxjs';
import * as Firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SignsService {

  URL_API_POST = 'http://localhost:3000/api/post/signs/';

  selectedSign: Sign = {
      sys: 0,
      day: 0,
      pulse: 0,
      user: ''
  }

  signs: Sign[] = []

  constructor(private http: HttpClient) { }

  createSign(sign: Sign) {
    return this.http.post(this.URL_API_POST, sign);
  }
}
