import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MedicinesService } from '../../services/medicines/medicines.service'
import { Medicine } from '../../models/medicine';

@Component({
  selector: 'app-medicinas-form-edit',
  templateUrl: './medicinas-form-edit.component.html',
  styleUrls: ['./medicinas-form-edit.component.css']
})
export class MedicinasFormEditComponent implements OnInit {
  medicine;
  error;

  constructor(
    public route: ActivatedRoute,
    public medicinesService: MedicinesService
  ) { }

  ngOnInit(): void {
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
    const medicineId = this.route.snapshot.paramMap.get('id');
    console.log(medicineId);
    this.medicinesService.updateMedicine(medicineId, form.value).subscribe(
      res => {
        console.log(res),
        window.location.href = `/medicinas-show/${medicineId}`
      },
      err => console.error(err)
    )

  }

}
