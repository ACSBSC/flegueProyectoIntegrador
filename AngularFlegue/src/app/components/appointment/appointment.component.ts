import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(public appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.getAppointmentsPending();

  }

  getAppointmentsPending() {
    this.appointmentsService.getAppointmentsPending().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            array.push(res[key]);
          }
        }
        this.appointmentsService.pending = array;

      },
      err => console.error(err)
    )

  }

}
