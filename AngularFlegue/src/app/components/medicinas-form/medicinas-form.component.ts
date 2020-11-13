import { Component, OnInit } from '@angular/core';
import { MedicinesService } from '../../services/medicines/medicines.service';
import { NgForm } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-medicinas-form',
  templateUrl: './medicinas-form.component.html',
  styleUrls: ['./medicinas-form.component.css']
})
export class MedicinasFormComponent implements OnInit {

  constructor(public medicinesService: MedicinesService) { }

  ngOnInit(): void {
  }

  addMedicine(form: NgForm) {
    console.log(form.value);
    this.medicinesService.createMedicine(form.value).subscribe(
      res => console.log(res),
      err => console.error(err)
    )
  }

}
