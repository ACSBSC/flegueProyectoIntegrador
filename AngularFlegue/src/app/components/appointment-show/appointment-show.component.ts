import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentsService } from '../../services/appointments/appointments.service'

@Component({
  selector: 'app-appointment-show',
  templateUrl: './appointment-show.component.html',
  styleUrls: ['./appointment-show.component.css']
})
export class AppointmentShowComponent implements OnInit {
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

  deleteAppointment(id: string) {

    if (confirm('¿Seguro que quieres borrar esta cita?')) {
      console.log('id', id)
      this.appointmentsService.deleteAppointment(id)
        .subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        )
    }
  }

  appointmentCompleted(id: string) {
    console.log(id, "completed");
    let newStatus = "completed";
    this.appointmentsService.updateAppointmentStatus(id, newStatus)
    .subscribe(
      (res) => {
        console.log(res);
        window.location.href = `/appointment`

      },
      (err) => console.log(err)
    )
  }


  appointmentMissing(id: string) {
    console.log(id, "missing");
    let newStatus = "missing";
    this.appointmentsService.updateAppointmentStatus(id, newStatus)
    .subscribe(
      (res) => {
        console.log(res);
        window.location.href = `/appointment`
      },
      (err) => console.log(err)

    )
  }

}
