import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../../models/medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  URL_API_GET_ALL = 'http://localhost:3000/api/get/meds/all';
  URL_API_POST = 'http://localhost:3000/api/post/meds/';
  URL_API_GET_ID = 'http://localhost:3000/api/get/meds/cita';
  URL_API_DELETE = 'http://localhost:3000/api/delete/meds/cita';
  URL_API_PUT = 'http://localhost:3000/api/update/meds';
  URL_API_PUT_STATUS = 'http://localhost:3000/api/update/meds/status';


  selectedMedicine: Medicine = {
    name: '',
    function: '',
    time: ''
  };

  medicines: Medicine[] = [];

  constructor(private http: HttpClient) { }

  getMedicines() {
    // petición a la API
    console.log('service')
    return this.http.get<Medicine[]>(this.URL_API_GET_ALL);

  }

  createMedicine(medicine: Medicine) {
    console.log('medicine', medicine);
    return this.http.post(this.URL_API_POST, medicine);
  }

  getMedicineById(id): Observable<any> {
    return this.http.get(`${this.URL_API_GET_ID}/${id}`);

  }

  deleteMedicine(id: string) {
    return this.http.delete(`${this.URL_API_DELETE}/${id}`);
  }

  updateMedicine(id: string, medicine: Medicine) {
    return this.http.put(`${this.URL_API_PUT}/${id}`, medicine);

  }

  updateMedicineStatus(id: string, status: string) {
    let obj  = '{"status": "' + status + '"}';
    let response = JSON.parse(obj);
    return this.http.put(`${this.URL_API_PUT_STATUS}/${id}`, response);


  }

}
