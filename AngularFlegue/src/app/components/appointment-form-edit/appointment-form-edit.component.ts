import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentsService } from '../../services/appointments/appointments.service'



@Component({
  selector: 'app-appointment-form-edit',
  templateUrl: './appointment-form-edit.component.html',
  styleUrls: ['./appointment-form-edit.component.css']
})
export class AppointmentFormEditComponent implements OnInit {
  appointment;
  error;

  constructor(
    public route: ActivatedRoute,
    public appointmentsService: AppointmentsService
  ) { }

  ngOnInit(): void {
    this.loadAppointment();
  }

  loadAppointment() {
    const appointmentId = this.route.snapshot.paramMap.get('id');
    this.appointmentsService.getAppointmentById(appointmentId).subscribe(
      data => this.appointment = data,
      error => this.error = error
    )

  }

}
