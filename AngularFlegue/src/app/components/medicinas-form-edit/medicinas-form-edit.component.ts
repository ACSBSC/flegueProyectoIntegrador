import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MedicinesService } from '../../services/medicines/medicines.service'
import { FirebaseService } from '../../services/firebase/firebase.service'

import { Medicine } from '../../models/medicine';

@Component({
  selector: 'app-medicinas-form-edit',
  templateUrl: './medicinas-form-edit.component.html',
  styleUrls: ['./medicinas-form-edit.component.css']
})
export class MedicinasFormEditComponent implements OnInit {
  user;
  medicine;
  error;

  constructor(
    public route: ActivatedRoute,
    public medicinesService: MedicinesService,
    public firebaseService: FirebaseService

  ) { }

  ngOnInit(): void {
    this.user = this.firebaseService.getUserId();
    this.loadMedicine();
  }

  loadMedicine() {
    const medicineId = this.route.snapshot.paramMap.get('id');
    this.medicinesService.getMedicineById(medicineId).subscribe(
      data => this.medicine = data,
      error => this.error = error
    )
  }

  editMedicine(form: NgForm) {
    console.log(form.value);
    let output = Object.assign(form.value, this.user);
    console.log("output concat", output);
    const medicineId = this.route.snapshot.paramMap.get('id');
    console.log(medicineId);
    this.medicinesService.updateMedicine(medicineId, output).subscribe(
      res => {
        console.log(res),
        window.location.href = `/medicinas-show/${medicineId}`
      },
      err => console.error(err)
    )

  }

}
