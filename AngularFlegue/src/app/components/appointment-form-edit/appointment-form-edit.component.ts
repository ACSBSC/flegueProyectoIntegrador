import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AppointmentsService } from '../../services/appointments/appointments.service'
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Appointment } from '../../models/appointment';


@Component({
  selector: 'app-appointment-form-edit',
  templateUrl: './appointment-form-edit.component.html',
  styleUrls: ['./appointment-form-edit.component.css']
})
export class AppointmentFormEditComponent implements OnInit {
  user;
  appointment;
  error;

  constructor(
    public route: ActivatedRoute,
    public appointmentsService: AppointmentsService,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.user = this.firebaseService.getUserId();
    this.loadAppointment();
  }

  loadAppointment() {
    const appointmentId = this.route.snapshot.paramMap.get('id');
    this.appointmentsService.getAppointmentById(appointmentId).subscribe(
      data => this.appointment = data,
      error => this.error = error
    )

  }

  editAppointment(form: NgForm) {
    console.log(form.value);
    const appointmentId = this.route.snapshot.paramMap.get('id');
    let output = Object.assign(form.value, this.user);
    console.log("output concat", output);
    this.appointmentsService.updateAppointment(appointmentId, output).subscribe(
      res => {
        console.log("result", res),
        window.location.href = `/appointment-show/${appointmentId}`
      },
      err => console.error(err)
    )
  }
}
