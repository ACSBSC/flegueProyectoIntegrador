import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../../models/appointment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  URL_API_GET_ALL = 'http://localhost:3000/api/get/cita/all';
  URL_API_POST = 'http://localhost:3000/api/post/cita/';
  URL_API_GET_ID = 'http://localhost:3000/api/get/cita/cita';
  URL_API_DELETE = 'http://localhost:3000/api/delete/cita/cita';

  selectedAppointment: Appointment = {
    doctor: '',
    name: '',
    location: '',
    day: '',

  };
  appointments: Appointment[] = [];


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

}
