import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';
import { NgForm } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment';


@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {


  constructor(public appointmentsService: AppointmentsService) {
  }

  ngOnInit(){

  }

  addAppointment(form: NgForm){
    console.log(form.value);
    this.appointmentsService.createAppointment(form.value).subscribe(
      res => {
        console.log(res),
        window.location.href = `/appointment`
      },
      err => console.error(err)
    )
  }



}
