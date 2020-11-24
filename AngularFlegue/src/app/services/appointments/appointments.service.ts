import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../../models/appointment';
import { Observable } from 'rxjs';
import * as Firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  URL_API_GET_ALL = 'http://localhost:3000/api/get/cita/all';
  URL_API_POST = 'http://localhost:3000/api/post/cita/';
  URL_API_GET_ID = 'http://localhost:3000/api/get/cita/cita';
  URL_API_DELETE = 'http://localhost:3000/api/delete/cita/cita';
  URL_API_PUT = 'http://localhost:3000/api/update/cita';
  URL_API_PUT_STATUS = 'http://localhost:3000/api/update/cita/status';

  selectedAppointment: Appointment = {
    doctor: '',
    name: '',
    location: '',
    day: '',
    user: ''

  };
  appointments: Appointment[] = [];

  response;


  constructor(private http: HttpClient) { }



  getAppointments() {
    return this.http.get<Appointment[]>(this.URL_API_GET_ALL);
  }

  createAppointment(appointment: Appointment) {
    console.log('service', appointment);
    return this.http.post(this.URL_API_POST, appointment);

  }

  getAppointmentById(id): Observable<any> {
    return this.http.get(`${this.URL_API_GET_ID}/${id}`);
  }

  deleteAppointment(id: string) {
    console.log('id service', id);
    return this.http.delete(`${this.URL_API_DELETE}/${id}`);
  }

  updateAppointment(id: string, appointment: Appointment) {
    return this.http.put(`${this.URL_API_PUT}/${id}`, appointment);
  }

  updateAppointmentStatus(id: string, status: string) {
    let obj  = '{"status": "' + status + '"}';
    let response = JSON.parse(obj);
    return this.http.put(`${this.URL_API_PUT_STATUS}/${id}`, response);

  }

  /*
  getUserId(): Observable<any> {
    const userId = Firebase.auth().currentUser.uid;

    let obj  = '{"user": "' + userId + '"}';
    this.response = JSON.parse(obj);
    console.log("USER OBJ", this.response);
    return (this.response);

  }
  */

}
