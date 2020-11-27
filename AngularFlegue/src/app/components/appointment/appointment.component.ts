import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';
import * as Firebase from 'firebase/app';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(public appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.getAppointments();

  }

  getAppointments() {
    const userId = Firebase.auth().currentUser.uid;
    console.log("Uid", userId);

    this.appointmentsService.getAppointments().subscribe(
      res => {
        let array = [];
        for (let key in res) {
          if(res.hasOwnProperty(key)) {
            if (res[key].user == userId) {
              array.push(res[key]);
            }
          }
        }
        this.appointmentsService.appointments = array;

      },
      err => console.error(err)
    )

  }

}
