import { Component, OnInit } from '@angular/core';
import { MedicinesService } from '../../services/medicines/medicines.service';
import { FirebaseService } from '../../services/firebase/firebase.service'
import { NgForm } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-medicinas-form',
  templateUrl: './medicinas-form.component.html',
  styleUrls: ['./medicinas-form.component.css']
})
export class MedicinasFormComponent implements OnInit {

  constructor(
    public medicinesService: MedicinesService,
    public firebaseService: FirebaseService
    ) { }

    user;
    error;

  ngOnInit(): void {
    this.user = this.firebaseService.getUserId();

  }

  addMedicine(form: NgForm) {
    console.log(form.value);
    let output = Object.assign(form.value, this.user);
    this.medicinesService.createMedicine(output).subscribe(
      res => {
        console.log(res),
        window.location.href = '/medicinas'
      },
      err => console.error(err)
    )
  }

}
