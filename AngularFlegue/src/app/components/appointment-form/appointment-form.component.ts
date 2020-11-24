import { Component, OnInit, EventEmitter } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';
import { FirebaseService } from '../../services/firebase/firebase.service'
import { NgForm } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment';
import { Observable } from 'rxjs';
import * as Firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {


  constructor(
    public appointmentsService: AppointmentsService,
    public firebaseService: FirebaseService
    ) {
  }

  user;
  error;

  ngOnInit(){
    this.user = this.firebaseService.getUserId();
  }

  addAppointment(form: NgForm){
    console.log("FORMS", form.value);
    let output = Object.assign(form.value, this.user);
    console.log("output concat", output);
    this.appointmentsService.createAppointment(output).subscribe(
      res => {
        console.log(res),
        window.location.href = `/appointment`
      },
      err => console.error(err)
    )
  }






}
