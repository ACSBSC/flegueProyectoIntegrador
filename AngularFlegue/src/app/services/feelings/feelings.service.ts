import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feeling } from '../../models/feeling';

@Injectable({
  providedIn: 'root'
})
export class FeelingsService {

  URL_API_GET_ALL = 'http://localhost:3000/api/get/feels/all';
  URL_API_POST = 'http://localhost:3000/api/post/feels/';

  selectedFeeling: Feeling = {
    feeling: ''
  };

  feelings: Feeling[] = [];


  constructor(private http: HttpClient) { }

  getFeelings() {
    return this.http.get<Feeling[]>(this.URL_API_GET_ALL);
  }

  createFeeling(feeling: Feeling) {
    console.log('feeling', feeling);
    return this.http.post(this.URL_API_POST, feeling);
  }
}
